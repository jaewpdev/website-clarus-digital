import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as ImgClarusDigitalLogo } from '../assets/img--clarus-digital-logo.svg';

export default function Logo({ className }: { className?: string }) {
  return (
    <NavLink to="/" className={classNames(className, 'flex items-end gap-1')}>
      <ImgClarusDigitalLogo className="w-8 h-8" />
    </NavLink>
  );
}
