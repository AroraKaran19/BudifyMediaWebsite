import ms_melon from '../../assets/images/clients/ms-melon.png';
import inview_interior from '../../assets/images/clients/inview.jpg';

interface Clients {
    [key: string]: {
        logo: string;
        url: string;
        src: string;
    }
}

function SecondSection() {
    const clients : Clients = {
        "InviewInterior": {
            "logo": "https://via.placeholder.com/250",
            "url": "https://inviewinterior.in",
            "src": inview_interior
        },
        "MS-Melon": {
            "logo": "https://via.placeholder.com/250",
            "url": "https://ms-melon.com",
            "src": ms_melon
        }
    };

    // Trusted By section
    return (
        <div className="min-h-[10vw] bg-neutral-200">
            <div className="trusted-container h-full w-full flex flex-col justify-center items-center p-[1vw]">
                <div className="trusted-header flex justify-center items-center">
                    <h1 className="text-[4vw] sm:text-[6vw] font-['Circular_Std_Bold'] font-bold text-neutral-950 text-center">Client Success</h1>
                </div>
                <div className="trusted-clients h-full w-full">
                    <div className="trusted-clients-container flex flex-wrap justify-center items-center gap-6 p-[3vw] justify-items-center">
                        {Object.keys(clients).map((client, index) => (
                            <div key={index} className="trusted-client h-[8vw] w-[8vw] min-h-[15px] sm:h-[15vw] sm:max-h-[150px] min-w-[15px] sm:w-[15vw] sm:max-w-[150px] flex justify-center items-center cursor-pointer"
                            onClick={() => {window.open(clients[client].url, '_blank');}}>
                                <img src={clients[client].src} alt={`${client}`} className='h-full w-full' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection