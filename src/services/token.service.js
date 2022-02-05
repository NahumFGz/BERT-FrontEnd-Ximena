import LocalStorageService from "./localStorage.service";
import jwt_decode from "jwt-decode";

const TokenService = {
  /**
   * Return Bearer abcdasd....xyz
   */
  get() {
    const _tokenName = LocalStorageService.getItem("token");
    return _tokenName;
  },
  /**
   * Return abcdasd....xyz
   */
  getWithBearer() {
    const _tokenName = LocalStorageService.getItem("token");
    return `Bearer ${_tokenName}`;
  },

  save(token) {
    LocalStorageService.createItem("token", token);
  },

  clear() {
    LocalStorageService.clearItem("token");
  },

  getDecoded() {
    const _tokenName = LocalStorageService.getItem("token");
    return jwt_decode(_tokenName);
  },

  exist() {
    return LocalStorageService.existItem("token");
  },
};

export default TokenService;
