import React, { useEffect, useState } from "react";
import InputContainer from "../components/Shared/InputContainer";
import Button from "../components/Shared/Button";
import { useNavigate, useParams } from "react-router";
import {
  DeleteSingleData,
  EditData,
  GetSingleData,
} from "../axios/NetworkCall";
import toast from "react-hot-toast";
import formatDate from "../utils/helper";
import RequestLoader from "../components/Shared/RequestLoader";

const RefundDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [data, setData] = useState();
  const [Error, setError] = useState();
  const [updateLoading, setUpdatetLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the change is for a property within the nested `eventApplication` object
    if (name.startsWith("eventApplication.")) {
      const nestedFieldName = name.split(".")[1]; // Get the field name within eventApplication
      setData((prevValue) => ({
        ...prevValue,
        eventApplication: {
          ...prevValue.eventApplication,
          [nestedFieldName]: value,
        },
      }));
    } else {
      // Handle changes for non-nested fields
      setData((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    setUpdatetLoading(true);
    try {
      const response = await EditData(
        `api/refund/updateRefundRequest?id=${id}`,
        data
      );
      if (response?.status) {
        toast.success(response?.message);

        navigate("/admin/" + "refund");
      } else {
        toast.error(response?.message);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdatetLoading(false);
    }
  };

  const getData = async () => {
    try {
      setLoader(true);
      const response = await GetSingleData(
        `/api/refund/singleRefundRequest?id=${id}`
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
                  회원관리
                </p>
                {/* <hr /> */}
                <div className="border-b-[1px] border-[#ffffff1a] bg-[#111C44]"></div>
                <div className="py-6">
                  <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                    <InputContainer
                      text="결제번호"
                      name="_id"
                      isDisable
                      value={data?._id}
                    />
                    <InputContainer
                      text="회원번호"
                      name="user"
                      isDisable
                      value={data?.user}
                    />
                    <InputContainer
                      text="상품번호"
                      name="productNumber"
                      isDisable
                      value={data?.event?._id}
                    />
                  </div>

                  <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                    <InputContainer
                      text="상품가격"
                      name="productPrice"
                      isDisable
                      value={data?.refundAmount}
                    />
                    <InputContainer
                      text="결제수단"
                      name="paymentMethod"
                      isDisable
                      value={data?.eventApplication?.paymentMethod}
                    />

                    <InputContainer
                      text="결제일자"
                      name="paymentDate"
                      type="date"
                      value={formatDate(
                        data?.eventApplication?.applicationDate
                      )}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="py-6 px-10 grid grid-cols-3 gap-16 text-white">
                    <InputContainer
                      text="결제상태"
                      name="eventApplication.paymentStatus" // Indicate that this field is nested within eventApplication
                      value={data?.eventApplication?.paymentStatus}
                      onChange={handleChange}
                    />

                    <InputContainer
                      text="환불일자"
                      name="refundDate"
                      type="date"
                      value={formatDate(data?.refundDate) || ""}
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
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default RefundDetails;
