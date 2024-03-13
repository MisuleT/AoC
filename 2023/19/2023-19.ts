function getWorkflow(workflows: string[], workflowName: string) {
    return workflows.find(workflow => workflow.startsWith(workflowName));
}

function isCategoryValid(category: string, workflows: string[]) {
    let workflowName = 'in';
    if(workflowName === 'A') return true;
    if(workflowName === 'R') return false;
    let workflow = getWorkflow(workflows, workflowName)
    // recursion?
    return false;
}

export const part1 = (input: string) => {
    const plan = input.split('\n\n');
    const workflows =  plan[0].split('\n');
    const categories = plan[1].split('\n');
    let workflowName = 'in';
    let accepted: string[] = []
    let workflow = getWorkflow(workflows, workflowName)

    for (const category of categories) {
        if(isCategoryValid(category, workflows)){
            accepted.push(category)
        }
    }

    console.log(workflows)
    console.log(categories)

    return 0;
}
export const part2 = (input: string) => {
    return 0;
}
