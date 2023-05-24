import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

export default function Root() {
  return (
    <div className="font-sans">
      <Header />
      <div className="container mx-auto my-12">
        <Outlet />
      </div>
    </div>
  );
}
