import React from 'react';
import '../App.css'

export default function Header({header}) {
    return(
        <div>
            <header className="header">
                {header}
            </header>
        </div>
    );
}