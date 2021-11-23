import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CreatedBy from './components/CreatedBy';
import Form from './components/Form'
import List from './components/List'
import data from './database/companies.json'

export default function App() {
  const [companies, setCompanies] = useState([])

  // const getCompanies = () => {
  //   fetch('https://raw.githubusercontent.com/Aminager/SummerInternshipTracker/main/src/database/companies.json')
  //   .then(resp => resp.json())
  //   .then(respJson => setCompanies(respJson))
  // }

  const getCompanies = () => {
    setCompanies(data)
  }

  const writeCompanies = () => {
  }

  useEffect(() => {
    getCompanies()
  }, [])

  useEffect(() => {
    writeCompanies()
  }, [companies])

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
