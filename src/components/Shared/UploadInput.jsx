import React, { useState } from "react";
import { uploadImage } from "../../utils/helper";

const UploadInput = ({ name, value, onChange, id }) => {
  const [selectedImage, setSelectedImage] = useState(value || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = async (e) => {
    try {
      setError(null);
      setLoading(true);

      if (e.target.files && e.target.files[0]) {
        let img = e.target.files[0];
        setSelectedImage(URL.createObjectURL(img));

        // Call uploadImage function
        const imageUrl = await uploadImage(img);
        onChange(imageUrl);

        console.log("Image uploaded successfully:", imageUrl);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
      setError("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[150px] w-full  grid place-items-center bg-[#fff] rounded-md">
      {selectedImage ? (
        <div className="px-3 py-5 w-full h-full  overflow-hidden">
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-[100%] h-[100%]  object-cover"
          />
        </div>
      ) : (
        <>
          <label
            htmlFor={`file-upload/${id}`}
            className="w-[70px] h-[70px] grid place-content-center bg-[#1B254B] cursor-pointer rounded-full"
          >
            <img src="/images/upload.png" alt="Upload Icon" />
          </label>
          <input
            type="file"
            name={name}
            onChange={handleImageChange}
            id={`file-upload/${id}`}
            style={{ display: "none" }}
          />
          <label
            htmlFor="file-upload"
            className="text-[18px] font-bold text-[#1B254B] -mt-7 cursor-pointer"
          >
            이미지 등록
          </label>
        </>
      )}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default UploadInput;
