import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  //   console.log(cart);
  //   how does reduce work!!!
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // if(data && data.deletedCount === 1)
            {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
            console.log(data);
          });
      }
    });
  };
  console.log(cart);

  return (
    <div className="w-full ms-4">
      <Helmet>
        <title>Bistro Delicioso | My Cart</title>
      </Helmet>
      <SectionTitle
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <section className="bg-base-200">
        <div className="uppercase font-bold  my-4 p-2 h-[60px] flex justify-evenly items-center">
          <h3 className="text-2xl ">Total Items: {cart.length}</h3>
          <h3 className="text-2xl ">Total Price: ${total}</h3>
          <Link to="/dashboard/payment"><button className="btn bg-[#D1A054] btn-sm text-black font-bold ">
            PAY
          </button></Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-base-200">
              <tr className="bg-[#D1A054]">
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyCart;
