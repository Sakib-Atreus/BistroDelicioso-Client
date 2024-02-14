const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-around">
          <button className="btn btn-outline text-orange-400 border-0 border-b-4 uppercase bg-slate-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;