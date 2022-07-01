import './App.css';
import React from 'react';
import AddCardForm from './components/AddCardForm';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
     <h1>Bhumio inc Assignment</h1>
     <AddCardForm/>
     <CardList/>
    </div>
  );
}

export default App;
