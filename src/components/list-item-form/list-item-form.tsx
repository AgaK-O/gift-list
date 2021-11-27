import React, { FC, useState, useCallback } from 'react';

import './list-item-form.scss';

type Props = {
  addItem: (a: {}) => void;
}

export const ListItemForm: FC<Props> = ({addItem}) => {

  const [ itemInput, setitemInput ] = useState('');
  const [ linkInput, setLinkInput ] = useState('');

  const handleChangeItem = useCallback((e: any) => {
    setitemInput(e.currentTarget.value);
  }, [setitemInput]);

  const handleChangeLink = useCallback((e: any) => {
    setLinkInput(e.currentTarget.value);
  }, [setLinkInput]);

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    addItem({item: itemInput, link: linkInput});
    setitemInput('');
    setLinkInput('');
  },[addItem, itemInput, setitemInput, setLinkInput, linkInput]);


  return (
    <form onSubmit={handleSubmit}>
      <div className="add-item-input">
        <input className="add-input" type="text" placeholder="Wpisz nazwę" value={itemInput} onChange={handleChangeItem}/>
        <input className="add-input" type="url" placeholder="Wpisz link" value={linkInput} onChange={handleChangeLink}/>
        <button className="add-button">Dodaj</button>
      </div>
    </form>
  );
}
