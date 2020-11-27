import Iingredients from '../ingredients';

export default interface IRootStore {
  loading: boolean;
  ingredients: Iingredients | null;
  totalPrice: number;
  error: boolean;
}
