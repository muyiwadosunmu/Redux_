import { useSelector } from "react-redux";

function Customer() {
  // Inside of the callback is a place where we could do all kind of data manipulation
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
