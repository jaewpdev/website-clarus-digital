import { NavLink } from 'react-router-dom';
import { ReactComponent as ImgClarusDigitalLogo } from '../assets/img--clarus-digital-logo.svg';

export default function Logo() {
  return (
    <NavLink to="/" className="flex items-end gap-1">
      <ImgClarusDigitalLogo className="w-8 h-8" />
    </NavLink>
  );
}
