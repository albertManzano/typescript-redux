export default interface Form{
    elementType:string
    elementConfig: Input|Options
    value: string
    validation:{
        required:boolean
        minLength?: number
        maxLength?: number
    }
    valid:boolean
    touched:boolean
    pattern:RegExp|null
}

interface Input{
    type:string
    placeholder:string
}

interface Options{
    options:{value:string,displayValue:string}[]
}