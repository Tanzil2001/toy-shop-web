import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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

        fetch('http://localhost:5000/addtoys', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'The Internet?',
                    'That thing is still around?',
                    'question'
                  )
                  
            }
        })
    }

    // https://assignment-11-server-teal.vercel.app
    return (
        <div className="my-8 ">
            <form onSubmit={handlePost} className="grid grid-cols-2 gap-5 ml-32">
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="text" name="toyName" placeholder="Toy Name" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="url" name="toyPhoto" placeholder="Toy Photo" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="text" value={user?.displayName} name="name" placeholder="Seller Name" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="email" value={user?.email} name="email" placeholder="Seller Email" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="text" name="subCategory" placeholder="Sub Category" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="number" name="price" placeholder="Price" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="number" name="rating" placeholder="Rating" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="number" name="quantity" placeholder="Available quantity" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="text" name="details" placeholder="Detail description" />
                <input className="p-3 w-2/3 bg-slate-200 rounded-md" type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddAToy;