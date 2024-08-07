import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-hero-pattern bg-cover bg-center min-h-screen justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About My LifeLine</h1>
          
          <h2 className="text-2xl font-semibold mb-4">Welcome to My LifeLine!</h2>
          <p className="text-gray-700 text-lg mb-4">
            At My LifeLine, we believe in the transformative power of journaling. Our platform is designed to be your personal space for self-expression, reflection, and growth. Whether you’re capturing daily moments, exploring creative ideas, or tracking your academic journey, My LifeLine is here to support and inspire you.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-4">
            Our mission is to provide a secure and inspiring environment where you can document your life’s journey. We understand that journaling is more than just a habit—it’s a meaningful practice that promotes self-awareness, mental well-being, and personal development. By nurturing a community of writers and thinkers, we aim to foster creativity and connection.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Choose My LifeLine?</h2>
          <p className="text-gray-700 text-lg mb-4">
            Journaling is a powerful tool for self-discovery and emotional clarity. It helps manage stress, organize thoughts, and reflect on experiences. At My LifeLine, we make journaling accessible and enjoyable, allowing you to focus on what matters most: your voice and your story.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
            <li><strong>Intuitive Interface:</strong> Our user-friendly design makes it easy to start journaling, customize your entries, and explore new features.</li>
            <li><strong>Privacy & Security:</strong> Your privacy is our priority. We ensure that your journal entries are secure and accessible only to you.</li>
            <li><strong>Personalization:</strong> Customize your journal with various themes, layouts, and styles to make your journaling experience truly unique.</li>
            <li><strong>Community Engagement:</strong> Connect with like-minded individuals and share insights, tips, and inspiration in our supportive community.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Get Started Today!</h2>
          <p className="text-gray-700 text-lg mb-4">
            Join My LifeLine and embark on a journey of personal growth and self-expression. Sign up now to start capturing your thoughts, experiences, and reflections. Together, let’s create a meaningful space where your stories come to life and your voice is heard.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            Thank you for choosing My LifeLine as your trusted journaling companion!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
