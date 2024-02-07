import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide3.jpg";
import img3 from "../../../assets/home/slide4.jpg";

const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl w-full h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Salad!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae atque eum corporis!</p>
            <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-12 text-orange-500 font-bold">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={img2}
              alt="Shoes"
              className="rounded-xl w-full h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pizza!</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quas quaerat architecto?</p>
            <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-12 text-orange-500 font-bold">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={img3}
              alt="Shoes"
              className="rounded-xl w-full h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Desert!</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ipsam itaque voluptates!</p>
            <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-12 text-orange-500 font-bold">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
