function SecondSection() {
    // Trusted By section
    return (
        <div className="min-h-[10vw] bg-neutral-200">
            <div className="trusted-container h-full w-full flex flex-col justify-center items-center">
                <div className="trusted-header p-[1vw]">
                    <h1 className="text-[4vw] sm:text-[5vw] font-['Circular_Std_Bold'] font-bold text-neutral-950">Client Success</h1>
                </div>
                <div className="trusted-clients h-full w-full p-[1vw]">
                    <div className="trusted-clients-container flex flex-wrap gap-[5vw] justify-center items-center">
                        <div className="trusted-client min-h-[2vw] max-h-[8vw] min-w-[2vw] max-w-[10vw] flex">
                            <img src="https://via.placeholder.com/250" alt="client" />
                        </div>
                        <div className="trusted-client min-h-[2vw] max-h-[8vw] min-w-[2vw] max-w-[10vw] flex">
                            <img src="https://via.placeholder.com/250" alt="client" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection