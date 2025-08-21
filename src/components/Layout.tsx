import { Outlet } from 'react-router-dom';
import Header from './Header';
import Ill from '@/components/Ill';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;