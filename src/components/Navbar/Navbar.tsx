import '../../styles/main.css';
// import Logo from '../../assets/old_logo.png';
import HamburgerMenu from './HamburgerMenu';
import { useEffect, useState } from 'react';
import NavLinksMenu from './NavLinksMenu';

const Navbar = () => {
	// Handle the menu open and close
	const [menuOpen, setMenuOpen] = useState(false);

	// Make the navbar sticky when it has been scrolled past 100px
	window.addEventListener('scroll', () => {
		// check if skicky is already added
		const navbar = document.querySelector('.navbar') as HTMLElement;
		const navbarHeight = 50;
		if (!navbar) return;
		else {
			if (!navbar.classList.contains('stickTop')) {
				// check if the user has scrolled past navbarHeight
				if (window.scrollY > navbarHeight) {
					navbar.classList.add('stickTop');
					navbar.classList.add("bg-white/10");
					navbar.classList.add("backdrop-blur-lg");
				}
			} else {
				if (window.scrollY < navbarHeight) {
					navbar.classList.remove('stickTop');
					navbar.classList.remove("bg-white/10");
					navbar.classList.remove("backdrop-blur-lg")
				}
			}
		}
	});

	const menu = [
		{
			index: 1,
			href: "/",
			name: "Home",
			ids: "active"
		},
		{
			index: 2,
			href: "/main",
			name: "Who we are",
			subMenu: [
				{
					index: 1,
					href: "/main/about-us",
					name: "About us",
					desc: "Learn more about us",
					className: "bg-card-1-gradient"
				},
				{
					index: 2,
					href: "/main/team",
					name: "Our team",
					desc: "Meet the team",
					className: "bg-[#6C698D]"
				},
				{
					index: 3,
					href: "/main/testimonials",
					name: "Testimonials",
					desc: "What our clients say",
					className: "bg-[#7D451B]"
				}
			]
		},
		{
			index: 3,
			href: "/blog",
			name: "Blogs"
		},
		{
			index: 4,
			href: "/contact",
			name: "Contact us",
		}
	];

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
		// Disable scrolling when the menu is open
		if (menuOpen) {
			document.body.style.overflow = 'auto';
		}
		else {
			document.body.style.overflow = 'hidden';
		}
	};

	useEffect(() => {
		// Add animation to the logo in beginning
		const logo = document.querySelector('.logo-box a span') as HTMLElement;
		setTimeout(() => {
			if (!logo) return;
			else {
				logo.classList.add('begAfterAni');
			}
		}, 1000);
		setTimeout(() => {
			if (!logo) return;
			else {
				if (logo.classList.contains('animate-animateHeadText')) {
					logo.classList.remove('animate-animateHeadText');
					logo.classList.remove('begAfterAni');
				}
			}
		}, 3000);
	}, []);

	return (
		<div className="navbar w-full sm:relative sticky top-0 sm:p-0 ">

			<div className={`open-sidebar-wrapper hidden sm:block absolute z-[1000] ${menuOpen ? 'w-full h-screen bg-black/10 backdrop-blur-lg' : ''}`}>
				<div className={`sidebar hidden sm:block absolute top-0 w-[300px] h-screen bg-white z-[1001] ${menuOpen ? 'open' : ''} flex flex-col`}>
					<div className="flex justify-start items-center p-4">
						<button onClick={toggleMenu}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>

						</button>
					</div>
					<div className="menu-nav-links flex flex-col justify-start px-6 items-start w-full text-[#0000004d]">
						{menu.map((item) => (
							<NavLinksMenu key={item.index} href={item.href} name={item.name} subMenu={item?.subMenu} closeMenu={toggleMenu} device='mobile' />
						))}
						<a href="/contact" className="contact-button text-[#fff] bg-[#E25E3E] py-2 px-6 rounded-lg">Contact us</a>
					</div>
				</div>
			</div>

			<div className="flex h-full w-full">
				<div className="flex-1 absolute hamburger hidden left-[15px] top-[25px] sm:flex items-center">
					<button onClick={toggleMenu}>
						<HamburgerMenu />
					</button>
				</div>
				<div className="logo-box h-full sm:w-full sm:justify-center sm:flex sm:items-center flex-1 max-w-[20vw] sm:max-w-full">
					<a className='flex justify-center items-center' href='/'>
						<span className='animate-animateHeadText cursor-pointer'>BudifyMedia</span>
					</a>
				</div>
				<div className="flex-auto flex-grow h-full flex justify-end items-center sm:hidden nav-items text-[#7c7a7c]">
					{menu.map((item) => (
						<NavLinksMenu key={item.index} href={item.href} name={item.name} subMenu={item.subMenu} />
					))}
				</div>
				{/* Contact Button */}
				<div className="flex-none sm:hidden flex items-center justify-center">
					<a href="/contact" className="contact-button text-[#fff] bg-[#E25E3E] py-2 px-6 rounded-lg">Contact us</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar;