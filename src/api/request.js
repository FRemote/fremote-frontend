// import request from "@/utils/fhack";

/**
 * GET method
 */
export const getListRequest = async () => {
  await fetch(
    `http://a3e162c5.ngrok.io/back-end/requests?currPage=1&pageSize=10`
  )
    .then(res => res.json())
    .then(data => {
      return data.data;
    });
};

export const getRequestDetail = async id => {
  await fetch(`http://a3e162c5.ngrok.io/back-end/getRequestById?id=${id}`).then(
    res => {
      return res.json();
    }
  );
};

export const getListWorkingToday = () => {
  return request({
    url: "/working-today",
    method: "get"
  });
};
export const getWorkingToday = id => {
  return request({
    url: `getWorkingToday?empId=${id}`,
    method: "get"
  });
};

/**
 * POST method
 */

export const postRequest = createRequestDTO => {
  return request({
    url,
    method: "post",
    data: createRequestDTO
  });
};
