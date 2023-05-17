

const ShowAllToys = ({toy}) => {
    const { name, sub_category, price, available_quantity} = toy ;
    return (
        <div>
            
            <p>{name}</p>
            <p>{sub_category}</p>
        </div>
    );
};

export default ShowAllToys;