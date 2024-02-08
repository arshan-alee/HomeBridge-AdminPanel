import React, { useEffect, useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import Textarea from "../components/Shared/Textarea";
import {
  DeleteSingleData,
  EditData,
  GetSingleData,
} from "../axios/NetworkCall";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import RequestLoader from "../components/Shared/RequestLoader";
import formatDate from "../utils/helper";

const EventApplicationDetails = () => {
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
      const response = await EditData(`api/editEventApplication/${id}`, data);
      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/event_application_list");
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
        `api/deleteEventApplication/${id}`
      );

      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/event_application_list");
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
      const response = await GetSingleData(`/api/getSingleApplication/${id}`);

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
              <div className="mx-auto w-[90%]   my-12">
                <div className="bg-[#111C44] rounded-3xl">
                  <p className="px-10 py-6 text-left text-2xl font-bold text-white uppercase tracking-wider">
                    Event 신청 정보
                  </p>
                  {/* <hr /> */}
                  <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
                  <div className="pb-6">
                    <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                      <InputContainer
                        text="이름"
                        placeholder="Kim"
                        name="name"
                        value={data?.name}
                        onChange={handleChange}
                      />
                      <InputContainer
                        text="회원번호"
                        placeholder="h12345"
                        name="_id"
                        value={data?._id.toString()}
                        isDisable={true}
                      />
                      <InputContainer
                        text="전화번호"
                        placeholder="02-1111-1111"
                        name="phoneNumber"
                        value={data?.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                      <InputContainer
                        text="신청일자"
                        placeholder="2023.11.04  14:32"
                        type="date"
                        name="applicationDate"
                        value={formatDate(data?.applicationDate)}
                        onChange={handleChange}
                      />
                      <InputContainer
                        text="이메일"
                        placeholder="test@gmail.com"
                        type="email"
                        name="email"
                        value={data?.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                      <div className="col-span-2">
                        <InputContainer
                          text="이벤트"
                          placeholder="[New year's sunrise] Yeosu Hyangilam Sunrise with Jeolla-do delicacies, Suncheon Jeonju "
                          name="productIntroduction"
                          value={data?.event?.productIntroduction}
                          isDisable={true}
                        />
                      </div>
                      <InputContainer
                        text="이벤트상품번호"
                        placeholder="e12345678"
                        name="id"
                        value={data?.event?._id.toString()}
                        isDisable={true}
                      />
                    </div>

                    <div className="grid py-6 px-10 text-white">
                      <Textarea
                        text="메시지"
                        placeholder="hello"
                        height="200px"
                        rounded="50px"
                        name="message"
                        value={data?.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-7 mt-5">
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
            </>
          )}
        </>
      )}
    </>
  );
};

export default EventApplicationDetails;
