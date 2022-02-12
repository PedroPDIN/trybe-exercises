import React, { useState } from 'react';
import useArray from './hooks/useArray'
import './App.css';

const App = () => {
  const [value, setValue] = useState('');
  const { lists, handleClick } = useArray()

  const handleChange = ({ target }) => {
    setValue(target.value);
  }

  return (<div>
    <input
      type="text"
      name="value"
      value={value}
      onChange={handleChange}
    />

    <button type="button" onClick={() => handleClick(value)}>Salvar</button>

    <p>{value}</p>
    <ul>
      {lists.map((list) => (
        <li>
          {list}
        </li>
      ))}
  </ul>
  </div >

  );
}

export default App;
