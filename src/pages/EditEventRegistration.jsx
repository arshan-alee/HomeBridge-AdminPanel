import React, { useEffect, useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import AddSchedule from "../components/Shared/AddSchedule";
import TextEditor from "../components/Shared/TextEditor";
import {
  DeleteSingleData,
  EditData,
  GetSingleData,
  PostData,
} from "../axios/NetworkCall";
import toast from "react-hot-toast";
import formatDate, {
  convertToLocalDateTime,
  isDateGreaterThanToday,
} from "../utils/helper";
import UploadRegisterationImage from "../components/Shared/UploadRegisterationImage";
import { useNavigate, useParams } from "react-router-dom";
import RequestLoader from "../components/Shared/RequestLoader";

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

const EditEventRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [uploadImages, setUploadImages] = useState([]);
  const [loader, setLoader] = useState();
  const [data, setData] = useState({});
  const [Error, setError] = useState();
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  console.log("data---------------------->");
  console.log(data);

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

  const handleSubmit = async () => {
    setUpdateLoading(true);
    try {
      const response = await EditData(`/api/editEventRegistration/${id}`, {
        ...data,
        eventImages: uploadImages,
      });
      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/event_list");
      } else {
        toast.error(response?.message);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const response = await DeleteSingleData(
        `/api/deleteEventRegistration/${id}`
      );

      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/event_list");
      } else {
        toast.error(response);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  const getData = async () => {
    try {
      setLoader(true);
      const response = await GetSingleData(`/api/getSingleEvent/${id}`);

      if (response.success) {
        setData(response.data);
        setUploadImages(response.data.eventImages);
      } else {
        setError(response.message);
      }
    } catch (err) {
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loader ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <RequestLoader size="large" />
        </div>
      ) : (
        <>
          {Error ? (
            <div className="w-full h-[60vh] flex items-center justify-center">
              <h1 className="text-black text-center ">{Error}</h1>
            </div>
          ) : (
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

                    <div className="py-6 px-10 grid gap-16 text-white">
                      <InputContainer
                        text="제품 설명"
                        placeholder="Best natural scenery, accommodation with a panoramic view of the sea"
                        name="productDescription"
                        value={data?.productDescription}
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
                          value={convertToLocalDateTime(data?.departure)}
                          onChange={handleChange}
                        />
                        <InputContainer
                          text="Arrival"
                          placeholder="2023.12.31(일) 19:00"
                          type="datetime-local"
                          name="arrival"
                          value={convertToLocalDateTime(data?.arrival)}
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
                          value={convertToLocalDateTime(data?.deadline)}
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
                      <p className="px-10 text-white text-lg">Event Images</p>

                      {/* <div className="py-6 px-10 flex flex-wrap gap-1 text-white">
                        <UploadRegisterationImage
                          setUploadImages={setUploadImages}
                          text="이벤트 이미지 등록
"
                        />
                        {data?.eventImages &&
                          data?.eventImages.map((item, index) => (
                            <div
                              key={index}
                              className="w-24 h-24 relative border overflow-hidden"
                            >
                              <img
                                src={item}
                                alt={`upload-preview-${index}`}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          ))}
                      </div> */}

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
                {data?.schedules &&
                  data?.schedules.length > 0 &&
                  data?.schedules.map((schedule, index) => (
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

                <div className="flex justify-end mx-auto mt-5 gap-5">
                  <Button
                    text="이벤트수정"
                    onClick={handleSubmit}
                    loading={updateLoading}
                  />
                  <Button
                    text="이벤트삭제"
                    onClick={handleDelete}
                    loading={deleteLoading}
                  />
                </div>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
};

export default EditEventRegistration;
