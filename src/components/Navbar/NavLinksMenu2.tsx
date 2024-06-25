import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavLinksMenuProps {
    href: string;
    name: string;
    key: number;
    subMenu?: SubMenuProps[];
    closeMenu?: () => void;
    className?: string | " ";
    device?: string;
    desc?: string;
}

interface SubMenuProps {
    index: number;
    href: string;
    name: string;
    desc: string;
    icon?: string;
    className?: string;
}

function NavLinksMenu({ href, name, closeMenu, subMenu, device }: NavLinksMenuProps) {

    const navigate = useNavigate();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleNavigation = (href: string) => {
        // Handle the navigation based on the device, if the device is mobile then open the submenu
        if (device !== "mobile") {
            console.log("Navigating to: ", href);
            window.scrollTo(0, 0);
            closeMenu && closeMenu();
            setTimeout(() => {
                navigate(href);
            }, 300);
        } else {
            if (subMenu && subMenu.length > 0) {
                setSubMenuOpen(!subMenuOpen);
            } else {
                window.scrollTo(0, 0);
                closeMenu && closeMenu();
                setTimeout(() => {
                    navigate(href);
                }, 300);
            }
        }
    }

    useEffect(() => {
        if (!subMenuOpen) {
            setIsClosing(false);
        }
    }, [subMenuOpen]);

    return (
        <li className={`nav-link list-none relative ${!subMenu ? "hover:text-[#E25E3E] cursor-pointer" : ""}`}
            onClick={() => handleNavigation(href)}
            onMouseEnter={(e) => { device !== "mobile" ? setSubMenuOpen(true) : e.preventDefault() }} onMouseLeave={(e) => { device !== "mobile" ? setSubMenuOpen(false) : e.preventDefault() }}>
            {name}
            {subMenu && subMenu.length > 0 && subMenuOpen ? (
                <ul className={`sub-menu absolute right-0 flex sm:flex-col sm:relative sm:w-full ${subMenuOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}>
                    {subMenu.map((item) => (
                        <a key={item.index} className={`sub-menu-link list-none cursor-pointer ${item.className}`} onClick={() => {console.log(item); handleNavigation(item.href)}}>
                            {item.name}
                            <p className="sub-menu-desc">{item.desc}</p>
                        </a>
                    ))}
                </ul>
            ) : null}
        </li>
    )
}

export default NavLinksMenu;