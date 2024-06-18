// src/components/ListForm.js

import React, { useState, useEffect } from 'react';
import { createList, updateList } from '../services/api';

const ListForm = ({ list, onSubmit }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (list) {
      setName(list.name);
    } else {
      setName('');
    }
  }, [list]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (list) {
      await updateList(list.key, { name });
    } else {
      await createList({ name });
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className='flex mx-auto justify-center items-center '>
      <input
        type="text"
        placeholder="List Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className='p-3 border-2 md:w-4/12 rounded-md m-2 '
      />
      <button type="submit" className='p-3 border-2 bg-green-600 rounded-md text-white outline-none focus:border-none'>{list ? 'Update' : 'Create'} List</button>
    </form>
  );
};

export default ListForm;
