import { LoadingLottie } from "@/components";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useDispatch, useSelector } from "react-redux";
import { setBreadCrumb } from "@/store/slice/app";
import {
  selectSelectedCurrency,
  selectTransactions,
  setCurrency,
} from "@/store/slice/transaction/transactionSlice";

const Transactions = () => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(selectSelectedCurrency);
  const transactions = useSelector(selectTransactions);

  console.log(transactions);

  dispatch(
    setBreadCrumb([
      { title: "Dashboard", link: "/" },
      { title: "Users", link: "/users" },
    ])
  );
  if (transactions.length == 0) {
    return (
      <div className=" flex justify-center pt-10">
        <div className=" w-[250px] ">
          <LoadingLottie />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div className="flex space-x-4 mt-4">
          {["USD", "EUR", "GBP", "All"].map((currency) => (
            <button
              key={currency}
              className={`px-4 py-2 rounded ${
                selectedCurrency === currency
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => dispatch(setCurrency(currency))}
            >
              {currency}
            </button>
          ))}
        </div>
        <DataTable columns={columns} data={transactions} />
      </div>
    );
  }
};

export default Transactions;
