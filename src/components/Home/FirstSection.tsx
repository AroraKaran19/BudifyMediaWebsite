import { useEffect } from "react";
import "../../styles/Home.css";

function FirstSection() {

	useEffect(() => {
		setTimeout(() => {
			const firstText = document.querySelector(".animate-swipeFromLeft") as HTMLElement;
			firstText?.classList.remove("animate-swipeFromLeft");
			const secondText = document.querySelector(".animate-swipeFromRight") as HTMLElement;
			secondText?.classList.remove("animate-swipeFromRight");
			firstText?.classList.add("animate-floatingText");
			secondText?.classList.add("animate-floatingText");
		}, 1200);
	}, []);

	return (
		<div className="h-screen w-full absolute top-0 bg-background-gradient overflow-hidden">
			<div className="h-full w-full flex flex-col justify-center items-center px-10">
				<div className="first-section-heading flex flex-col justify-center items-center py-10">
					<h1 className="font-bold text-center animate-swipeFromLeft">Growing Brands</h1>
					<h1 className="font-bold text-center animate-swipeFromRight">Amplifying Reach!</h1>
				</div>
				<div className="first-section-subheading flex flex-wrap justify-center items-center">
					<p className="text-center text-black text-xl">Unlock high-performance creativity. Connect with top-tier design talent to boost your team's speed, efficiency, and scalability.</p>
				</div>
			</div>
		</div>
	)
}

export default FirstSection;