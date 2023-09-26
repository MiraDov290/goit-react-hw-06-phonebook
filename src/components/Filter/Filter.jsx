import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import { Div, Label, Input } from './Filter.styled';


const filterInputId = nanoid();
// Компонент фільтрації контактів
const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();


  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={onChange}
          id={filterInputId}
        />
      </Label>
    </Div>
  );
}


export default Filter;