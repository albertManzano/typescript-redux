import React, { useEffect, useState } from 'react'; /* eslint-disable-line */
import Aux from '../../hoc/Aux/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BurguerController from '../../components/Burguer/BurguerController/BurguerController';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actionTypes from '../../store/actions/index';
import { connect } from 'react-redux';
import { Ingredient, Ingredients } from '../../store/system';

const BurguerConstructor: React.FC<{
	error: boolean;
	totalPrice: number;
	history: any;
	ingredients: Ingredients;
	purchased: boolean;
	loading: boolean;
	onInitPurchased: () => boolean;
	onIngredientAdded: () => Ingredient;
	onIngredientRemoved: () => Ingredient;
	onLoadIngredients: () => Ingredients | boolean;
	onResetIngredients: () => null
}> = ({
	loading,
	error,
	totalPrice,
	history,
	ingredients,
	onInitPurchased,
	onIngredientAdded,
	onIngredientRemoved,
	onLoadIngredients,
	onResetIngredients
}) => {
	let [ disabledInfo, setDisabled ] = useState<object>({});
	let [ purchasable, setIsPurchasable ] = useState<boolean>();
	let [ purchasing, setPurchasing ] = useState<boolean>();

	useEffect(() => {
		onResetIngredients()
		setIsPurchasable(false)
		setPurchasing(false)
		onLoadIngredients();
	}, []);

	useEffect(
		() => {
			if (ingredients) {
				disabledInfo = { ...ingredients };
				for (let key in disabledInfo) {
					disabledInfo[key] = disabledInfo[key] <= 0;
				}
				setDisabled(disabledInfo);
				const checkPruchasable = { ...ingredients };
				const sum = Object.keys(ingredients)
					.map((ingreKey) => {
						return checkPruchasable[ingreKey];
					})
					.reduce((sum, el) => {
						return sum + el;
					}, 0);
				setIsPurchasable((purchasable = sum <= 0));
			}
		},
		[ ingredients ]
	);

	const purchaseHandler = () => setPurchasing((purchasing = true));

	const purchaseCancelHandler = () => setPurchasing((purchasing = false));

	const purchaseContinueHandle = () => {
		onInitPurchased();
		history.push({ pathname: '/checkout' });
	};

	return (
		<Aux>
			<Modal show={purchasing} modalClosed={purchaseCancelHandler}>
				{ingredients &&
				Object.values(ingredients).every((ele) => ele >= 0) &&
				!error && (
					<OrderSummary
						totalPrice={totalPrice}
						ingredients={ingredients}
						purchaseCancelled={purchaseCancelHandler}
						purchaseContinue={purchaseContinueHandle}
					/>
				)}
			</Modal>
			{!ingredients && error ? (
				<p>Ingredients can not be loaded!</p>
			) : !loading && ingredients && Object.values(ingredients).every((ele) => ele >= 0) && !error ? (
				<Aux>
					<Burguer ingredients={ingredients} />
					<BurguerController
						purchasable={purchasable}
						added={onIngredientAdded}
						substructed={onIngredientRemoved}
						disabled={disabledInfo}
						totalPrice={totalPrice}
						ordered={purchaseHandler}
					/>
				</Aux>
			) : (
				<Spinner />
			)}
		</Aux>
	);
};

const mapStateToProps = (state: {
	burguerConstructor: { ingredients: Ingredients | null; totalPrice: number; error: boolean; loading: boolean };
	order: { purchased: boolean };
}) => {
	return {
		ingredients: state.burguerConstructor.ingredients,
		totalPrice: state.burguerConstructor.totalPrice,
		error: state.burguerConstructor.error,
		purchased: state.order.purchased,
		loading: state.burguerConstructor.loading
	};
};

const mapDispacthToProps = (dispatch: any) => {
	return {
		onIngredientAdded: (ingredient: string) => dispatch(actionTypes.addIngredient(ingredient)),
		onIngredientRemoved: (ingredient: string) => dispatch(actionTypes.removeIngredient(ingredient)),
		onLoadIngredients: () => dispatch(actionTypes.loadIngredients()),
		onInitPurchased: () => dispatch(actionTypes.purchaseInit()),
		onResetIngredients: () => dispatch(actionTypes.resetIngredients())
	};
};

export default connect(mapStateToProps, mapDispacthToProps)(BurguerConstructor);
//export default connect(mapStateToProps, mapDispacthToProps)(withErrorHandler(BurguerConstructor, axios));
