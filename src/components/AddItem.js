import React from "react";

const list = [
    {
        company: 'IKEA',
        city: 'Stockholm',
        role: 'Software Engineer'
    },
    {
        company: 'Axis',
        city: 'Lund',
        role: 'Software Engineer'
    }
];

//Funkar ej
function addItem() {
    list.push({
        company: 'test',
        city: 'test',
        role: 'test'
    })
}



export default function AddItem(){
    return(
        <div>
            <button onClick={
                addItem
            }>Add company</button>  
            <ul> 
                {list.map((item) => (
                    <li>{item.company}, {item.city}, {item.role}</li>
                ))}
            </ul>
        </div>
    );
}