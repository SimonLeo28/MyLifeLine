import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';

const backend = import.meta.env.VITE_BACKEND_URL

const SingleJournal = () => {
  const { id } = useParams(); // Get the journal ID from the URL parameters
  const [journal, setJournal] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJournal = async () => {
      const authToken = localStorage.getItem('authToken');
      try {
        const response = await axios.get(`${backend}/journals/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setJournal(response.data);
      } catch (error) {
        setError('There was an error fetching the journal entry!');
        console.error(error);
      }
    };

    fetchJournal();
  }, [id]);

  return (
    <>
      <Navbar1 />
      <div className="flex flex-col bg-hero-pattern bg-cover bg-center min-h-screen gap-3">
        <div className="container mx-auto mt-10 px-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {journal ? (
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">{journal.title}</h2>
              <p className="text-gray-700 text-lg mb-4">{journal.content}</p>
              <p className="text-violet-500 text-1xl">{new Date(journal.date).toLocaleDateString()}</p>
              <Link to="/Journal" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Back to Entries
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleJournal;

