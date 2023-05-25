import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <div className="font-sans">
      <Header />
      <div className="container mx-auto my-12 overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
