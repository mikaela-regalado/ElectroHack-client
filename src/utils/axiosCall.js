import axios from "axios";

export default async function axiosCall(path, method, token, query, body) {
  const URL = process.env.REACT_APP_URL + path;
  const headers = token ? { Authorization: `Bearer ${token}` } : null;

  try {
    const res = await axios({
      url: URL,
      method: method,
      headers: headers,
      params: query,
      data: body,
    });
    return res;
  } catch (error) {
    return error;
  }
}
