import { useEffect } from "react";
import "../styles/Home.css";

function Home() {
	const loopThrough = ["Founder", "Startup", "Influencer", "Firm", "Agency", "Individual"]

	useEffect(() => {
		const handleLoopThrough = () => {
			let i = 0;
			setInterval(() => {
				if (i === loopThrough.length) {
					i = 0;
				}
				let element = document.getElementsByClassName("loop")[0];
				if (element) {
					element.innerHTML = loopThrough[i];
				}
				i++;
			}, 1000);
		}
		handleLoopThrough();
	}, []);

	return (
		<div className="h-[150vh] bg-[#191919]">
			<div className="home-first-container h-auto w-full" id="start">
				<div className="home-first-content flex h-full w-full flex-col justify-center items-center">
					<p>So You are a</p>
					<p className="loop">Individual</p>
					<p className="text-center">"We'll take your marketing needs from here"</p>
				</div>
			</div>
		</div>
	);
}

export default Home;