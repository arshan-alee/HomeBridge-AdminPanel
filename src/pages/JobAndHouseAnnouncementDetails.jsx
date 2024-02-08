import React, { useEffect, useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import Textarea from "../components/Shared/Textarea";
import { useNavigate, useParams } from "react-router-dom";
import {
  DeleteSingleData,
  EditData,
  GetSingleData,
} from "../axios/NetworkCall";
import baseUrl from "../utils/baseUrl";
import formatDate from "../utils/helper";
import toast from "react-hot-toast";
import RequestLoader from "../components/Shared/RequestLoader";
import TextEditor from "../components/Shared/TextEditor";
import UploadRegisterationImage from "../components/Shared/UploadRegisterationImage";

const JobAndHouseAnnouncementDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [data, setData] = useState();
  const [Error, setError] = useState();
  const [updateLoading, setUpdatetLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
  const [uploadImages, setUploadImages] = useState([]);
  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleEditorChange = (key, newContent) => {
    setData((prevValue) => ({
      ...prevValue,
      [key]: newContent,
    }));
  };

  const removeImage = (index) => {
    setUploadImages((currentImages) =>
      currentImages.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async () => {
    setUpdatetLoading(true);

    const updatedData = {
      ...data,
      jobHouseimages: uploadImages,
      isAccomodated: isToggled,
    };

    try {
      const response = await EditData(
        `api/job_house/updateAnnouncement?id=${id}`,
        updatedData
      );
      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "job_house_announcement");
      } else {
        toast.error(response?.message);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdatetLoading(false);
    }
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const response = await DeleteSingleData(
        `api/job_house/deleteAnnouncement?id=${id}`
      );

      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "job_house_announcement");
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
      const response = await GetSingleData(
        `${baseUrl}/api/job_house/announcement?id=${id}`
      );

      if (response.success) {
        console.log("response: ", response.data);
        setData(response.data);
        setUploadImages(response.data.jobHouseimages);
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
    <div>
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
            <div className="w-[90%]  my-12 mx-auto">
              <div className="bg-[#111C44] rounded-3xl ">
                <p className="px-7 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
                  JOB&House 공고
                </p>
                {/* <hr /> */}
                <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
                <div className="pb-20">
                  <div className="py-6 px-10 grid grid-cols-2 gap-16 text-white">
                    <InputContainer
                      text="공고명"
                      placeholder="Kim"
                      name="announcementName"
                      value={data?.announcementName}
                      onChange={handleChange}
                    />
                    <InputContainer
                      text="회사명"
                      placeholder="h12345"
                      name="companyName"
                      value={data?.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="py-6 px-10 grid grid-cols-2 gap-16 text-white">
                    <InputContainer
                      text="샐러리"
                      placeholder="2,000,000/m"
                      name="salary"
                      value={data?.salary}
                      onChange={handleChange}
                    />
                    <InputContainer
                      text="임차료"
                      placeholder="100,000/m"
                      name="rent"
                      value={data?.rent}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid py-6 px-10 text-white">
                    <TextEditor
                      text="JOB INFO"
                      placeholder=""
                      name="jobInfo"
                      value={data?.jobInfo}
                      onChange={(newContent) =>
                        handleEditorChange("jobInfo", newContent)
                      }
                    />
                  </div>
                  <div className="grid py-6 px-10 text-white">
                    <TextEditor
                      text="Salary & Fringe benefits"
                      placeholder=""
                      name="salaryBenefit"
                      value={data?.salaryBenefit}
                      onChange={(newContent) =>
                        handleEditorChange("salaryBenefit", newContent)
                      }
                    />
                  </div>
                  <div className="grid py-6 px-10 text-white">
                    <TextEditor
                      text="JOB DETAILS"
                      placeholder=""
                      name="jobDetails"
                      value={data?.jobDetails}
                      onChange={(newContent) =>
                        handleEditorChange("jobDetails", newContent)
                      }
                    />
                  </div>

                  {/* Toggle Container */}
                  <div className="text-white px-10 flex flex-row items-center gap-8">
                    <p className="text-2xl font-bold">숙소등록여부</p>
                    <div>
                      <div className="flex items-center justify-center ">
                        <label
                          htmlFor="toggleB"
                          className="flex items-center cursor-pointer"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              id="toggleB"
                              className="sr-only"
                              onChange={onToggle}
                              checked={isToggled}
                            />
                            <div
                              className={`block ${
                                isToggled ? "bg-[#7551FF]" : "bg-gray-600"
                              } w-12 h-7 rounded-full`}
                            ></div>
                            <div
                              className={`dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition ${
                                isToggled
                                  ? "transform translate-x-full bg-white"
                                  : ""
                              }`}
                            ></div>
                          </div>
                          <div className="ml-3 text-sm font-bold">
                            {isToggled ? "숙소정보 등록" : "숙소정보 미등록"}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Show toggled items */}
                  {isToggled && (
                    <>
                      <div className="py-6 px-10 w-[50%] text-white">
                        <InputContainer
                          text="공고명"
                          placeholder="Kim"
                          name="accomodationName"
                          value={data?.accomodationName}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Upload Image Container */}
                      <p className="px-10 text-white text-lg font-bold">
                        회사명
                      </p>

                      {/* <div className="py-6 px-10 flex flex-wrap gap-1 text-white">
                        <UploadRegisterationImage
                          setUploadImages={setUploadImages}
                        />
                        {uploadImages &&
                          uploadImages.map((item, index) => (
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
                                className="absolute top-1 right-1 bg-gray-200 text-gray-800 p-1 rounded-full hover:bg-gray-400 hover:text-white"
                                style={{ zIndex: 10 }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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

                      <div className="grid py-6 px-10 text-white">
                        <TextEditor
                          text="General Information"
                          placeholder=""
                          name="generationInformation"
                          value={data?.generationInformation}
                          onChange={(newContent) =>
                            handleEditorChange(
                              "generationInformation",
                              newContent
                            )
                          }
                        />
                      </div>
                      <div className="grid py-6 px-10 text-white">
                        <TextEditor
                          text="Explanation"
                          placeholder=""
                          name="explanation"
                          value={data?.explanation}
                          onChange={(newContent) =>
                            handleEditorChange("explanation", newContent)
                          }
                        />
                      </div>
                      <div className="grid py-6 px-10 text-white">
                        <TextEditor
                          text="External Features"
                          placeholder=""
                          name="externalFeatures"
                          value={data?.externalFeatures}
                          onChange={(newContent) =>
                            handleEditorChange("externalFeatures", newContent)
                          }
                        />
                      </div>
                      <div className="grid py-6 px-10 text-white">
                        <TextEditor
                          text="Contract information"
                          placeholder=""
                          name="contractInformation"
                          value={data?.contractInformation}
                          onChange={(newContent) =>
                            handleEditorChange(
                              "contractInformation",
                              newContent
                            )
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex justify-end mx-auto mt-5 gap-5">
                <Button
                  text="공고수정"
                  onClick={handleSubmit}
                  loading={updateLoading}
                />
                <Button
                  text="공고삭제"
                  onClick={handleDelete}
                  loading={deleteLoading}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default JobAndHouseAnnouncementDetails;
