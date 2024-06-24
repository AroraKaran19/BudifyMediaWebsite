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
    background_color?: string;
}

function NavLinksMenu({ href, name, closeMenu, subMenu, className, device, desc }: NavLinksMenuProps) {

    const location = useLocation();
    const navigate = useNavigate();
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleNavigation = (href: string) => {
        if (device !== "mobile") {
            if (subMenu && subMenu.length > 0) return;
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

    return (
        <Link to={(!subMenu ? href : "")} onClick={(e) => { e.preventDefault(); handleNavigation(href); }}
            className={`flex flex-col ${location.pathname === href || "/" + location.pathname.split("/")[1] == href ? "active" : ""} navigation-link text-white sm:text-black sm:w-full ${className ? className : ""}`} onMouseEnter={() => setSubMenuOpen(true)} onMouseLeave={() => setSubMenuOpen(false)} >

            <span className="flex justify-center items-center sm:justify-start gap-1 flex-wrap">
                {name}
                {subMenu && subMenu.length > 0 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        {!subMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /> :
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        }
                    </svg>
                    : ""
                }
                
            </span>
            {desc ? <span className="text-[#fff] text-sm">{desc}</span> : ""}

            {subMenu && subMenu.length > 0 && subMenuOpen ?
                <div className="sub-menu absolute sm:relative sm:w-full sm:p-2 right-0 top-full bg-[#fff] sm:bg-transparent rounded-lg flex sm:flex-col gap-6" >
                    {subMenu.map((item: any) => (
                        <div className={`flex flex-col ${item.background_color}`}>
                            <NavLinksMenu key={item.index} href={item.href} name={item.name} desc={item.desc} className="sm:text-white"/>
                        </div>
                    ))}
                </div> : null
            }

        </Link>
    )
}

export default NavLinksMenu;