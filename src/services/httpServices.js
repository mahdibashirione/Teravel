import axios from "axios";

const http = {
  Get: axios.get,
  Put: axios.put,
  Delete: axios.delete,
  Post: axios.post,
};

export default http;
