import { Link } from "react-router-dom";
import Signup from "../../assets/others/authentication1-transformed.png";
import "../SignUp/SignUp.css";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        //   navigate('/');
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Delicioso | SignUp</title>
      </Helmet>
      <div className="signup-page hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <h1 className="text-4xl font-bold text-center m-2">SignUp</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600">Name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  name="photoUrl"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
                {errors.photoUrl?.type === "required" && (
                  <p className="text-red-600">Photo URL is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one upper case, one lower case, one
                    number and one special character
                  </p>
                )}
              </div>
              {/* <div className="form-control text-black">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
            </div> */}
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-300 text-white"
                  value="SIGN UP"
                  type="submit"
                />
              </div>
              <p className="text-sm text-center text-orange-300 text-semibold">
                Already have an account?{" "}
                <Link to="/login" className="text-orange-400 text-bold">
                  Please Login
                </Link>
              </p>
              <p className="text-sm text-center">Or sign in with</p>
            </form>
          </div>
          <div className="text-center lg:text-left">
            <img className="" src={Signup} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
