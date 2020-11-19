import React from 'react';
import { configure, shallow,mount } from 'enzyme';
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16';
import BurguerConstructor from './BurguerConstructor';
import BurguerController from '../../components/Burguer/BurguerController/BurguerController';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { loadIngredients } from '../../store/actions/burguerConstructor';

configure({ adapter: new Adapter() });

describe('<BurguerConstrutor />', () => {
    let wrapper;
    const middlewares = [thunk];
    const mockedStore = configureMockStore(middlewares);
    const initialState = {
        ingredients: null,
        totalPrice: 4,
        error: false,
        loading: true
    };
    const store = mockedStore({ initialState })
    
    beforeEach(() => {
        wrapper = shallow(<Provider store={store} ><BurguerConstructor onLoadIngredients={() => { }} /></Provider>)
    });

    it('should render the container', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('should render no ingredients at first', () => {
        expect(wrapper.prop('ingredients')).toBeNull;
    })

    it('should render loadIngredients ',async () => {
        const dispatchSpy = sinon.spy(store, 'dispatch')
        await store.dispatch(()=>loadIngredients())
        expect(dispatchSpy.called).toBe(true)
    })
    
    it('should return ingredients ', ()=>{
        console.log(store.getActions)
    })
})

// it('should render <BuildController /> when receiving ingredients', () => {
//     store.dispatch(loadIngredients)
//     expect(wrapper.find(Burguer)).toHaveLength(1);
// });