import { GET_BOOK_CLASS, GET_BOOK_EDITION, GET_BOOK_NAME, GET_BOOK_LANGUAGE } from "./bookDetailsConstant";

export const bookDetailsReducer = (state, action) => {
  switch (action.type) {
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

    
  }
};
