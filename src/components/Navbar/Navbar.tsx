import '../../styles/main.css';
// import Logo from '../../assets/old_logo.png';
import { useEffect, useState } from 'react';
import NavLinksMenu from './NavLinksMenu';

const Navbar = () => {
	// Handle the menu open and close
	const [menuOpen, setMenuOpen] = useState(false);

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
					navbar.classList.remove("backdrop-blur-lg");
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
				},
				{
					index: 2,
					href: "/main/team",
					name: "Our team",
					desc: "Meet the team",
				},
				{
					index: 3,
					href: "/main/testimonials",
					name: "Testimonials",
					desc: "What our clients say",
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
			const logo_svg = document.querySelector(".closed-menu svg path") as HTMLElement;
			// change property inside path's d
			
			console.log(logo_svg);
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
		<div className="navbar w-full sticky top-0 sm:p-0">

			{/* Mobile Navbar (Sidebar) */}
			<div className={`open-sidebar-wrapper top-0 left-0 hidden sm:block absolute z-[1001] ${menuOpen ? 'w-full h-screen bg-black/10 backdrop-blur-lg' : ''}`}>
				<div className={`sidebar hidden sm:block absolute top-0 w-[60vw] h-screen bg-white z-[1002] ${menuOpen ? 'open' : ''} flex flex-col`}>
					<div className="flex w-full justify-between hamburger items-center px-4 pt-8 pb-6">
						<p className='sidebar-heading text-center'>Menu</p>
						<button onClick={toggleMenu} className=''>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="menu-nav-links flex flex-col justify-start px-6 items-start w-full">
						{menu.map((item) => (
							<NavLinksMenu key={item.index} href={item.href} name={item.name} subMenu={item?.subMenu} closeMenu={toggleMenu} device='mobile' />
						))}
					</div>
					<div className='contact-button-wrapper flex justify-center items-center w-full px-6 py-3'>
						<a href="/contact" className="contact-button w-fit text-[#fff] bg-[#E25E3E] py-2 px-6 rounded-lg">Contact us</a>
					</div>
				</div>
			</div>

			{/* Desktop Navbar */}
			<div className="flex h-full w-full justify-center items-center">
				<div className="flex-1 absolute hamburger closed-menu hidden left-[5vw] sm:flex items-center">
					<button onClick={toggleMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
				</div>
				<div className="logo-box h-full sm:w-full justify-center items-center sm:flex flex-1 max-w-[20vw] sm:max-w-full">
					<a className='h-full flex justify-center items-center' href='/'>
						<span className='animate-animateHeadText cursor-pointer'>BudifyMedia</span>
					</a>
				</div>
				<div className="flex-auto flex-grow h-full flex justify-end sm:hidden nav-items gap-6 px-10">
					{menu.map((item) => (
						<NavLinksMenu key={item.index} href={item.href} name={item.name} subMenu={item.subMenu} />
					))}
				</div>
				<div className="flex-none sm:hidden flex items-center justify-center">
					<a href="/contact" className="contact-button text-[#fff] bg-[#E25E3E] py-2 px-6 rounded-lg">Contact us</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar;