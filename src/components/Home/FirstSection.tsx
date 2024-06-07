function FirstSection() {

	return (
		<div className="min-h-[25vw] w-full">
			<div className="heading-text-container h-full w-full flex sm:flex-col">
				<div className="text-head p-[5vw] flex w-[55-vw] flex-col justify-center">
					{["Growing Brands", "Amplifying Reach!"].map((text, index) => (
						<p key={index} className={`${index === 0 ? "animate-shine" : "animate-shineDelayed"} tracking-normal text-transparent uppercase text-[13vw] sm:text-[16vw] font-['Robinson_Regular'] leading-[11vw] sm:leading-[15vw] bg-heading-gradient bg-clip-text sm:text-center`}>{text}</p>
					))}
				</div>
				<div className="text-mission flex-1">
					<p className="text-[2vw] sm:text-[3vw] uppercase w-[45-vw] p-[5vw] text-white font-['Circular_Std_Bold'] sm:text-center">
						We craft compelling narratives that transform products into market heroes.
						Let's build your go-to-market strategy and watch them fly.</p>
				</div>
			</div>
		</div>
	)
}

export default FirstSection