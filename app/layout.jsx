'use client';

import { useState, useEffect } from 'react';
import '../styles/globals.css';
import Header from '@/components/header';
import UserCard from '@/components/userCard';
import { getUsers } from '@/services/apiService';

const Layout = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        console.log(fetchUsers);
        
        setUsers(fetchedUsers.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
    console.log(users);
    
  }, []); 



  return (
    <html lang='en'>
      <body>
        <Header />
       <div className='m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
       {users.length > 0 ? (
            users.map(user => (
                <div
                    className='w-[250px] h-[300px] bg-red-300 p-4 cursor-pointer'
                >
                <UserCard  key={user.id} user={user} /> 
                </div>
            ))
          ) : (
            <p>Loading users...</p>
          )}
       </div>
        
      </body>
    </html>
  );
};

export default Layout;
