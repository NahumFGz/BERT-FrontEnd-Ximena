// import axios from "axios";
import apiBase from "./apiBase.service";

// let request;

const UsersService = {
  get() {
    return apiBase.get(`/api/v1/auth/me`);
  },

  //   create(data, type) {
  //     if (type === "admin") return apiBase.put(`cfesad/resources/${type}`, data);
  //     else return apiBase.post(`cfesad/resources/${type}`, data);
  //   },

  //   update(id, data) {
  //     return apiBase.put(`cfesad/resources/usuario/${id}`, data);
  //   },

  //   resetPassword(id) {
  //     return apiBase.get(`cfesad/resources/usuario/${id}/resetearClave`);
  //   },

  //   generateToken(id) {
  //     return apiBase.get(
  //       `cfesad/resources/usuario/${id}/generarTokenVerificacion`
  //     );
  //   },

  //   enable(id) {
  //     return apiBase.put(`cfesad/resources/usuario/${id}/alta`);
  //   },

  //   disable(id) {
  //     return apiBase.put(`cfesad/resources/usuario/${id}/baja`);
  //   },
};

export default UsersService;
