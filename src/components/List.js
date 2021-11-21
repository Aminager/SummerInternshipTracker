import React from "react";
import Company from './Company'

export default function List({ companies }) {
    return (
        <ul>
            {companies.map(item => (
                <Company company={item.company} city={item.city} role={item.role} />
            ))}
        </ul>
    );
}