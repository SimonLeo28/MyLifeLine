import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-hero-pattern bg-cover bg-center min-h-screen gap-3">
        <div className="container mx-auto mt-10 px-4 py-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 text-lg">
              Welcome to AIEMS Hub. These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing this website, you accept these terms and conditions in full. Do not continue to use AIEMS Hub if you do not accept all of the terms and conditions stated on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
            <p className="text-gray-700 text-lg">
              Unless otherwise stated, AIEMS Hub owns the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from AIEMS Hub for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
            <p className="text-gray-700 text-lg">
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>Publishing any website material in any other media without our consent.</li>
              <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
              <li>Using this website in any way that is or may be damaging to this website.</li>
              <li>Using this website in any way that impacts user access to this website.</li>
              <li>Using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website, or to any person or business entity.</li>
              <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Your Content</h2>
            <p className="text-gray-700 text-lg">
              In these Terms and Conditions, "Your Content" shall mean any audio, video text, images, or other material you choose to display on this website. By displaying Your Content, you grant AIEMS Hub a non-exclusive, worldwide, irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any media.
            </p>
            <p className="text-gray-700 text-lg">
              Your Content must be your own and must not be invading any third-party’s rights. AIEMS Hub reserves the right to remove any of Your Content from this website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. No Warranties</h2>
            <p className="text-gray-700 text-lg">
              This website is provided "as is," with all faults, and AIEMS Hub expresses no representations or warranties of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 text-lg">
              In no event shall AIEMS Hub, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. AIEMS Hub, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
            <p className="text-gray-700 text-lg">
              You hereby indemnify to the fullest extent AIEMS Hub from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Severability</h2>
            <p className="text-gray-700 text-lg">
              If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Variation of Terms</h2>
            <p className="text-gray-700 text-lg">
              AIEMS Hub is permitted to revise these Terms at any time as it sees fit, and by using this website you are expected to review these Terms on a regular basis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Assignment</h2>
            <p className="text-gray-700 text-lg">
              The AIEMS Hub is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Entire Agreement</h2>
            <p className="text-gray-700 text-lg">
              These Terms constitute the entire agreement between AIEMS Hub and you in relation to your use of this website, and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law & Jurisdiction</h2>
            <p className="text-gray-700 text-lg">
              These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
