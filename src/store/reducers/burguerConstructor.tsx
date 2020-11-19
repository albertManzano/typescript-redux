import * as actionTypes from '../actions/actionTypes';
import { Ingredients } from '../system';
import { updateObject } from '../utility';

const initialState: { loading: boolean; ingredients: Ingredients | null; totalPrice: number; error: boolean } = {
	ingredients: null,
	totalPrice: 4,
	error: false,
	loading: true
};

const INGREDIENT_PRICES: Ingredients = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

const addIngredient = (state, action) => {
	if (state.ingredients == null) return state;
	const updatedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] + 1 };
	const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
	const updatedState = {
		ingredients: updatedIngredients,
		totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient]
	};
	return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
	if (state.ingredients == null) return state;
	if (state.ingredients[action.ingredient] < 0) return state;
	if (state.ingredients == null) return state;
	const _updatedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] - 1 };
	const _updatedIngredients = updateObject(state.ingredients, _updatedIngredient);
	const _updatedState = {
		ingredients: _updatedIngredients,
		totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient]
	};
	return updateObject(state, _updatedState);
};

const setIngredients = (state, action) => {
	if (action.ingredients == null) return state;
	return updateObject(state, {
		ingredients: {
			salad: action.ingredients.salad,
			bacon: action.ingredients.bacon,
			cheese: action.ingredients.cheese,
			meat: action.ingredients.meat
		},
		error: false,
		totalPrice: initialState.totalPrice,
		loading: false
	});
};

const resetIngredients = (state, action) => {
	return updateObject(state, { ingredients: initialState.ingredients });
};

const fetchIngredientsFailed = (state, action) => {
	return updateObject(state, {
		error: true
	});
};

const burguerConstructorReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case actionTypes.RESET_INGREDIENTS:
			return resetIngredients(state, action);
		case actionTypes.ADD_INGREDIENT:
			return addIngredient(state, action);
		case actionTypes.REMOVE_INGREDIENT:
			return removeIngredient(state, action);
		case actionTypes.SET_INGREDIENTS:
			return setIngredients(state, action);
		case actionTypes.FETCH_INGREDIENTS_FAILED:
			return fetchIngredientsFailed(state, action);
		default:
			return state;
	}
};

export default burguerConstructorReducer;
