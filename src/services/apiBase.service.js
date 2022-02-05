import axios from "axios";
import DOMAIN_WEB from "@/utils/domainWeb";

const ApiBaseService = axios.create({
  baseURL: DOMAIN_WEB,
  headers: {
    "Content-type": "application/json",
  },
});

export default ApiBaseService;
