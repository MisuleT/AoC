type Part = { x: number, m: number, a: number, s: number, [key: string]: number };
type Rule = { condition: string, next: string };
type Workflow = { name: string, rules: Rule[] };

function parseInput(input: string): { workflows: Workflow[], parts: Part[] } {
    const [workflowsSection, partsSection] = input.split('\n\n');
    const workflows = workflowsSection.split('\n').map(line => {
        const [name, rulesSection] = line.split('{');
        const rules = rulesSection.slice(0, -1).split(',').map(rule => {
            const colonIndex = rule.indexOf(':');
            if(colonIndex === -1) return { condition: '', next: rule.trim() };
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

type Range = {
    a: number[];
    s: number[];
    x: number[];
    m: number[]
};

function copyRange(range: Range): Range {
    return { a: [...range.a], s: [...range.s], x: [...range.x], m: [...range.m] };
}

function getValidRanges(workflows: Workflow[], range: Range, workflowName: string): Range[] {
    let allRanges: Range[] = [];
    if(workflowName === 'R') return [];
    if(workflowName === 'A') return [copyRange(range)];
    let workflow = workflows.find(workflow => workflow.name === workflowName);
    for (const rule of workflow!.rules) {
        if(!rule.condition){
            allRanges.push(...getValidRanges(workflows, copyRange(range), rule.next));
        }
        const match = rule.condition.match(/(?<property>[a-z])(?<operator>[<>])(?<value>\d+)/);
        if (match && match.groups) {
            const { property , operator, value } = match.groups as  {property: keyof Range, operator: string, value: string};
            if (operator === '<') {
                const newRange = copyRange(range);
                newRange[property] = [newRange[property][0], parseInt(value)-1];
                allRanges.push(...getValidRanges(workflows, newRange, rule.next));
                range[property] = [parseInt(value), range[property][1]];
            }
            if (operator === '>') {
                const newRange = copyRange(range);
                newRange[property] = [parseInt(value)+1, newRange[property][1]];
                allRanges.push(...getValidRanges(workflows, newRange, rule.next));
                range[property] = [range[property][0], parseInt(value)];
            }
        }
    }
    return allRanges;
}

export const part2 = (input: string) => {
    const { workflows } = parseInput(input);
    const range = {x: [1, 4000], m: [1, 4000], a: [1, 4000], s: [1, 4000]};
    const validRanges = getValidRanges(workflows, range, 'in');
    let sum = 0;
    for (const validRange of validRanges) {
        sum += (validRange.x[1] - validRange.x[0] +1) * (validRange.m[1] - validRange.m[0]+1) * (validRange.a[1] - validRange.a[0]+1) * (validRange.s[1] - validRange.s[0]+1);
    }
    return sum;
}
