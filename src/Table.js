import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ characterData, removeCharacter }) => {
  return (
    <tbody>
      {characterData.map((character, i) => (
        <tr key={`character-${i}`}>
          <td>{character.name}</td>
          <td>{character.job}</td>
          <td>
            <button onClick={() => removeCharacter(i)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({ characterData, removeCharacter }) => {
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
