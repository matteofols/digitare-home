import React from 'react';

/**
 * @component LoginPage
 * @description Displays a login form for users to enter their email and password. Styled for simplicity and responsiveness across devices.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The user login page
 */

const LoginPage = () => {
  return (
    <section className="min-h-screen w-full px-4 md:px-8 py-16 bg-gray-50">
      <div className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#2da397] mb-6">Log In</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2da397]"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2da397]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2da397] text-white px-6 py-2 rounded hover:bg-[#248a81] transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
