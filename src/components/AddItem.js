import React, { useState }  from "react";
import ListItem from "./ListItem";

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
            <button className="addbutton" onClick={addItem}>
                Add company</button>

            <ul>
                {list.map(item => (
                    <ListItem company={item.company} city={item.city} role={item.role}/>
                ))}
            </ul>
        </div>
    );
}