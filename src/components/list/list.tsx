import React, { FC } from 'react';

import {ListItem} from '../list-item/list-item';
import { ListItemType } from '../../commons/types'

import './list.scss';

type Props = {
  name?: string;
  list: ListItemType[];
  handleToggle: (id: number) => void;
};

export const List: FC<Props> = ({ name, list, handleToggle }) => {
  return (
    <>
      {name &&
        <h2>{name}</h2>
      }
      <ul className="list">
        { list?.map(item => {
          return <ListItem listItem={item} handleToggle={handleToggle}  key={item.id + item.item}/>
        })}
      </ul>
    </>
  )
}
