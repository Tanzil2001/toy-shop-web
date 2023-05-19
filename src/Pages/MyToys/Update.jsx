

const Update = () => {
    return (
        <div className="my-8">
            <form className="grid grid-cols-1 gap-5 " >
                <input className="w-1/2 p-3 mx-auto bg-slate-100 rounded-md" type="number" name="price"  />
                <input className="w-1/2 p-3 mx-auto bg-slate-100 rounded-md " type="number" name="quantity"  />
                <input className="w-1/2 p-3 mx-auto bg-slate-100 rounded-md" type="text" name="details"  />
                <input className="w-1/2 p-3 mx-auto bg-slate-100 rounded-md" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;