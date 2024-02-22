import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  console.log(cart?.length);
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-20 bg-black text-white uppercase">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Our Menu</Link>
              </li>
              <li>
                <Link to="/order/salad">Order Food</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link>
                      <button onClick={handleLogOut} className="btn btn-ghost">
                        SIGN OUT
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">LOGIN</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/about">About</Link>
              </li>
              {user && (
              <li className="">
                <Link to="/dashboard/myCart">
                  <p className="">Dashboard</p>
                  {isAdmin ? (
                    <>
                      <div className="absolute"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute">
                        <p className="bg-orange-500 mb-8 ms-20 rounded-md relative hover:p-1 flex text-md">
                          <FaShoppingCart className="mt-1 text-black"></FaShoppingCart>
                          +{cart?.length || 0}
                        </p>
                      </div>
                    </>
                  )}
                </Link>
              </li>
            )}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <div className="text-left">
              <p>BISTRO DELICIOSO</p>
              <p>R E S T A U R A N T</p>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Our Menu</Link>
            </li>
            <li>
              <Link to="/order/salad">Order Food</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link>
                    <button onClick={handleLogOut} className="">
                      SIGN OUT
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
            {user && (
              <li className="">
                <Link to="/dashboard/myCart">
                  <p className="">Dashboard</p>
                  {isAdmin ? (
                    <>
                      <div className="absolute"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute">
                        <p className="bg-orange-500 mb-8 ms-20 rounded-md relative hover:p-1 flex text-md">
                          <FaShoppingCart className="mt-1 text-black"></FaShoppingCart>
                          +{cart?.length || 0}
                        </p>
                      </div>
                    </>
                  )}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get Started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
