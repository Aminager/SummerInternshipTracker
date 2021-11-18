import React from 'react';
import Header from './components/Header';
import CompanyList from './components/CompanyList';
import AddItem from './components/AddItem';

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <AddItem />
      </div>
    </div>
  );
}
