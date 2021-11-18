import React from "react";
import ListItem from "./ListItem";

export default function AddItemButton() {
    let list = [];

    function addItem() {
        list.push(<ListItem />);
        alert("Added company");
    };

    return(
        <button onClick={addItem}>Add Company</button>
    );
}