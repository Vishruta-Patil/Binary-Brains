import "./index.css";
import {Link} from "react-router-dom"
import { useBookDetails } from "context/bookDetailsContext";
import { GET_BOOK_CLASS, GET_BOOK_EDITION, GET_BOOK_LANGUAGE, GET_BOOK_NAME } from "reducer/bookDetailsConstant";

export const BookDetails = () => {
  const {bookDetailDispatch} = useBookDetails()
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
          <select className="font-sm" onChange={(e) => bookDetailDispatch({type:GET_BOOK_NAME, payload: e.target.value})}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </div>
        <br />
        <div className="form-unit-box">
          <span className="material-icons icon right-arrow-icon">
            {" "}
            double_arrow{" "}
          </span>
          <label className="form-label">Edition of Selected Book</label>
          <select className="font-sm"  onChange={(e) => bookDetailDispatch({type:GET_BOOK_EDITION, payload: e.target.value})}>
          <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </div>{" "}
        <br />
        <div className="form-unit-box">
          <span className="material-icons icon right-arrow-icon">
            {" "}
            double_arrow{" "}
          </span>
          <label className="form-label">Class</label>
          <select className="font-sm" onChange={(e) => bookDetailDispatch({type:GET_BOOK_CLASS, payload: e.target.value})}>
          <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </div>{" "}
        <br />
        <div className="form-unit-box">
          <span className="material-icons icon right-arrow-icon">
            {" "}
            double_arrow{" "}
          </span>
          <label className="form-label">Language</label>
          <select className="font-sm" onChange={(e) => bookDetailDispatch({type:GET_BOOK_LANGUAGE, payload: e.target.value})}>
          <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
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
