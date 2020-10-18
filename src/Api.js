import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  useEffect(() => {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <ul>
      {data.map((entry, index) => {
        return <li key={index}>{entry}</li>;
      })}
    </ul>
  );
};

export default App;
