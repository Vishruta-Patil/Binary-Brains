const { createContext, useContext, useReducer } = require("react");
const { bookDetailsReducer } = require("reducer/bookDetailsReducer");

const BookDetailsContext = createContext()
const useBookDetails = () => useContext(BookDetailsContext)

const initialValue = {
    bookName:"option 1",
    edition:"option 1",
    class: "option 1",
    language: "option 1",
    bookImageURL: ""
}

const BookDetailsProvider = ({children}) => {
    const [bookDetailState, bookDetailDispatch] = useReducer(bookDetailsReducer, initialValue)
    return (
        <BookDetailsContext.Provider value={{bookDetailState, bookDetailDispatch}}>
            {children}
        </BookDetailsContext.Provider>
    )
}

export {useBookDetails, BookDetailsProvider}

