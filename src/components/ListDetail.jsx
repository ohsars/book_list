// src/components/ListDetail.js

import React, { useEffect, useState } from 'react';
import { getList } from '../services/api';

const ListDetail = ({ match }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const data = await getList(match.params.id);
    setList(data);
  };

  return (
    <div>
      {list ? (
        <>
          <h1>{list.name}</h1>
          <ul>
            {list.entries.map((entry) => (
              <li key={entry.edition_count}>{entry.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListDetail;