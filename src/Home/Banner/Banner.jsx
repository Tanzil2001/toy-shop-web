import GoogleFontLoader from 'react-google-font-loader';
import mlogo from '../../assets/marvel-logo (1).png';

const Banner = () => {
    return (
        <>
         <GoogleFontLoader
        fonts={[
          {
            font: 'Bruno Ace SC',
            weights: [400, 700],
          },
          {
            font: 'Zen Tokyo Zoo',
            weights: [400, '400i', 700],
          },
        ]}
      />
            <div className="bg-black rounded-xl">
                <div style={{ backgroundImage: `url("https://www.pngkit.com/png/full/97-979452_superhero-silhouette-banner-oval-marvel-heroic-silhouettes.png")`, height: '600px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className="opacity-30 relative">
                </div>
                <img style={{animation: 'spin 2s infinite linear'}} className='absolute md:top-52 top-40 md:left-[500px]' src={mlogo} alt="" />
                <div className="absolute md:top-48 top-96 left-16 md:left-[400px]  md:w-1/2 text-white">
                    <p style={{fontFamily: 'Bruno Ace SC'}} className="text-6xl font-bold "><span className='text-red-600'>Action</span> <span className='text-blue-600'>Figure</span> <span className='text-red-600'>Toys</span>  </p>
                    
                    <p style={{fontFamily: 'Zen Tokyo Zoo'}} className='text-center hidden md:block mt-60 text-xl'>Superhero Toys Store is a one-stop destination for all superhero enthusiasts and collectors. Our store offers a vast selection of high-quality toys, action figures, and merchandise inspired by beloved superheroes from comics, movies, and TV shows. With a collection that spans across various universes and franchises, we cater to fans of Marvel, DC, Star Wars, and more. From iconic superheroes like Spider-Man and Batman to popular characters like Iron Man and Wonder Woman, we have an extensive range of products that capture the essence of these mighty heroes. Our store is committed to providing a thrilling shopping experience, </p>
                </div>
            </div>
        </>
    );
};

export default Banner;