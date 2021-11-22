import React, { useState } from 'react';
import Header from './components/Header';
import CreatedBy from './components/CreatedBy';
import Form from './components/Form'
import List from './components/List'

export default function App() {
  const [companies, setCompanies] = useState([{
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

  const [cName, setCName] = useState("")
  const [cCity, setCCity] = useState("")
  const [cRole, setCRole] = useState("")

  return (
    <div className="App">
      <Header header="Swedish SE internships" />
      <Form
        companies={companies}
        setCompanies={setCompanies}
        cName={cName}
        setCName={setCName}
        cCity={cCity}
        setCCity={setCCity}
        cRole={cRole}
        setCRole={setCRole}
      />
      <List companies={companies}/>
      <CreatedBy name1="Amin Alian" name2="Ludvig Gierup" />
    </div>
  );
}
