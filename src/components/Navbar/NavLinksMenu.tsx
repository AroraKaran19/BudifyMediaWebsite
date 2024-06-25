import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    background?: string;
}

function NavLinksMenu({ href, name, closeMenu, subMenu, className, device, desc }: NavLinksMenuProps) {

    const location = useLocation();
    const navigate = useNavigate();
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleNavigation = (href: string) => {
        // If the link has a submenu, open the submenu
        if (subMenu && subMenu.length > 0) {
            setSubMenuOpen(!subMenuOpen);
            return;          
        }
        window.scrollTo(0, 0);
        closeMenu && closeMenu();
        setTimeout(() => {
            navigate(href);
        }, 300);
    }

    return (
        <Link to={(!subMenu ? href : "")} onClick={(e) => { e.preventDefault(); handleNavigation(href); }}
            className={`flex flex-col relative ${location.pathname === href || "/" + location.pathname.split("/")[1] == href ? "active" : ""} navigation-link sm:w-full ${className ? className : ""}  ${!subMenu ? "hover:text-[#E25E3E]" : ""}`} 
            onMouseEnter={(e) => {device !== "mobile" ? setSubMenuOpen(true) : e.preventDefault()}} onMouseLeave={(e: any) => {device !== "mobile" ? setSubMenuOpen(false) : e.preventDefault()}} >

            {/* Link */}
            <span className={`flex justify-start items-center sm:justify-start gap-1 flex-wrap ${subMenu ? "cursor-default sm:justify-between" : "cursor-pointer"} sm:w-full`}>
                {name}
                {subMenu && subMenu.length > 0 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        {!subMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /> :
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        }
                    </svg>
                    : ""
                }

            </span>
            {desc ? <p className={`text-[#000] flex flex-wrap`}>{desc}</p> : ""}
            
            {/* Submenu */}
            {subMenu && subMenu.length > 0 && subMenuOpen ?
                <div className={`sub-menu flex flex-col absolute sm:relative sm:w-full right-0 top-full bg-white sm:bg-transparent rounded-lg sm:flex-col gap-3`} >
                    <p className="sub-heading text-black mt-6 sm:hidden">{name}</p>
                    <div className="sub-links flex sm:flex-col gap-6 sm:gap-3">
                        {subMenu.map((item: any) => (
                            <div className={`flex flex-col ${item?.className} ${item.background ? item.background + " bgExist" : ""} rounded-lg`}>
                                <NavLinksMenu key={item.index} href={item.href} name={item.name} desc={item.desc} className={`${item.background ? "text-black" : "text-black"}`} closeMenu={closeMenu} />
                            </div>
                        ))}
                    </div>
                </div> : null
            }

        </Link>
    )
}

export default NavLinksMenu;