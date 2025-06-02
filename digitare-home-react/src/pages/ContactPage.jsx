import React from 'react';

/**
 * @component ContactPage
 * @description Contact form page where users can send messages or inquiries. Includes inputs for name, email, and message content.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The Contact Us page
 */

const ContactPage = () => {
  return (
    <section className="min-h-screen px-6 py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2da397] mb-6">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2da397]"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2da397]"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#2da397]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#2da397] text-white px-6 py-2 rounded hover:bg-[#248a81] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
