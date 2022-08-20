import "./index.css";

export const Piracy = () => {
  return (
    <div className="piracy-form-container">
      <div className="banner-container">
        <img
            className="form-img"
          src="https://res.cloudinary.com/debanftke/image/upload/v1660913565/Blue_Gold_Rustic_Artisinal_Remote_Graduation_Yard_Sign_uxcj81.png"
          alt=""
        />
      </div>
      <div className="form-content-container">
        <div className="form-unit-box">
        <span className="material-icons icon right-arrow-icon"> double_arrow </span>
          <label className="form-label">Name of book </label>
          <select className="font-sm">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
        </div>

        <br/>

        <div className="form-unit-box">
            <span className="material-icons icon right-arrow-icon"> double_arrow </span>
          <label className="form-label">Edition of Selected Book</label>
          <select className="font-sm">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
        </div> <br/>

        <div className="form-unit-box">
            <span className="material-icons icon right-arrow-icon"> double_arrow </span>
          <label className="form-label">Class</label>
          <select className="font-sm">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
        </div> <br/>

        <div className="form-unit-box">
            <span className="material-icons icon right-arrow-icon"> double_arrow </span>
          <label className="form-label">Language</label>
          <select className="font-sm">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
        </div>

<div className="form-btn">
        <button className="hero-btn">Next </button>
      </div>
      </div>
    </div>
  );
};
