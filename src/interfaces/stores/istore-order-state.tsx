import order from '../order';

export default interface IStoreOrderState {
  orders: order[] | [];
  loading: boolean;
  purchased: boolean;
}
