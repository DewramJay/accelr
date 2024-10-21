import React from 'react'
import '../styles/globals.css'
import Header from '@/components/header';
import UserCard from '@/components/userCard';

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
  };
  
  const layout = ({ children }) => (
    <html lang='en'>
      <body>
        <Header/>
        <UserCard/>
        {/* <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
  
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider> */}
      </body>
    </html>
  );

export default layout