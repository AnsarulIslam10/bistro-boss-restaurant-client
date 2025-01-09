import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return Array.isArray(res.data) ? res.data : []; // Ensure it's an array
    },
  });

  return (
    <div className="w-4/5 mx-auto mt-16">
      <h2 className="text-4xl mb-4 font-semibold">
        Total Payments: {payments.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-500 text-white">
              <th>Email</th>
              <th>Total Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments && payments.length > 0 ? (
              payments.map((payment) => (
                <tr key={payment._id}>
                  <td>{payment.email}</td>
                  <td>{payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.status}</td>
                  <td>{payment.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No payment history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
