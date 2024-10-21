"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getUserDetails } from '@/services/apiService';

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(id);
        
        const data = await getUserDetails(id);
        setUserDetails(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  if (!userDetails) {
    return <p>Loading user details...</p>;
  }

  return (
    <div className="m-5 user-details">
      <h1 className='font-extrabold text-lg '>{userDetails.name}</h1>
      <p>{userDetails.email}</p>
      <p>{userDetails.username}</p>
      <p>{userDetails.address.street}, {userDetails.address.suite}, {userDetails.address.city}, {userDetails.address.zipcode}</p>
    </div>
  );
};

export default UserDetails;
