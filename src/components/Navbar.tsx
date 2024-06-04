import '../styles/main.css';
import NavLinks from './NavLinks';
import Logo from '/Logo.png';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menu = [
		{
			index: 1,
			href: "/",
			name: "Home",
			ids: "active"
		},
		{
			index: 2,
			href: "/who-we-are",
			name: "Who we are"
		},
		{
			index: 3,
			href: "/services",
			name: "What we do"
		},
		{
			index: 4,
			href: "/contact",
			name: "Contact us"
		}
	];

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="navbar w-full sticky top-0 bg-[#191919]">
			<div className="flex h-full w-full">
				<div className="flex-1 absolute hamburger hidden left-[15px] top-[30px] sm:flex items-center">
					<button onClick={toggleMenu}>
						<HamburgerMenu />
					</button>
				</div>
				<div className="logo-box h-full w-full flex-none max-w-[20vw] sm:max-w-full">
					<a href="/" className='h-full w-full flex justify-center items-center'>
						<img src={Logo} alt="Budify Media Logo" className='h-[50px]' />
					</a>
				</div>
				<div className="flex-auto h-full flex justify-center items-center sm:hidden nav-items text-[#7c7a7c]">
					{menu.map((item) => (
						<NavLinks key={item.index} href={item.href} name={item.name}></NavLinks>
					))}
				</div>
				<div className="flex-none sm:hidden getstarted-btn h-full flex justify-center items-center w-full max-w-[20vw]">
					<a href="#start">Get started →</a>
				</div>
			</div>
			{menuOpen ?
				<div className="hidden menu absolute left-0 top-full w-full bg-[#191919] sm:flex flex-col">
					<div className="menu-nav-links flex flex-col justify-center items-center text-[#0000004d]">
						{menu.map((item) => (
							<NavLinks key={item.index} href={item.href} name={item.name} closeMenu={toggleMenu} />
						))}
					</div>
				</div>
				: null}
		</div>
	)
}

export default Navbar;