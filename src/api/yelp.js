import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rZa7EZlQzG7FCdFlM4Q7iqoL8TbpXrjpxcDjwnALAUqFiD7HS6MWJAN-IuHdE_92RWXxdalJYBCJqaZKEp848SNO3Xx7s0vOV1s6ZXrdC9Ls1nVcprlsdMqlofGiXXYx"
  }
});
