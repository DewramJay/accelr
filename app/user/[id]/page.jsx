"use client"
import { useParams } from 'next/navigation';

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <p>Displaying details for user ID: {id}</p>
    </div>
  );
};

export default UserDetails;
