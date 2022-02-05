import apiBase from "./apiBase.service";
import Router from "../router/index";
import TokenService from "./../services/token.service";
import axios from "axios";
import DOMAIN_WEB from "@/utils/domainWeb";

const AuthService = {
  login(data) {
    const apiBaseForm = axios.create({
      baseURL: DOMAIN_WEB,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    const params = new URLSearchParams();
    params.append('username', data['mail']);
    params.append('password', data['password']);

    return apiBaseForm.post(`/api/v1/auth/jwt/login`, params);
  },
  logout() {
    TokenService.clear();
    Router.push({ name: "login" });
  },
  populate(token) {
    TokenService.save(token);
    this.populateApiBaseHeaders();
  },
  populateApiBaseHeaders() {
    apiBase.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${TokenService.get()}`;
  },
  getCurrentUser() {
    let user = {};
    user = TokenService.getDecoded();
    // return user.usuario;
    return user;
  },
};
export default AuthService;
