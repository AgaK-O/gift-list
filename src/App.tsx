import React, {useState, useCallback} from 'react';

import {List} from '../src/components/list/list';
import {ListItemForm} from '../src/components/list-item-form/list-item-form'
import data from '../src/data/data.json';

import './App.scss';

function App() {
  const [ list, setList ] = useState(data);

  const handleToggle = useCallback((id: number) => {
     let mapped = list.map(item => {
       return item.id === id ? { ...item, complete: !item.complete } : { ...item};
     });
     setList(mapped);
   }, [list, setList]);

   const addItem = useCallback((userInput) => {
     let copy = [...list];
     copy = [...copy, {id: copy.length + 1, item: userInput.item, complete: false, link: userInput.link}]
     setList(copy);
     console.log(list)
   },[list, setList]);

  return (
    <div className="main">
      <h2>Lista prezentow</h2>
      <List list={list} handleToggle={handleToggle}/>
      <ListItemForm addItem={addItem}/>
    </div>
  );
};

export default App;
