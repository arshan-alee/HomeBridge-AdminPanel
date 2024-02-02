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
import formatDate, { toDisplayFormat } from "../utils/helper";
import toast from "react-hot-toast";

const JobAndHouseSupportDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [data, setData] = useState();
  const [Error, setError] = useState();
  const [updateLoading, setUpdatetLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    setUpdatetLoading(true);
    try {
      const response = await EditData(
        `api/job_house_application/updateApplication?id=${id}`,
        data
      );
      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "job_house_support");
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
        `api/job_house_application/deleteApplication?id=${id}`
      );

      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "job_house_support");
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
        `${baseUrl}/api/job_house_application/application?id=${id}`
      );

      if (response.success) {
        setData(response.data);
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
    <div className="w-[90%]  my-12 mx-auto">
      <div className="bg-[#111C44] rounded-3xl ">
        <p className="px-7 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
          Job&House 지원 리스트
        </p>
        {/* <hr /> */}
        <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
        <div className="py-6">
          <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
            <InputContainer
              text="이름"
              name="name"
              value={data?.name}
              onChange={handleChange}
            />
            <InputContainer
              text="회원번호"
              name="_id"
              value={data?._id.toString()}
              isDisable={true}
            />
            <InputContainer
              text="성별"
              name="gender"
              value={data?.gender}
              onChange={handleChange}
            />
          </div>

          <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
            <InputContainer
              text="국적"
              name="nationality"
              value={data?.nationality}
              onChange={handleChange}
            />
            <InputContainer
              text="전화번호"
              name="phoneNumber"
              value={data?.phoneNumber}
              onChange={handleChange}
            />
            <InputContainer
              text="이메일"
              name="email"
              value={data?.email}
              onChange={handleChange}
            />
          </div>

          <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
            <InputContainer
              text="신청일자"
              name="applicationDate"
              type="date"
              value={formatDate(data?.applicationDate)}
              onChange={handleChange}
            />
          </div>

          <div className="grid py-6 px-10 text-white">
            <Textarea
              text="메시지"
              placeholder=""
              height="200px"
              rounded="50px"
              name="message"
              value={data?.message || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-auto mt-5 gap-5">
        <Button
          text="신청서수정"
          onClick={handleSubmit}
          loading={updateLoading}
        />
        <Button
          text="신청서삭제"
          onClick={handleDelete}
          loading={deleteLoading}
        />
      </div>
    </div>
  );
};

export default JobAndHouseSupportDetails;
