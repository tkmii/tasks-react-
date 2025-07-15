// import { useState, useEffect } from 'react';
import './List.css';

function List({ data }) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default List;