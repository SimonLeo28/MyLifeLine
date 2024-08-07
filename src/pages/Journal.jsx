import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      fetchEntries(authToken);
    } else {
      console.error("No auth token found in localStorage");
    }
  }, []);

  const fetchEntries = async (authToken) => {
    try {
      const response = await axios.get(`${backend}/journals`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setEntries(response.data);
    } catch (error) {
      console.error("There was an error fetching the journal entries!", error);
    }
  };

  return (
    <>
      <Navbar1 />
      <div className='flex flex-col bg-hero-pattern bg-cover bg-center min-h-screen gap-3'>
        <div className='container mx-auto mt-10 px-4'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Your Journal Entries</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {entries.map((entry) => (
              <div key={entry._id} className='bg-white p-4 rounded shadow-md'>
                <h3 className='text-lg font-semibold mb-2'>{entry.title}</h3>
                <p className='text-gray-700 text-sm mb-2'>{entry.content.slice(0, 100)}...<Link to={`/journal/${entry._id}`} className='text-blue-500'> Read More</Link></p>
                <p className='text-violet-500 text-1xl'>{new Date(entry.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Journal;
