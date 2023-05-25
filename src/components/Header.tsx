import { useState } from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import OutsideDetector from '../hoc/OutsideDetector';
import Accordion from './Accordion';

import { ReactComponent as IconLogin } from '../assets/icon--login.svg';
import { ReactComponent as IconDiscoveryCall } from '../assets/icon--discovery-call.svg';
// import {ReactComponent as IconLogout} from '../assets/icon--logout.svg';

interface INavItem {
  text: string;
  href: string;
}
const navItems: INavItem[] = [
  { text: 'Home', href: '/' },
  // { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Blog', href: '/blog' },
];

function NavCTA() {
  return (
    <div className="items-center gap-8 hidden lg:flex">
      {/* <Link href="/login" className="flex items-center gap-2">
        <IconLogin className="w-8 h-8" />{' '}
        <span className="font-medium">Login</span>
      </Link> */}
      <NavLink
        to="/request-discovery-call"
        className="flex items-center gap-2 hover:underline underline-offset-4"
      >
        <IconDiscoveryCall className="w-8 h-8" />{' '}
        <span className="font-medium">Request Discovery Call</span>
      </NavLink>
    </div>
  );
}

function NavMenu() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="hidden gap-8 ml-[20%] lg:flex">
      {navItems.map(
        ({ text, href }) =>
          pathname !== href && (
            <NavLink
              key={href}
              to={href}
              className="font-medium hover:underline underline-offset-4"
            >
              {text}
            </NavLink>
          )
      )}
    </nav>
  );
}

function Hamburger({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const hamburger = (
    <div className="w-16 h-9 flex flex-col justify-between p-2 -m-2">
      <span className="w-full h-[2px] bg-black rounded-lg" />
      <span className="w-full h-[2px] bg-black rounded-lg" />
      <span className="w-full h-[2px] bg-black rounded-lg" />
    </div>
  );

  const close = (
    <div className="w-10 h-9 p-2 -m-2 relative -translate-x-2">
      <span className="w-full h-[2px] bg-black rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
      <span className="w-full h-[2px] bg-black rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
    </div>
  );

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="relative lg:hidden"
    >
      {isOpen ? close : hamburger}
    </button>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <OutsideDetector stateSetter={setIsOpen}>
        <header className="fixed top-0 left-0 z-10 w-screen border-b bg-white/50 border-gray-200">
          <div className="relative w-full">
            <div className="container mx-auto py-4 flex items-center">
              <Logo />
              <NavMenu />
              <div className="ml-auto flex items-center">
                <NavCTA />
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            <Accordion
              isOpen={isOpen}
              className="absolute top-full w-screen bg-black lg:hidden"
            >
              <div className="flex flex-col items-start gap-4 container text-white mx-auto py-4">
                {navItems.map(({ text, href }) => (
                  <NavLink key={href} to={href}>
                    {text}
                  </NavLink>
                ))}

                <NavLink to="/login" className="flex items-center gap-2 mt-8">
                  <IconLogin className="w-6 h-6 inner-path-white" />{' '}
                  <span>Login</span>
                </NavLink>
                <NavLink
                  to="/request-discovery-call"
                  className="flex items-center gap-2"
                >
                  <IconDiscoveryCall className="w-6 h-6 inner-path-white" />{' '}
                  <span>Request Discovery Call</span>
                </NavLink>
              </div>
            </Accordion>
          </div>
        </header>
      </OutsideDetector>
      <div className="h-[64px]" />
    </>
  );
}
