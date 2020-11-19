const form = {
    name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your name'
        },
        value: '',
        validation:{
            required: true
        },
        valid:false,
        touched:false,
        pattern: /[a-zA-Z]/
    },
    street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Street'
        },
        value: '',
        validation:{
            required: true
        },
        valid:false,
        touched:false,
        pattern: /^\s*\S+(?:\s+\S+){2}/
    },
    zipCode: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'ZIP Code'
        },
        value: '',
        validation:{
            required: true,
            minLength: 5,
            maxLength:5
        },
        valid:false,
        touched:false,
        pattern: /^[0-9]/
    },
    country: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Country'
        },
        value: '',
        validation:{
            required: true
        },
        valid:false,
        touched:false,
        pattern:/[a-zA-Z]/
    },
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your E-M@il'
        },
        value: '',
        validation:{
            required: true
        },
        valid:false,
        touched:false,
        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    },
    deliveryMethod: {
        elementType: 'select',
        elementConfig: {options:[{value:'fastest',displayValue:'Fastest'},{value:'cheapest',displayValue:'Cheapest'}]},
        value: 'fastest',
        validation:{
            required: true
        },
        valid:true,
        touched:false,
        pattern: null
    }
}

export default form