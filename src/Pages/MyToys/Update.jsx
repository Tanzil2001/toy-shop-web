import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const updateToy = useLoaderData();
    console.log(updateToy);
    const {available_quantity, description, price, _id} = updateToy ;
    const handleToyUpdate =(event) =>{
        event.preventDefault();
        const form = event.target ;
        const price = form.price.value ;
        const available_quantity = form.quantity.value ;
        const description = form.details.value ;
        const updateToy = {price, available_quantity, description}
        console.log(updateToy);

        fetch(`http://localhost:5000/alltoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire(
                    'The Internet?',
                    'That thing is still around?',
                    'question'
                  )
            }
        })
    }
    return (
        <div className="my-8">
            <form onSubmit={handleToyUpdate} className="grid grid-cols-1 gap-5 " >
                <input className="w-1/2 p-3 mx-auto bg-slate-100 rounded-md" type="number" name="price"  />
                <input className="w-1/2 p-3 mx-auto bg-slate-100 rounded-md " type="number" name="quantity"  />
                <input className="w-1/2 p-3 mx-auto bg-slate-100 rounded-md" type="text" name="details"  />
                <input className="w-1/2 p-3 mx-auto bg-slate-100 rounded-md" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;