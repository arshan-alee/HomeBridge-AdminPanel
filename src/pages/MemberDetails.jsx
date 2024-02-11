import React, { useEffect, useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import SelectInputContainer from "../components/Shared/SelectInputContainer";
import { useNavigate, useParams } from "react-router-dom";
import {
  DeleteSingleData,
  EditData,
  GetSingleData,
} from "../axios/NetworkCall";
import toast from "react-hot-toast";
import formatDate from "../utils/helper";
import RequestLoader from "../components/Shared/RequestLoader";

const MemberDetails = () => {
  const memebership_level = ["일반회원", "일반회원", "일반회원", "일반회원"];
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
      const response = await EditData(`api/user/updateUser?id=${id}`, data);
      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "membership");
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
      const response = await DeleteSingleData(`api/user/deleteUser?id=${id}`);

      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "membership");
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
      const response = await GetSingleData(`/api/user?id=${id}`);
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
                  회원관리
                </p>
                {/* <hr /> */}
                <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
                <div className="py-6">
                  <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                    <InputContainer
                      text="이름"
                      name="userName"
                      value={data?.userName}
                      onChange={handleChange}
                    />
                    {/* <InputContainer
                      text="비밀번호"
                      placeholder="h12345"
                      name="password"
                      value={data?.password}
                      onChange={handleChange}
                    /> */}

                    <InputContainer
                      text="비밀번호 확인"
                      name="createdAt"
                      type="date"
                      value={formatDate(data?.createdAt)}
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
                    {/* <InputContainer
                      text="이메일"
                      name="email"
                      value={data?.email}
                      onChange={handleChange}
                    /> */}
                    <InputContainer
                      text="회원등급"
                      name="role"
                      value={data?.role}
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

export default MemberDetails;
