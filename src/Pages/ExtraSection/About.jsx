import GoogleFontLoader from 'react-google-font-loader';
import team from '../../assets/team.png';

const About = () => {
    
    return (
        <>
        < GoogleFontLoader
        fonts={
            [
                {
                    font: 'Oleo Script Swash Caps',
                    weights: [400, 700],
                },
                {
                    font: 'Parisienne',
                    weights: [400, '400i', 700],
                },
            ]} />
            <section className="bg-gray-100 py-10 rounded-b-lg">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <h2 style={{fontFamily: 'Oleo Script Swash Caps'}} className="text-5xl font-bold mb-4">About Us</h2>
                            <p style={{fontFamily: 'Parisienne'}} className="text-black text-3xl">
                                We are a dedicated action figure store passionate about bringing you the best collectibles from your favorite franchises. Our carefully curated collection includes a wide range of action figures, from classic characters to the latest releases.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={team} alt="About Us" className="w-full h-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
