import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post('/menu', newItem)
          .then(data => {
            console.log('After posting new menu item', data.data);
            if(data.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
          })
        }
      });
  };
  //   console.log(errors);
  //   console.log(img_hosting_token);

  return (
    <div className="w-full ms-4">
      <Helmet>
        <title>Bistro Delicioso | Add Item</title>
      </Helmet>
      <SectionTitle
        subHeading={"What's new?"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-12 rounded-lg">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Type Here The Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </label>
        <div className="flex gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Desi</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Item Price"
              {...register("price", { required: true, maxLength: 20 })}
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea
            {...register("recipe", { required: true, maxLength: 200 })}
            className="textarea textarea-bordered h-24"
            placeholder="Type Here of Item Details"
          ></textarea>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Item Image*</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </label>
        <input type="submit" className="btn btn-sm mt-8 bg-[#D1A054] text-white font-semibold text-lg px-8" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
