import React, {MouseEvent, useEffect, useState } from 'react'; /* eslint-disable-line */
import Button from '../../../components/UI/Button/Button';
import './ContactData.sass';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import form from './contactData';
import {connect } from 'react-redux';
import {OrderForm,FormElementsArray} from '../../../store/system';
import * as actions from '../../../store/actions/index';
import ingredients from '../../../store/system/ingredients';

const ContactData = ({onOrderBurguer,loading,totalPrice,ingredients } ) => {
	const FORM:OrderForm = form
	const [formElementsArray,setElementsArray] = useState<FormElementsArray[]>([]);
	const [orderForm,setOrderForm] = useState<OrderForm>(FORM);
	
	useEffect(()=>{
		const _formElementsArray:FormElementsArray[]=[]
		for(let key in orderForm){
			_formElementsArray.push({
				id:key,
				config:orderForm[key]
			})
		}
		setElementsArray(_formElementsArray)
	},[orderForm])

	const orderHandler = (event:MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const formData :object = { };
		for(let formElem in orderForm){
			formData[formElem] = orderForm[formElem].value 
		};

		const order = {
            ingredients: ingredients,
            price: totalPrice,
            orderData: formData
        }
	
		onOrderBurguer(order)
	};

	const checkValidation = (value,rules) =>{
		let isValid = true
		if(rules.required) isValid= value.trim() !== '' && isValid
		if(rules.minLength) isValid = value.length >= rules.minLength && isValid
		if(rules.maxLength) isValid = value.length <= rules.maxLength && isValid
		return isValid
	}

	const onChangeHandler =(event,inputId:string) =>{
		const _form :OrderForm= {...orderForm}
		const updatedElement = {..._form[inputId]}
		updatedElement.value = event.target.value
		updatedElement.valid = checkValidation(updatedElement.value,updatedElement.validation)
		updatedElement.touched = true
		_form[inputId]=updatedElement
		setOrderForm(_form)
	}
	
	return (
		<div>
		{loading ? <Spinner/>:(<>
        	<h4 className="ContactData__label">Enter your contact data: </h4>
			<form className="ContactData__form">
				{formElementsArray.map( formElement =>(
					<Input 
					id={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					invalid={formElement.config.valid}
					touched={formElement.config.touched}
					pattern={formElement.config.pattern}
					changed={(event)=>onChangeHandler(event,formElement.id)}
					/>
				))}
				
				<Button clicked={orderHandler} btnType="success">
					ORDER
				</Button>
			</form>
            </>)}
		</div>
	);
};

const mapStateToProps = (state:{burguerConstructor:{ingredients:ingredients,totalPrice:number},order:{loading:boolean}}) =>{
	return {
		ingredients:state.burguerConstructor.ingredients,
		totalPrice:state.burguerConstructor.totalPrice,
		loading:state.order.loading
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		onOrderBurguer: (orderData)=> dispatch(actions.purchaseBuguer(orderData))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData);
