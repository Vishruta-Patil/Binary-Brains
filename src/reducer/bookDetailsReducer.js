import { GET_ALL_BOOKS, GET_BOOK_CLASS, GET_BOOK_EDITION, GET_BOOK_NAME, GET_BOOK_LANGUAGE, GET_BOOK_HEIGHT, GET_BOOK_DIMENSION } from "./bookDetailsConstant";

export const bookDetailsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case GET_BOOK_NAME:
      return {
        ...state,
        bookName: action.payload,
      };

      case GET_BOOK_EDITION:
      return {
        ...state,
        edition: action.payload,
      };

      case GET_BOOK_CLASS:
      return {
        ...state,
        class: action.payload,
      };

      case GET_BOOK_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

      case GET_BOOK_DIMENSION:
        return {
          ...state,
          bookLength: action.payload.length,
          bookHeight: action.payload.height
        }

    
  }
};
