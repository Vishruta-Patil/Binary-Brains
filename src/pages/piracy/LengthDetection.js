import "./index.css";
import { useState, useEffect } from "react";
import { uploadImageFromForm } from "services/uploadImageSevice";
import { useBookDetails } from "context/bookDetailsContext";

export const LengthDetection = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [imagePath, setImagePath] = useState("");

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
  };

  const handleImagepreview = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

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

          {imagePath && <img style={{ width: 300 }} src={imagePath} alt="Form-bannner"/>}
        </div>
        <div className="form-btn">
          <button className="hero-btn" onClick={uplaodImage}>Next </button>
        </div>
      </div>
    </div>
  );
};
