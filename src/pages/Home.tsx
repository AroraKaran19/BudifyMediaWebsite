import "../styles/Home.css";
import FirstSection from "../components/Home/FirstSection";

function Home() {

	// Handle the active section based on the scroll position
	// useEffect(() => {
	// 	const handleActiveSection = () => {
	// 		// Get the currect focused section based on the scroll position
	// 		const sections = document.querySelectorAll("section");
	// 		const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	// 		const navbarHeight = document.getElementsByClassName('navbar')[0]?.clientHeight || 0;
	// 		let currentSection = -1;
	// 		sections.forEach((section, index) => {
	// 			const sectionTop = section.offsetTop - navbarHeight;
	// 			const sectionBottom = sectionTop + section.clientHeight;
	// 			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
	// 				currentSection = index;
	// 			}
	// 		});
	// 		// Add active class to the current focused section
	// 		const menuItems = document.querySelectorAll(".nav-items a");
	// 		menuItems.forEach((item) => {
	// 			item.classList.remove("active");
	// 		});
	// 		menuItems[currentSection + 1].classList.add("active");
	// 		// handle if user is not on any section simple make the first a active
	// 		if (sections.length > 0) {
	// 			if (scrollPosition < sections[0].offsetTop - navbarHeight || scrollPosition > sections[sections.length - 1].offsetTop + sections[sections.length - 1].clientHeight - navbarHeight) {
	// 				// remove active class from all menu items
	// 				menuItems.forEach((item) => {
	// 					item.classList.remove("active");
	// 				});
	// 				// add active class to the first menu item
	// 				menuItems[0].classList.add("active");
	// 			}
	// 		}

	// 	}
	// 	handleActiveSection();
	// 	window.addEventListener("scroll", handleActiveSection);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleActiveSection);
	// 	}
	// }, []);

	return (
		<div className="min-h-screen h-[2000px]">
			<FirstSection />
		</div>
	);
}

export default Home;