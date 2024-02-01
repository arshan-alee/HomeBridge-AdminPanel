import axiosInstance from ".";

export const LoginUser = async (user) => {
  try {
    const { data } = await axiosInstance.post(`user/loginAdmin`, user);
    console.log("datadata: ", data);
    return data;
  } catch (error) {
    console.log("errorerror: ", error.response);

    // return error.response.data.message;
    return error;
  }
};
export const GetAllData = async (endpoint) => {
  try {
    const { data } = await axiosInstance.get(endpoint);
    console.log("data: ", data);
    if (data?.data) {
      return { success: true, data: data.data };
    } else {
      return { success: false, message: "No data found" };
    }
  } catch (error) {
    return {
      success: false,
      message: error.response?.data.message || "An error occurred",
    };
  }
};

export const GetSingleData = async (endpoint) => {
  try {
    const { data } = await axiosInstance.get(endpoint);
    return data?.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const DeleteSingleData = async (endpoint) => {
  try {
    const { data } = await axiosInstance.delete(endpoint);
    return data?.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const PostData = async (endpoint, body) => {
  try {
    const { data } = await axiosInstance.post(endpoint, body);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const EditData = async (endpoint, body) => {
  try {
    const { data } = await axiosInstance.put(endpoint, body);
    return data;
  } catch (error) {
    console.log("error:::: ", error);
    return error.response.data.message;
  }
};
