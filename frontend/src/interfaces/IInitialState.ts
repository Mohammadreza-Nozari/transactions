import { ITransaction } from "./ITransaction";

export interface IInitialState {
  selectedCurrency: "USD";
  transactions: ITransaction[];
}
