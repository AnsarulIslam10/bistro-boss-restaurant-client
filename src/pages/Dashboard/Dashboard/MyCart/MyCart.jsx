import { FaTrash } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const totalPrice = parseFloat(
    cart.reduce((total, item) => total + item.price, 0)
  ).toFixed(1);
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center justify-between p-10">
        <h2>Items: {cart.length}</h2>
        <h2>Total Price: ${totalPrice}</h2>
        <button className="btn">PAY</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <th>
                  <button className="btn btn-ghost btn-xs bg-red-500 rounded-none btn-square text-white">
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
