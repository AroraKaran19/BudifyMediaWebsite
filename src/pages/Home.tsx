import "../styles/Home.css";

function Home() {
	return (
		<div className="h-[150vh] bg-[#191919]">
			<div className="home-first-container h-auto w-full" id="start">
				<div className="home-first-content flex h-full w-full sm:flex-col justify-center items-center">
					<p id="title" className="text-white w-[50%] text-center">
						<span>YOUR</span>
						<span>PARTNER</span>
						<span>IN</span>
						<span>MARKETING</span>
						<span>SUCCESS!</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home;