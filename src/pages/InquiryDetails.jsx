import React, { useEffect, useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import Textarea from "../components/Shared/Textarea";
import { useNavigate, useParams } from "react-router";
import {
  DeleteSingleData,
  EditData,
  GetSingleData,
} from "../axios/NetworkCall";
import toast from "react-hot-toast";
import formatDate from "../utils/helper";
import RequestLoader from "../components/Shared/RequestLoader";

const InquiryDetails = () => {
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
        `api/inquiry/updateInquiry?id=${id}`,
        data
      );
      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "inquiry");
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
        `api/inquiry/deleteInquiry?id=${id}`
      );

      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "inquiry");
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
        `/api/inquiry/singleInquiry?id=${id}`
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
    <div>
      {loader ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <RequestLoader size="large" />
        </div>
      ) : (
        <>
          {Error ? (
            <div className="text-black text-center ">{Error}</div>
          ) : (
            <form className="w-[90%]  my-12 mx-auto">
              <div className="bg-[#111C44] rounded-3xl ">
                <p className="px-7 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
                  Event 신청 정보
                </p>
                {/* <hr /> */}
                <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
                <div className="py-6">
                  <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                    <InputContainer
                      text="First Name(성)"
                      name="firstName"
                      value={data?.firstName}
                      onChange={handleChange}
                    />
                    <InputContainer
                      text="Last Name(이름)"
                      name="lastName"
                      value={data?.lastName}
                      onChange={handleChange}
                    />
                    <InputContainer
                      text="전화번호"
                      name="phoneNumber"
                      value={data?.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                    <InputContainer
                      text="이메일"
                      name="email"
                      value={data?.email}
                      onChange={handleChange}
                    />
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
                  text="회원수정"
                  onClick={handleSubmit}
                  loading={updateLoading}
                />
                <Button
                  text="회원삭제"
                  onClick={handleDelete}
                  loading={deleteLoading}
                />
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default InquiryDetails;
