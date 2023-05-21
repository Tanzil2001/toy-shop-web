import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddAToy = () => {

    const { user } = useContext(AuthContext);


    const handlePost = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.toyName.value;
        const seller_name = form.name.value;
        const picture_url = form.toyPhoto.value;
        const seller_email = form.email.value;
        const sub_category = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.quantity.value;
        const description = form.details.value;

        const addToy = { name, seller_name, seller_email, picture_url, sub_category, price, rating, available_quantity, description };

        fetch('https://assignment-11-server-teal.vercel.app/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully add a Toy'
                    )

                }
            })
    }
    const glassStyle = {
        background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        padding: '20px'
    };

    return (
        <div className="my-8 bg-red-600 container mx-auto p-10">
            <Helmet>
                <title>Toy Stars-Add A Toy</title>
            </Helmet>
            <p className="text-center font-serif text-white mb-10 text-4xl font-bold">Add A Toy To Your shop </p>
            <form style={glassStyle} onSubmit={handlePost} className="md:grid space-y-3 md:space-y-0 md:grid-cols-2 gap-5 w-2/3 mx-auto">
                <input className="input shadow-xl input-bordered input-error w-full max-w-md mx-auto" type="text" name="toyName" placeholder="Toy Name" />
                <input className="input shadow-xl input-bordered input-error w-full max-w-md mx-auto" type="url" name="toyPhoto" placeholder="Toy Photo" />
                <input className="input shadow-xl input-bordered input-error w-full max-w-md mx-auto" type="text" value={user?.displayName} name="name" placeholder="Seller Name" />
                <input className="input shadow-xl input-bordered input-error w-full max-w-md mx-auto" type="email" value={user?.email} name="email" placeholder="Seller Email" />
                <select name="subCategory" className="select select-secondary w-full max-w-xl">
                    <option value='Marvel'>Marvel</option>
                    <option value='Avengers'>Avengers</option>
                    <option value='Star Wars'>Star Wars</option>
                </select>
                <input className="input shadow-xl input-bordered input-error w-full max-w-md mx-auto" type="number" name="price" placeholder="Price" />
                <input className="input shadow-xl input-bordered input-error w-full max-w-md mx-auto" type="number" name="rating" placeholder="Rating" />
                <input className="input shadow-xl input-bordered input-error w-full max-w-md mx-auto" type="number" name="quantity" placeholder="Available quantity" />
                <input className="input shadow-xl input-bordered input-error h-40 w-full mx-auto" type="text" name="details" placeholder="Detail description" />
                <div className=" ">
                    <input className="btn-outline w-full h-20 p-3 text-lg font-bold rounded-lg bg-red-600 " type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;