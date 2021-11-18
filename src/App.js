import React from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import CreatedBy from './components/CreatedBy';

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <AddItem />
      </div>
      <CreatedBy />
    </div>
  );
}
