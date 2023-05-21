import AOS from 'aos';
import { useEffect } from "react";
import GoogleFontLoader from 'react-google-font-loader';
import batman from '../../assets/batman.png';
import blckw from '../../assets/black-widow.png';
import spman from '../../assets/super-man.png';
import blckp from '../../assets/black-panthor.png';
import gstRider from '../../assets/gstrider.jpg';
import ds from '../../assets/doctor-s.png';
import wg from '../../assets/wonder-g.png';
import sw1 from '../../assets/star-w-1.png';
import sw2 from '../../assets/star-w-2.png';


const Gallery = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

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
            <div>
                <div className='mt-20 text-center'>
                    <p style={{fontFamily: 'Oleo Script Swash Caps'}} className='text-center text-5xl'>All Heros Gallery Find Yours</p>
                    <p style={{fontFamily:'Parisienne'}} className='mt-5 text-xl font-bold'>All Heroes Gallery Toy is a premier destination for superhero  enthusiasts <br /> and collectors. Our extensive collection features action figures, statues With high-quality craftsmanship <br /> and attention to detail, we bring iconic heroes to life. Explore our gallery and bring home the heroes that inspire you.</p>
                </div>
                <div className='md:grid md:grid-cols-3 gap-10 p-5 mx-auto'>
                    <img data-aos="fade-down-right" className='w-[400px] h-[500px]' src={batman} alt="" />
                    <img data-aos="fade-down" className='w-[400px] h-[500px]' src={blckw} alt="" />
                    <img data-aos="fade-down-left" className='w-[400px] h-[500px]' src={spman} alt="" />
                    <img data-aos="fade-right" className='w-[400px] h-[300px]' src={blckp} alt="" />
                    <img data-aos="zoom-in" className='w-[400px] h-[300px]' src={gstRider} alt="" />
                    <img data-aos="fade-left" className='w-[400px] h-[300px]' src={ds} alt="" />
                    <img data-aos="fade-up-right" className='w-[400px] h-[500px]' src={wg} alt="" />
                    <img data-aos="fade-up" className='w-[400px] h-[500px]' src={sw1} alt="" />
                    <img data-aos="fade-up-left" className='w-[400px] h-[500px]' src={sw2} alt="" />


                </div>
            </div>
        </>
    );
};

export default Gallery;