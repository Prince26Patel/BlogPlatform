import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
=======
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const navigate = useNavigate();
  const { login } = useAuth(); // use login from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // this sets username in context
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || 'Login failed. Check credentials.');
    }
=======

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
<<<<<<< HEAD
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
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Login
        </button>
=======
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" />
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Login</button>
>>>>>>> 905cfa78de58142ff9b7f0d9dbd6282b28bcb328
      </form>
    </div>
  );
};

export default Login;
