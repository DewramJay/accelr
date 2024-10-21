"use client";

import { useState, useEffect } from 'react';
import UserCard from '@/components/UserCard';
import { getUsers } from '@/services/apiService';

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-cards-container m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}
