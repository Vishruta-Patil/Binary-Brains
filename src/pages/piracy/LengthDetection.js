import "./index.css";
import { useState, useEffect } from "react";
import { uploadImageFromForm } from "services/uploadImageSevice";


export const LengthDetection = () => {
  // let arr = []

  const [selectedFile, setSelectedFile] = useState("");
  const [imagePath, setImagePath] = useState("");

  // co-ordinate points
  const [leftOffset, setLeftOffset] = useState("");
  const [topOffset, setTopOffset] = useState("");
  const [xCoordinatePoint, setXcoordinatePoint] = useState("")
  const [yCoordinatePoint, setYcoordinatePoint] = useState("")

  const [firstpoint, setFirstpoint] = useState()
  const [secondpoint, setSecondpoint] = useState()
  const [thirdpoint, setThirdpoint] = useState()
  const [fourthpoint, setFourthpoint] = useState()

  const [whichpoint,setWhichpoint] = useState(0)

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setImagePath(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  
  const uplaodImage = async() => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "qqmoyvsb");

    const { uploadedImgUrl, public_id } = await uploadImageFromForm(formData);

    console.log({ uploadedImgUrl, public_id })

    // console.log(xCoordinatePoint, yCoordinatePoint)
    console.log(firstpoint, secondpoint, thirdpoint, fourthpoint)
    
  };

  const handleImagepreview = (e) => {
    // console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const getCordinatePoints = (e) => {
    let localArr = []
    setLeftOffset(e.target.offsetLeft);
    setTopOffset(e.target.offsetTop);

    // console.log(e.clientX - leftOffset);
    // console.log(e.clientY - topOffset);

    // setXcoordinatePoint(e.clientX - leftOffset)
    // setYcoordinatePoint(e.clientY - topOffset)

    localArr = [e.clientX - leftOffset, e.clientY - topOffset]
    
    if (whichpoint == 0){
      setFirstpoint(localArr)
    }
    else if(whichpoint ==1 ){
      setSecondpoint(localArr)
    }
    else if(whichpoint==2){
      setThirdpoint(localArr)
    }
    else if(whichpoint==3){
      setFourthpoint(localArr)
    }

    setWhichpoint(whichpoint+1)

    // arr.push(localArr)
    //setArr([...arr, localArr])
    localArr = []

    // console.log(arr)
  }

  

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
        <h1 className="font-lg">Length and width detection</h1>
        <h2 className="font-sm file-upload">Choose the file</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <input type="file" onChange={(e) => handleImagepreview(e)} />

          {imagePath && <img style={{ width: 300 }} src={imagePath} alt="Form-bannner" onClick={getCordinatePoints}/>}
        </div>
        <div className="form-btn">
          <button className="hero-btn" onClick={uplaodImage}>Next </button>
        </div>
      </div>
    </div>
  );
};
