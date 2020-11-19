import * as actionTypes from './actionTypes';
import ingredients from '../system/ingredients';
import axios from '../../axios';
import { Dispatch } from 'redux';

export const addIngredient = (ingredient: string) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredient
	};
};

export const removeIngredient = (ingredient: string) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredient
	};
};

export const setIngredients = (ingredients: ingredients) => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients
	};
};

export const fetchIngredientsFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENTS_FAILED
	};
};

export const loadIngredients = () => {
	return (dispatch: Dispatch) => {
		axios
			.get('/ingredients.json')
			.then(({ data }) => dispatch(setIngredients(data)))
			.catch((err) => dispatch(fetchIngredientsFailed()));
	};
};

export const resetIngredients = () => {
	return {
		type: actionTypes.RESET_INGREDIENTS
	};
};
