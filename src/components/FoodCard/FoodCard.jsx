import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const handleAddToCart = (food) => {
    if (user && user.email) {
      //TODO: send cart item to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      }
      axios.post('http://localhost:5000/carts', cartItem)
      .then(res =>{
        console.log(res)
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1000
          });
        }
      })

    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          //send user to login page
          navigate('/login', {state: {form: location}})
        }
      });
    }
  };
  return (
    <div className="card bg-[#F3F3F3] rounded-none">
      <figure>
        <img src={image} className="w-full" />
      </figure>
      <p className="absolute right-2 top-2 px-3 py-2 bg-black text-white font-semibold">
        {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-[#151515] mb-6">{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="uppercase btn bg-[#E8E8E8] btn-outline border-0 border-b-4 font-semibold text-xl hover:text-[#BB8506] text-[#BB8506]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
