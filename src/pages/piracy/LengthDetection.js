import "./index.css";
import { useState, useEffect } from "react";
import { uploadImageFromForm } from "services/uploadImageSevice";
import { toast } from "react-toastify";
import { getLengthWidth } from "services/lengthWidthService";
import { useBookDetails } from "context/bookDetailsContext";
import { GET_BOOK_DIMENSION } from "reducer/bookDetailsConstant";
import { Link } from "react-router-dom";

export const LengthDetection = () => {
  // let arr = []
  const { bookDetailState, bookDetailDispatch } = useBookDetails();

  const [selectedFile, setSelectedFile] = useState("");
  const [imagePath, setImagePath] = useState("");

  // co-ordinate points
  const [leftOffset, setLeftOffset] = useState("");
  const [topOffset, setTopOffset] = useState("");
  const [xCoordinatePoint, setXcoordinatePoint] = useState("");
  const [yCoordinatePoint, setYcoordinatePoint] = useState("");

  const [firstpoint, setFirstpoint] = useState();
  const [secondpoint, setSecondpoint] = useState();
  const [thirdpoint, setThirdpoint] = useState();
  const [fourthpoint, setFourthpoint] = useState();

  const [whichpoint, setWhichpoint] = useState(0);

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setImagePath(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const uplaodImage = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "qqmoyvsb");
    const { uploadedImgUrl, public_id } = await uploadImageFromForm(formData);
    console.log({ uploadedImgUrl, public_id });
    const imgUrl = uploadedImgUrl;
    const coOrdinates = [firstpoint, secondpoint, thirdpoint, fourthpoint];
    const res = await getLengthWidth(imgUrl, coOrdinates);
    console.log(res.data.length)
    bookDetailDispatch({type: GET_BOOK_DIMENSION, payload: {length: res.data.length, height: res.data.width}})
  };

  const handleImagepreview = (e) => {
    // console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const getCordinatePoints = (e) => {
    let localArr = [];
    setLeftOffset(e.target.offsetLeft);
    setTopOffset(e.target.offsetTop);

    localArr = [e.clientX - leftOffset, e.clientY - topOffset];

    if (whichpoint === 0) {
      setFirstpoint(localArr);
    } else if (whichpoint === 1) {
      setSecondpoint(localArr);
    } else if (whichpoint === 2) {
      setThirdpoint(localArr);
    } else if (whichpoint === 3) {
      setFourthpoint(localArr);
    }

    setWhichpoint(whichpoint + 1);
    toast.success(`Point ${whichpoint + 1} is alloted`);
    localArr = [];
  };

  return (
    <div className="piracy-form-container">
      {/* <h1>{bookDetailState?.bookLength}</h1>
      <h1>{bookDetailState?.bookHeight}</h1> */}
      <div className="banner-container">
        <img
          className="form-img"
          src="https://res.cloudinary.com/debanftke/image/upload/v1660913565/Blue_Gold_Rustic_Artisinal_Remote_Graduation_Yard_Sign_uxcj81.png"
          alt=""
        />
      </div>
      <div className="form-content-container">
        <h1 className="font-lg">Length and width detection</h1>
        <h2 className="font-sm file-upload">Choose the file</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <input type="file" onChange={(e) => handleImagepreview(e)} />

          {imagePath && (
            <img
              style={{ width: 300 }}
              src={imagePath}
              alt="Form-bannner"
              onClick={getCordinatePoints}
            />
          )}
        </div>
        <div className="form-btn">
          <Link to="/cover-backpage-detection">
          <button className="hero-btn" onClick={uplaodImage}>
            Next{" "}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
