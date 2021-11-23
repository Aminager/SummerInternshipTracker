import React, { useState } from "react";

export default function Form({ companies, cName, cCity, cRole, setCName, setCCity, setCRole, setCompanies }) {

    const updateName = (e) => {
        setCName(e.target.value)
    }

    const updateCity = (e) => {
        setCCity(e.target.value)
    }

    const updateRole = (e) => {
        setCRole(e.target.value)
    }

    function resetInputValues() {
        setCName("")
        setCCity("")
        setCRole("")
    }

    const submitCompany = (e) => {
        e.preventDefault();
        if (cName === "" && cCity === "" && cRole === "") {
            alert("Please fill out the form")
        } else {
            setCompanies([...companies, { company: cName, city: cCity, role: cRole }])
            console.log(companies)
            resetInputValues()
        }
    }


    return (
        <form>
            <input onChange={updateName} value={cName} placeholder="Enter Company Name" name="company-name" type="text" />
            <input onChange={updateCity} value={cCity} placeholder="Enter internship city" name="company-city" type="text" />
            <input onChange={updateRole} value={cRole} placeholder="Enter internship role" name="company-role" type="text" />
            <button onClick={submitCompany} className="addbutton"><i>Add company</i></button>
        </form>

    );
}