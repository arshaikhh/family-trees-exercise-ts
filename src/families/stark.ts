import { Person } from "../personTypes";

export function createStarkTree(): Person {

    const eddardKids:Person[] = [
        {name:"Rickon", children:[]},
        {name:"Bran", children:[]},
        {name:"Arya", children:[]},
        {name:"Sansa", children:[]},
        {name:"Rob", children:[]},
        {name:"Jon", children:[]}
    ]

    const rickardKids:Person[]= [
        {name:"BenGem", children:[]},
        {name:"Lyanna", children:[]},
        {name:"Brandon", children:[]},
        {name:"Eddard", children:eddardKids}

    ]
    return { name: "Rickard" , children: rickardKids };
}