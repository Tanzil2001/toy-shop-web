import GoogleFontLoader from 'react-google-font-loader';
import blf from '../../../assets/blck-fri-no-b (1).png'

const Sale = () => {
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
            <div className=' bg-gradient-to-r p-3 from-black to-red-600 rounded-t-lg md:flex items-center mt-20'>
                <img className='animate-bounce' src={blf} alt="" />
                <div className='text-white'>
                    <p className='text-5xl mb-8 text-center' style={{fontFamily: 'Oleo Script Swash Caps'}}>Find Your Favorite Toys On Sale </p>
                    <p style={{fontFamily: 'Parisienne'}} className='text-2xl text-center'>
                        Toy Friday Sale: Dont miss out on our exciting deals and discounts on a wide range of toys! Get ready to shop and save big on your favorite toys this Toy Friday!
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sale;