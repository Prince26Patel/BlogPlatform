import React, { useState } from 'react';
<<<<<<< HEAD
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
      }, {
        withCredentials: true, // Optional
      });

      const token = res.data.token;

      // Save token
      localStorage.setItem('token', token);

      alert('Signup successful!');
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || 'Signup failed. Try another email.');
    }
=======

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
<<<<<<< HEAD
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Signup
        </button>
=======
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Signup</button>
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
      </form>
    </div>
  );
};

export default Signup;
