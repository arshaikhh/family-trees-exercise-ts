import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    const peopleStack:Person[] = []
    peopleStack.push(topPerson)
    while (peopleStack.length>0) {
        const removedPerson = peopleStack.pop()
        if(removedPerson!==undefined) {
            console.log(removedPerson.name)
            for (let children of removedPerson.children) {
                peopleStack.push(children)
            }
            
        }
       
    }
    
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
}

