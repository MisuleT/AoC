type Part = { x: number, m: number, a: number, s: number, [key: string]: number };
type Rule = { condition: string, next: string };
type Workflow = { name: string, rules: Rule[] };

function parseInput(input: string): { workflows: Workflow[], parts: Part[] } {
    const [workflowsSection, partsSection] = input.split('\n\n');
    const workflows = workflowsSection.split('\n').map(line => {
        const [name, rulesSection] = line.split('{');
        const rules = rulesSection.slice(0, -1).split(',').map(rule => {
            const colonIndex = rule.indexOf(':');
            const condition = rule.slice(0, colonIndex);
            const next = rule.slice(colonIndex + 1);
            return { condition, next };
        });
        return { name, rules };
    });
    const parts = partsSection.split('\n').map(line => {
        const [x, m, a, s] = line.slice(1, -1).split(',').map(pair => parseInt(pair.split('=')[1]));
        return { x, m, a, s };
    });
    return { workflows, parts };
}
function processPart(workflows: Workflow[], part: Part): boolean {
    let currentWorkflow = workflows.find(workflow => workflow.name === 'in');
    // console.log(`Starting workflow: ${currentWorkflow?.name}`);
    while (currentWorkflow) {
        let ruleApplied = false;
        for (const rule of currentWorkflow.rules) {
            // console.log(`Checking rule: ${rule.condition}`);
            // TODO no condition check next
            if (!rule.condition && (rule.next === 'A' || rule.next === 'R')) {
                // console.log(`Rule applied: ${rule.next}`);
                return rule.next === 'A';
            }
            const match = rule.condition.match(/(?<property>[a-z])(?<operator>[<>])(?<value>\d+)/);
            if (match && match.groups) {
                const { property, operator, value } = match.groups;
                // console.log('my console',part[property], [property, operator, value]);
                if ((operator === '<' && part[property] < parseInt(value)) || (operator === '>' && part[property] > parseInt(value))) {
                    // console.log(`Rule applied: ${rule.condition}`, [part[property], operator, parseInt(value)]);
                    currentWorkflow = workflows.find(workflow => workflow.name === rule.next);

                    if (rule.next === 'A' || rule.next === 'R') {
                        // console.log(`Rule applied: ${rule.next}`);
                        return rule.next === 'A';
                    }
                    // console.log(`No rule applied, moving to next workflow: ${rule.next}`);
                    ruleApplied = true;
                    break;
                }
            }
        }
        if (!ruleApplied) {
            const lastRule = currentWorkflow!.rules[currentWorkflow!.rules.length - 1];
            // console.log(`No rule applied, moving to next workflow: ${lastRule.next}`);
            currentWorkflow = workflows.find(workflow => workflow.name === lastRule.next);
        }
    }
    return false;
}

export const part1 = (input: string) => {
    const { workflows, parts } = parseInput(input);
    let total = 0;
    for (const part of parts) {
        if (processPart(workflows, part)) {
            total += part.x + part.m + part.a + part.s;
        }
    }
    return total;
}
export const part2 = (input: string) => {
    const { workflows } = parseInput(input);
    console.log(JSON.stringify(workflows, null, 2));

    return 0;
}
