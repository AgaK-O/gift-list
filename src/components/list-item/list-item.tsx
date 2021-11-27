import React, { FC } from 'react';

import { ListItemType } from '../../commons/types';

import './list-item.scss'

type Props = {
  listItem: ListItemType;
  handleToggle: (id: number) => void;
};

export const ListItem: FC<Props> = ({ listItem, handleToggle}) => {
  const additionalClassName = listItem.complete ? 'complete' : '';
  const handleClick = (e: any) => {
        e.preventDefault()
        handleToggle(parseInt(e.currentTarget.id, 10))
    }

  return (
      <li className="list-item">
      <label className="custom-checkbox" onClick={handleClick} id={listItem.id.toString()}>
        <input type="checkbox" />
        <span className={`checkmark ${additionalClassName}`}></span>
        <span>{listItem.item}</span>
      </label>
      <a href={listItem.link} className="link" target="_blank" rel="noreferrer">Link</a>
      </li>

  )
};
