import { createContext } from "react"

const ProductContext = createContext()

const data = [
    { id: 1, name: "cat food", desc: "great food", price: 10 },
    { id: 2, name: "cat tree", desc: "great tree", price: 20 },
    { id: 3, name: "catnip", desc: "smells great", price: 30 },
    { id: 4, name: "litter", desc: "best litter", price: 40 },
    { id: 5, name: "luxury bed", desc: "comfy bed", price: 50 }
]

//create the provider
export const ProductProvider = ({ children }) => {
    const initialState = {
        cart: [],
        Products: data
    }


    const [state, dispatch] = useReducer(productReducer, initialState);

    return <ProductContext.Provider value= {{
        //state from the usereducer
        ...state,
        dispatch,       
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext;