import React, { useState, useEffect } from 'react';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateJournal = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    //const authToken = import.meta.env.VITE_JWT_SECRET;
    if (!authToken) {
      console.error('No auth token found!');
      // Redirect to login or handle the lack of token
    } else {
      console.log('Upload success!!!');
    }
  }, []);

  const sendData = async (title, content, date) => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      console.error('No auth token found!');
      return;
    }

    try {
      const response = await axios.post(
        `${backend}/journals`,
        {
          title,
          content,
          date: date || new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setEntries([...entries, response.data]);
      setTitle('');
      setContent('');
      setDate('');
      toast.success("Journal successfully created!!!")
    } catch (error) {
      console.error('There was an error creating the journal entry!', error);
      toast.error("Problem creating Journal.")
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="flex flex-col bg-hero-pattern bg-cover bg-center min-h-screen p-4">
        <div className="gap-2 flex flex-col items-center justify-center mt-10">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Create a Journal Entry</h1>
            <div className="mb-4">
              <label htmlFor="title" className="block text-lg font-semibold mb-2">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter the title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-lg font-semibold mb-2">Journal Entry</label>
              <textarea
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 h-40"
                placeholder="Write your journal entry here"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-lg font-semibold mb-2">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              onClick={() => {
                const title = document.getElementById("title").value;
                const content = document.getElementById("content").value;
                const date = document.getElementById("date").value;

                if (title.length === 0 || content.length === 0) {
                  console.log("Please enter all the details.");
                } else {
                  sendData(title, content, date);
                }
              }}
              className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Submit
            </button>
          </div>
          <div>
          <Link to="/Journal" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700">
                Back to Entries
              </Link>
          </div> 
        </div>
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default CreateJournal;


