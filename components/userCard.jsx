
import React from 'react'
import { useRouter } from 'next/navigation';

const UserCard = ({ user }) => {

    const router = useRouter();
    const handleCardClick = () => {
        router.push(`/user/${user.id}`);
      };

    return (
        <section className=''>
            <div onClick={handleCardClick} className='w-full bg-blue-200 cursor-pointer hover:scale-105 transition duration-200 ease-in-out h-56 flex flex-col justify-center shadow-lg shadow-gray-500 items-center rounded-lg  '>
            <h2 className='mb-5 font-extrabold tracking-wider'>{user.name}</h2>
           <div className='flex flex-col justify-start items-start '>
           <p className='mt-1'>Username: {user.username}</p>
            <p className='text-sm mt-1 font-semibold'>{user.email}</p>
            <p className='mt-1'>{user.website}</p>
            <p className='mt-1'>{user.phone}</p>
           </div>
        </div>
        </section>
    )
}

export default UserCard