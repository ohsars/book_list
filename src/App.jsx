// import axios from 'axios'

// import './App.css'
// import { useEffect, useState } from 'react';

// function App() {
//   const urlAddress = "http://openlibrary.org/people/george08/lists.json";
//   // https://openlibrary.org/search?title=flammable ..// https://openlibrary.org/dev/docs/api/lists

//   const [books, setBooks] = useState([]);
//   const [loading, isLoading] = useState(false);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       isLoading(true);
//       const resp = await axios.get(urlAddress);
//       setBooks(resp.data.entries);
//       console.log(resp.data)
//       isLoading(false);
//     };
//     fetchBooks();
//   }, [])

//   return (
//     <>
//       <div>Welcome to your bookstore</div>
//       {loading ? 
//       (<p>Loading....</p>) : 
//       (<ul>
//         {books.map((book) => (
//           <li key={book.full_url} className='flex content-between p-6'>
//             {/* <h2 className='text-2xl font-bold'>{book.title}</h2> */}
//             <h2>Book Name: {book.name}</h2>
//           </li>
//         ))}
//       </ul>)}
//     </>
//   )
// }

// export default App

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './components/Lists';
import ListDetail from './components/ListDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element=<List /> exact />
          <Route path="/lists/:id" element=<ListDetail /> />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
