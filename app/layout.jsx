import Header from '@/components/Header';
import "../styles/globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className=' mt-20'>{children}</main> 
      
        </body>
    </html>
  );
};

export default Layout;
