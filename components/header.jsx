import Link from 'next/link';

const Header = () => {
    return (
      <header className="py-5 fixed top-0  w-full z-10 pl-5 bg-blue-950 text-white">
        <Link href="/">
          <h1  className="font-extrabold tracking-widest">User App</h1>
        </Link>
      </header>
    );
  };
  
  export default Header;