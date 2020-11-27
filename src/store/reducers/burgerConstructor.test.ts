import * as actionTypes from '../actions/actionTypes';
import reducer from './burgerConstructor';
// import sinon from 'sinon';
import Iingredients from '../../interfaces/ingredients';

describe('burguerConstructor reducer', () => {
  const initialState: {
    loading: boolean;
    ingredients: Iingredients | null;
    totalPrice: number;
    error: boolean;
  } = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    loading: true,
  };

  const INGREDIENT_PRICES: Iingredients = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  };

  const ingredientsMock = {
    ...initialState.ingredients,
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 1,
  };

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: null,
      totalPrice: 4,
      error: false,
      loading: true,
    });
  });

  it('should reset ingredients to null', () => {
    expect(
      reducer(
        {
          ingredients: ingredientsMock,
          totalPrice: 4,
          error: false,
          loading: true,
        },
        {
          type: actionTypes.RESET_INGREDIENTS,
        },
      ),
    ).toEqual(initialState);
  });

  describe('Add Ingredients', () => {
    it('should ,if ingredients not null, add ingredients and update price', () => {
      expect(
        reducer(
          {
            ingredients: ingredientsMock,
            totalPrice: 4,
            error: false,
            loading: true,
          },
          {
            type: actionTypes.ADD_INGREDIENT,
            ingredient: 'meat',
          },
        ),
      ).toEqual({
        ingredients: {
          salad: 1,
          bacon: 1,
          cheese: 1,
          meat: 2,
        },
        totalPrice: initialState.totalPrice + INGREDIENT_PRICES.meat,
        error: false,
        loading: true,
      });
    });

    it('should return initial state if ingredients is null', () => {
      expect(
        reducer(initialState, {
          type: actionTypes.ADD_INGREDIENT,
          ingredients: 'meat',
        }),
      ).toEqual({
        ingredients: null,
        totalPrice: 4,
        error: false,
        loading: true,
      });
    });
  });

  describe('Remove Ingredients', () => {
    it('should ,if ingredients not null, remove ingredients and update price', () => {
      expect(
        reducer(
          {
            ingredients: ingredientsMock,
            totalPrice: 4,
            error: false,
            loading: true,
          },
          {
            type: actionTypes.REMOVE_INGREDIENT,
            ingredient: 'meat',
          },
        ),
      ).toEqual({
        ingredients: {
          salad: 1,
          bacon: 1,
          cheese: 1,
          meat: 0,
        },
        totalPrice: initialState.totalPrice - INGREDIENT_PRICES.meat,
        error: false,
        loading: true,
      });
    });

    it('should return initial state if ingredients is null', () => {
      expect(
        reducer(initialState, {
          type: actionTypes.REMOVE_INGREDIENT,
          ingredients: 'meat',
        }),
      ).toEqual({
        ingredients: null,
        totalPrice: 4,
        error: false,
        loading: true,
      });
    });
  });

  describe('should return ingredients defined but all to 0', () => {
    expect;
  });
});

// switch (action.type) {
//     case actionTypes.RESET_INGREDIENTS:
//         return resetIngredients(state, action);
//     case actionTypes.ADD_INGREDIENT:
//         return addIngredient(state, action);
//     case actionTypes.REMOVE_INGREDIENT:
//         return removeIngredient(state, action);
//     case actionTypes.SET_INGREDIENTS:
//         return setIngredients(state, action);
//     case actionTypes.FETCH_INGREDIENTS_FAILED:
//         return fetchIngredientsFailed(state, action);
//     default:
//         return state;
// }
// };
