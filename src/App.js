import React from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import CreatedBy from './components/CreatedBy';

export default function App() {
  return (
    <div className="App">
      <Header header="Swedish SE internships"/>
      <AddItem />
      <CreatedBy name1="Amin Alian" name2="Ludvig Gierup"/>
    </div>
  );
}
