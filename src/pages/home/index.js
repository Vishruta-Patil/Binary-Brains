import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1 className="title">
          Check How Much Authentic Is Your NCERT Book with DupliTool
        </h1>
        <p className="sub-title">
          DupiTool is the devtool which checks the authencity of the book with
          the help of piracy and plagarism tools.
        </p>

        <div className="btn-container">
          <Link to="/book-details">
            <button className="btn get-started-btn">Check Piracy</button>
          </Link>
          <Link to="/palagrism">
            <button className="btn outline-primary">Check Plagarism</button>
          </Link>
        </div>
      </div>

      <div className="hero-img">
        <img
          className="responsive-image"
          src="https://res.cloudinary.com/debanftke/image/upload/v1657799390/118_dpyfkz.png"
          alt=""
        />
      </div>
    </div>
  );
};
