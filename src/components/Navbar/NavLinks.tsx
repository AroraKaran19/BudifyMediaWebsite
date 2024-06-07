import { Link, useLocation } from "react-router-dom";

interface NavLinksProps {
	href: string;
	name: string;
	key: number;
	closeMenu?: () => void;
}

function NavLinks({ href, name, closeMenu }: NavLinksProps) {

	const location = useLocation();

	const handleClick = (href: string) => {
		closeMenu && closeMenu();
		if (href === "") {
			window.scrollTo(0, 0);
		} else {
			const element = document.getElementById(href.replace("#", ""));
			if (element) {
				const navbarHeight = document.getElementsByClassName('navbar')[0]?.clientHeight || 0;
				const elementPosition = element.getBoundingClientRect().top;
				const offsetPosition = elementPosition - navbarHeight;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth"
				});
			}
		}
		window.history.pushState({}, "", href ? href : "/");
	}

	return (
		<Link to={href ? href : "/"} onClick={() => handleClick(href)} className={(location.pathname + location.hash === "/" + href)  ? "active" : ""}>
			<span>{name}</span>
		</Link>
	)
}

export default NavLinks;