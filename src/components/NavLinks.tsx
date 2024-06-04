import { Link, useLocation  } from 'react-router-dom';

interface NavLinksProps {
    href: string;
    name: string;
    key: number;
    closeMenu?: () => void;
}

function NavLinks({href, name}: NavLinksProps) {
  const location = useLocation();
  
  return (
    <Link to={href} className={location.pathname === href ? "active" : ""}>
      <span>{name}</span>
    </Link>
  )
}

export default NavLinks;