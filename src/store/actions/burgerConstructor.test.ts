import {
  addIngredient,
  removeIngredient,
  setIngredients,
  fetchIngredientsFailed,
  loadIngredients,
  resetIngredients,
} from './burgerConstructor';
import * as actionTypes from './actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import api from '../../api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('burgerConstructor actions', () => {
  it('should add ingredient', () => {
    const action = {
      type: actionTypes.ADD_INGREDIENT,
      ingredient: 'salad',
    };
    expect(addIngredient('salad')).toEqual(action);
  });

  it('should remove ingredient', () => {
    const action = {
      type: actionTypes.REMOVE_INGREDIENT,
      ingredient: 'meat',
    };
    expect(removeIngredient('meat')).toEqual(action);
  });

  it('load ingredients', async () => {
    loadIngredients();
    expect(api).toHaveBeenCalled;
  });
});
