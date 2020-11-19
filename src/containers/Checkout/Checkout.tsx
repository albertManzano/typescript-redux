import React,{useEffect, useLayoutEffect} from 'react'; /* eslint-disable-line */
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route,Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import ingredients from '../../store/system/ingredients';
import * as actionTypes from '../../store/actions/index';

const Checkout: React.FC<{onInitPurchase:()=>boolean;
	history:any,match, ingredients:ingredients ,onLoadIngredients:()=>ingredients,purchased:boolean}>= ({ onInitPurchase,history,match, ingredients ,onLoadIngredients,purchased}) => {
	const purchaseCancelled = () =>{
		onLoadIngredients()
		history.goBack()
	}

	const purchaseContinue = () => history.replace('/checkout/contact-data');

	useEffect(()=>{
		onInitPurchase()
	},[])

	return (
		<div>
			
			{(ingredients && Object.values(ingredients).every((ele) => ele >= 0)) ? <>
			{purchased ? <Redirect to="/"/> : null}
			<CheckoutSummary
				purchaseCancelled={purchaseCancelled}
				purchaseContinue={purchaseContinue}
				ingredients={ingredients}
			/>
			<Route path={match.path + '/contact-data'} component={ContactData} /> </>: <Redirect to="/"/>}
		</div>
	);
};

const mapStateToProps = (state:{burguerConstructor:{ingredients:ingredients,totalPrice:number},order:{purchased:boolean}}) => {
	return {
		ingredients: state.burguerConstructor.ingredients,
		totalPrice: state.burguerConstructor.totalPrice,
		purchased: state.order.purchased
	};
};

const mapDispatchToProps = (dispatch:any) =>{
	return {
		onInitPurchase: () => dispatch(actionTypes.purchaseInit),
		onLoadIngredients:()=>dispatch(actionTypes.loadIngredients)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);

//^(?=.{8,12}$)(?=[^A-Z]*[A-Z])(?=\D*\d)(?=(?:[^a-z]*[a-z]){3})(?=[^\s#*.!?$]*[#*.!?$])(?!.*(.)\1)(?:[a-z]|[A-Z])[a-zA-Z0-9#*.!?$,]+$