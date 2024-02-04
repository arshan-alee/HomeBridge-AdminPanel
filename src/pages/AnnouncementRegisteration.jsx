import React, { useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";
import Textarea from "../components/Shared/Textarea";
import AddSchedule from "../components/Shared/AddSchedule";
import UploadRegisterationImage from "../components/Shared/UploadRegisterationImage";
import TextEditor from "../components/Shared/TextEditor";
import { PostData } from "../axios/NetworkCall";
import toast from "react-hot-toast";

const AnnouncementRegisteration = () => {
  const [isToggled, setIsToggled] = useState(true);
  const [uploadImages, setUploadImages] = useState([]);
  const [data, setData] = useState({
    isAccomodated: isToggled,
  });
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("handleSubmit", data);
    try {
      setLoading(true);

      const response = await PostData(
        "/api/job_house/createAnnouncement",
        data
      );

      if (response?.status) {
        toast.success(response?.message);

        setLoading(false);

        // Reset form fields
        // setData({});
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
      <div className="mx-auto w-[90%]   my-12">
        {/* Top */}
        <div className="bg-[#111C44] rounded-3xl">
          <p className="px-10 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
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
                          isToggled ? "transform translate-x-full bg-white" : ""
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
                <p className="px-10 text-white text-lg font-bold">회사명</p>

                <div className="py-6 px-10 flex flex-wrap gap-1 text-white">
                  <UploadRegisterationImage setUploadImages={setUploadImages} />
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
                </div>

                <div className="grid py-6 px-10 text-white">
                  <TextEditor
                    text="General Information"
                    placeholder=""
                    name="generationInformation"
                    value={data?.generationInformation}
                    onChange={(newContent) =>
                      handleEditorChange("generationInformation", newContent)
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
                      handleEditorChange("contractInformation", newContent)
                    }
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-7 mt-5">
          <Button text="공고등록" onClick={handleSubmit} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default AnnouncementRegisteration;

{
  /* <div className="flex items-center justify-center h-screen">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" onChange={onToggle} checked={isToggled} />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isToggled ? 'transform translate-x-full bg-blue-400' : ''}`}></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">
          {isToggled ? 'On' : 'Off'}
        </div>
      </label>
    </div> */
}
