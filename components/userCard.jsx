
import React from 'react'
import { useRouter } from 'next/navigation';

const UserCard = ({ user }) => {

    const router = useRouter();
    const handleCardClick = () => {
        router.push(`/user/${user.id}`); // Navigate to dynamic user page
      };

    return (
        <div onClick={handleCardClick} className='w-full h-[300px] bg-red-300'>
            <h2 className='font-bold'>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
        </div>
    )
}

export default UserCard