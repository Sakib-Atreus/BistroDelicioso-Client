import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure()

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        

        axiosSecure.delete(`/menu/${item._id}`)
        .then(res => {
            console.log('Deleted res', res.data);
            if(res.data.deletedCount > 0)
            {
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
            }
        })
        .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete item.",
              icon: "error",
            });
          });
      }
    });
  };
  if (loading) {
    return <div>Loading...<span className="loading loading-bars loading-lg"></span></div>;
  }
  return (
    <div className="w-full ms-4 bg-gray-100">
      <Helmet>
        <title>Bistro Delicioso | Manage Items</title>
      </Helmet>
      <SectionTitle
        subHeading={"Hurry Up!"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      <div className="overflow-x-auto bg-white m-4 p-2">
      <h3 className="text-3xl font-semibold my-4 text-[#D1A054]">
        Total User{"'"}s: <span className="text-black">{menu.length}</span>
      </h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054]">
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.category}
                  <br />
                </td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </td>
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
    </div>
  );
};

export default ManageItems;
