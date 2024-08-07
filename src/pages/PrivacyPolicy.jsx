import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-hero-pattern bg-cover bg-center min-h-screen gap-3">
        <div className="container mx-auto mt-10 px-4 py-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 text-lg">
              Welcome to AIEMS Hub. We are committed to protecting your personal information and your right to privacy.
              If you have any questions or concerns about our policy, or our practices with regards to your personal
              information, please contact us at support@aiemshub.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 text-lg">
              We collect personal information that you provide to us such as name, email0 address and
              passwords and security data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 text-lg">
              We use the information we collect or receive to communicate directly with you, send you marketing and
              promotional communications, and for data analysis, identifying usage trends, and improving our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700 text-lg">
              We only share information with your consent, to comply with laws, to provide you with services, to protect
              your rights, or to fulfill business obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Security of Your Information</h2>
            <p className="text-gray-700 text-lg">
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
            <p className="text-gray-700 text-lg">
              You may review, change, or terminate your account at any time. If 
              you believe we are unlawfully processing your personal information, you also have the
              right to complain to your local data protection supervisory authority.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-700 text-lg">
              We may update this privacy policy from time to time in order to reflect, for example, changes to our
              practices or for other operational, legal, or regulatory reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-gray-700 text-lg">
              If you have questions or comments about this policy, you may email us at support in aiemshub24@gmail.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
