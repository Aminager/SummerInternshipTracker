import React from "react";

export default function Company({company, city, role}) {
    return(
        <div className="company">
            <p>{company}</p>
            <p>{city}</p>
            <p>{role}</p>
        </div>
    );
}