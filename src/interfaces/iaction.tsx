import Iingredients from './ingredients';
import order from './order';

export default interface IAction {
  type: string;
  ingredient?: string;
  ingredients?: Iingredients;
  id?: string;
  orderData?: order;
  error?: string;
  orders?: order[];
}
