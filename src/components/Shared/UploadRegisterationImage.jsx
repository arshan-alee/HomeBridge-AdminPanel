import React, { useState } from "react";
import { uploadImage } from "../../utils/helper";
import RequestLoader from "./RequestLoader";

const UploadRegisterationImage = ({ setUploadImages, text }) => {
  const [selectedImage, setSelectedImage] = useState(null);
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

        setUploadImages((prevData) => [...prevData, imageUrl]);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
      setError("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[170px] w-[180px] grid place-items-center bg-[#fff] rounded-md mr-5">
      {loading ? (
        <RequestLoader size="large" />
      ) : (
        <>
          <label
            htmlFor="file-upload-registration"
            className="w-[70px] h-[70px] grid place-content-center bg-[#1B254B] cursor-pointer rounded-full"
          >
            <img src="/images/upload.png" alt="Upload Icon" />
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            id="file-upload-registration"
            style={{ display: "none" }}
          />
          <label
            htmlFor="file-upload-registration"
            className="text-[18px] font-bold text-[#1B254B] -mt-7 cursor-pointer"
          >
            {text}
          </label>
        </>
      )}
    </div>
  );
};

export default UploadRegisterationImage;
