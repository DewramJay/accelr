"use client";

import { useState, useEffect } from 'react';
import UserCard from '@/components/UserCard';
import { getUsers } from '@/services/apiService'; // Make sure this path is correct

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers(); // Fetch the users from API
        setUsers(fetchedUsers.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-cards-container grid grid-cols-3 gap-4 p-4">
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard key={user.id} user={user} /> // Render each user card
        ))
      ) : (
        <p>Loading users...</p> // Display fallback message if no users
      )}
    </div>
  );
}
