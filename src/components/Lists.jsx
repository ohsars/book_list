// src/components/List.js

import React, { useEffect, useState } from 'react';
import { getLists, deleteList } from '../services/api';
import ListForm from './ListForm';
import { Footer } from './Footer';

const List = () => {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    const data = await getLists();
    // console.log(data.entries)
    setLists(data.entries);
  };

  const handleDelete = async (listId) => {
    alert(`Are you sure you want to delete ${listId}???`)
    await deleteList(listId);
    fetchLists();
  };

  const handleEdit = (list) => {
    setSelectedList(list);
  };

  const handleFormSubmit = () => {
    fetchLists();
    setSelectedList(null);
  };

  return (
    <>
      <div className='flex w-full justify-center self-center mx-auto mt-5 '>
      <div>
        <h1 className='text-4xl font-bold text-center mb-20'>Book Lists</h1>

        
        <ListForm list={selectedList} onSubmit={handleFormSubmit} />

        <ul className='p-6 grid md:grid-cols-3 lg:grid-cols-4'>
          {lists.map((list) => (
            <li key={list.url} className='bg-blue-100 hover:shadow-xl hover:bg-blue-300 ease-in-out transition hover:transform-gpu p-4 m-2 rounded-md'>
              <p className='text-[16px] font-semibold uppercase mb-2'>{list.name}</p>
              <p className='text-xs text-red-700'><span className='font-bold text-black'>url: </span>{list.url}</p>
              <p className='text-xs text-red-700'><span className='font-bold text-black'>last Updated: </span>{list.last_update}</p>
              <div className='flex mt-2 gap-2'>
                <button onClick={() => handleEdit(list)} className='p-2 hover:bg-white rounded-sm'>🖋️</button>
                <button onClick={() => handleDelete(list.key)} className='p-2 hover:transform-gpu hover:bg-red-600 rounded  '>🗑️</button>
              </div>
              
            </li>
          ))}
        </ul>
      </div>

      
    </div>
    
    <Footer />
    </>
    
  );
};

export default List;
