"use client"; // Mark this file as a Client Component

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getUserDetails } from '@/services/apiService'; // Make sure this path is correct

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(id);
        
        const data = await getUserDetails(id); // Fetch user details based on ID
        setUserDetails(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (id) {
      fetchUserDetails(); // Fetch details only if ID is available
    }
  }, [id]);

  if (!userDetails) {
    return <p>Loading user details...</p>; // Show loading message
  }

  return (
    <div className="user-details">
      <h1>{userDetails.name}</h1>
      <p>Email: {userDetails.email}</p>
      <p>Username: {userDetails.username}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserDetails;
