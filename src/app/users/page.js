'use client'
// import { useClient } from 'next/data-client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateUser = async () => {
    try {
      await axios.post('/api/users', { name, email });
      getUsers();
      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Daftar Pengguna</h1>
        <h2>{users.test}</h2>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Tambah Pengguna</button>
      </form>
     
    </div>
  );
};

export default Users;