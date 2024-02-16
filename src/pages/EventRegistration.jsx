import React, { useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import AddSchedule from "../components/Shared/AddSchedule";
import TextEditor from "../components/Shared/TextEditor";
import { PostData } from "../axios/NetworkCall";
import toast from "react-hot-toast";
import { isDateGreaterThanToday } from "../utils/helper";
import UploadRegisterationImage from "../components/Shared/UploadRegisterationImage";
import { useNavigate } from "react-router-dom";

const validateFormData = (data) => {
  const requiredFields = [
    "productIntroduction",
    "deadline",
    "departure",
    "arrival",
    "price",
    "traffic",
    "productInformation",
  ];

  const emptyFields = requiredFields.filter((field) => !data[field]);
  if (emptyFields.length > 0) {
    toast.error(
      `Please fill in the following fields: ${emptyFields.join(", ")}`
    );
    return false; // Indicates validation failed
  }

  const dateFields = ["deadline", "departure", "arrival"];
  const invalidDateFields = dateFields.filter(
    (field) => data[field] && !isDateGreaterThanToday(data[field])
  );

  if (invalidDateFields.length > 0) {
    toast.error(
      `The following dates must be in the future: ${invalidDateFields.join(
        ", "
      )}`
    );
    return false; // Indicates validation failed
  }

  return true; // Indicates validation passed
};

const EventRegistration = () => {
  const navigate = useNavigate();
  const [uploadImages, setUploadImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    productIntroduction: "",
    productInformation: "",
    deadline: "",
    departure: "",
    arrival: "",
    price: "",
    traffic: "",
    schedules: [
      // {
      //   scheduleIntroduction: "",
      //   daySchedules: [
      //     {
      //       detailedSchedule: "",
      //       scheduleImage: "",
      //       dayScheduleInfo: "",
      //     },
      //   ],
      // },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleEditorChange = (key, newContent) => {
    setData((prevValue) => ({
      ...prevValue,
      [key]: newContent,
    }));
  };

  const addSchedule = () => {
    setData((prevValue) => ({
      ...prevValue,
      schedules: [...prevValue.schedules, {}],
    }));
  };

  const removeSchedule = (index) => {
    setData((prevValue) => ({
      ...prevValue,
      schedules: prevValue.schedules.filter((_, i) => i !== index),
    }));
  };

  const handleScheduleChange = (index, scheduleData) => {
    setData((prevValue) => {
      const updatedSchedules = [...prevValue.schedules];
      updatedSchedules[index] = scheduleData;
      return {
        ...prevValue,
        schedules: updatedSchedules,
      };
    });
  };

  const removeImage = (index) => {
    setUploadImages((currentImages) =>
      currentImages.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormData(data)) {
      // If validation fails, stop the form submission
      return;
    }

    try {
      setLoading(true);

      const response = await PostData("/api/eventRegistration", {
        ...data,
        eventImages: uploadImages,
      });

      if (response?.status) {
        toast.success(response?.message);

        setLoading(false);
        navigate("/admin/event_list");

        // Reset form fields
        setData({
          productIntroduction: "",
          deadline: "",
          departure: "",
          arrival: "",
          price: "",
          traffic: "",
          productInformation: "",
          schedules: [],
        });
        setUploadImages([]);
      } else {
        toast.error(response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="mx-auto w-[90%]   my-12">
        {/* Top */}
        <div className="bg-[#111C44] rounded-3xl">
          <p className="px-10 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
            Event 공고
          </p>
          {/* <hr /> */}
          <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
          <div className="pb-20">
            <div className="py-6 px-10 grid gap-16 text-white">
              <InputContainer
                text="상품소개"
                placeholder="[New year's sunrise] Yeosu Hyangilam Sunrise with Jeolla-do delicacies, Suncheon Jeonju 1 night 2 days"
                name="productIntroduction"
                value={data?.productIntroduction}
                onChange={handleChange}
              />
            </div>

            <div className="pt-6">
              <p className="text-[20px] text-[#fff] px-10">
                Event Information:
              </p>
              <div className="py-6 px-10 grid grid-cols-3 gap-10 text-white">
                <InputContainer
                  text="Departure"
                  placeholder="2023.12.30(토) 07:00"
                  type="datetime-local"
                  name="departure"
                  value={data?.departure}
                  onChange={handleChange}
                />
                <InputContainer
                  text="Arrival"
                  placeholder="2023.12.31(일) 19:00"
                  type="datetime-local"
                  name="arrival"
                  value={data?.arrival}
                  onChange={handleChange}
                />
                <InputContainer
                  text="Price"
                  placeholder="199,000"
                  type="number"
                  name="price"
                  value={data?.price}
                  onChange={handleChange}
                />
                <InputContainer
                  text="Deadline"
                  placeholder="2023.12.31(일) 19:00"
                  type="datetime-local"
                  name="deadline"
                  value={data?.deadline}
                  onChange={handleChange}
                />
                <InputContainer
                  text="traffic"
                  placeholder="버스"
                  type="text"
                  name="traffic"
                  value={data?.traffic}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="py-6">
              {/* Upload Image Container */}
              <p className="px-10 text-white text-lg">Event Images</p>

              <div className="py-6 px-10 flex flex-wrap gap-4 text-white">
                <UploadRegisterationImage
                  setUploadImages={setUploadImages}
                  text="숙소이미지 등록"
                />
                {uploadImages &&
                  uploadImages.map((item, index) => (
                    <div
                      key={index}
                      className="w-24 h-24 relative border overflow-hidden rounded-lg shadow-lg"
                    >
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-gray-200 text-gray-800 p-1 rounded-full hover:bg-gray-400 hover:text-white "
                        style={{ zIndex: 10 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <img
                        src={item}
                        alt={`upload-preview-${index}`}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="grid py-6 px-10 text-white">
              <TextEditor
                text="Product Information"
                placeholder=""
                name="productInformation"
                onChange={(newContent) =>
                  handleEditorChange("productInformation", newContent)
                }
                value={data?.productInformation}
              />
            </div>
          </div>
        </div>

        {/* Schedules */}
        {data?.schedules.map((schedule, index) => (
          <AddSchedule
            key={index}
            index={index}
            schedule={schedule}
            removeSchedule={() => removeSchedule(index)}
            onChange={handleScheduleChange}
          />
        ))}

        {/* Schdeule Button */}
        <div
          onClick={addSchedule}
          className="bg-[#111C44] cursor-pointer rounded-3xl mt-4 flex w-full justify-center items-center gap-4 text-[32px] text-[#fff] font-bold py-6 px-10"
        >
          일정 추가하기
          <img src="/images/add_icon.png" alt="logo" />
        </div>

        <div className="flex justify-end gap-7 mt-5">
          <Button text="공고등록" onClick={handleSubmit} loading={loading} />
        </div>
      </form>
    </>
  );
};

export default EventRegistration;
