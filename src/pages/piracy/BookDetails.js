import "./index.css";
import { Link } from "react-router-dom";
import { useBookDetails } from "context/bookDetailsContext";
import {
  GET_BOOK_CLASS,
  GET_BOOK_EDITION,
  GET_BOOK_LANGUAGE,
  GET_BOOK_NAME,
} from "reducer/bookDetailsConstant";

import { getAllBooks } from "services/booksService";
import { useEffect, useState } from "react";

export const BookDetails = () => {
  const { bookDetailState, bookDetailDispatch } = useBookDetails();
  const {books} = bookDetailState
  const [bookData, setBookData] = useState([])

  useEffect(() => {
    const updatedBookArray = books.filter(book => book.name === "Book 2")
    console.log(updatedBookArray)
    setBookData(updatedBookArray[0])
  }, [])

  const bookDataUpdate = (e) => {
    bookDetailDispatch({
      type: GET_BOOK_NAME,
      payload: e.target.value,
    })
    
    const updatedBookArray = books.filter(book => book.name === e.target.value)
    console.log(updatedBookArray)
    setBookData(updatedBookArray[0])
  }

  return (
    <div className="piracy-form-container">
      <div className="banner-container">
        <img
          className="form-img"
          src="https://res.cloudinary.com/debanftke/image/upload/v1660913565/Blue_Gold_Rustic_Artisinal_Remote_Graduation_Yard_Sign_uxcj81.png"
          alt="Form-banner"
        />
      </div>
      <div className="form-content-container">
        <div className="form-unit-box">
          <span className="material-icons icon right-arrow-icon">
            {" "}
            double_arrow{" "}
          </span>
          <label className="form-label">Name of book </label>
          <select
            className="font-sm"
            onChange={(e) =>
              bookDataUpdate(e)
            }
          >
            {books.map((book) => (
              <option value={book.name}>{book.name}</option>
            ))}
            
          </select>
        </div>
        <br />
        <div className="form-unit-box">
          <span className="material-icons icon right-arrow-icon">
            {" "}
            double_arrow{" "}
          </span>
          <label className="form-label">Edition of Selected Book</label>
          <select
            className="font-sm"
            onChange={(e) =>
              bookDetailDispatch({
                type: GET_BOOK_EDITION,
                payload: e.target.value,
              })
            }
          >
            {bookData?.edition?.map((edition) => (
              <option value={edition}>{edition}</option>
            ))}
          </select>
        </div>{" "}
        <br />
        <div className="form-unit-box">
          <span className="material-icons icon right-arrow-icon">
            {" "}
            double_arrow{" "}
          </span>
          <label className="form-label">Class</label>
          <select
            className="font-sm"
            onChange={(e) =>
              bookDetailDispatch({
                type: GET_BOOK_CLASS,
                payload: e.target.value,
              })
            }
          >
            {bookData?.class?.map((bookclass) => (
              <option value={bookclass}>{bookclass}</option>
            ))}
          </select>
        </div>{" "}
        <br />
        <div className="form-unit-box">
          <span className="material-icons icon right-arrow-icon">
            {" "}
            double_arrow{" "}
          </span>
          <label className="form-label">Language</label>
          <select
            className="font-sm"
            onChange={(e) =>
              bookDetailDispatch({
                type: GET_BOOK_LANGUAGE,
                payload: e.target.value,
              })
            }
          >
            {bookData?.langauage?.map((language) => (
              <option value={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="form-btn">
          <Link to="/length-width-detection">
            <button className="hero-btn">Next </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
