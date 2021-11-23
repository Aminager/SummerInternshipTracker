import React from "react";
import Company from './Company'

export default function List({ companies }) {
    return (
        <ul>
            {companies.map(c => (
                <Company company={c.company} city={c.city} role={c.role} />
            ))}
        </ul>
    );
}