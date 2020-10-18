import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const removeCharacter = (index) =>
    setCharacters(characters.filter((character, i) => i !== index));

  const handleSubmit = (character) => {
    setCharacters([...characters, character]);
  };

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
