import React, { useState }  from "react";

export default function AddItem() {

    const [list, setList] = useState([
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
    ])

    function addItem() {
        setList(oldList => [...oldList, {
            company: 'test',
            city: 'test',
            role: 'test'
        }])
    }

    return (
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