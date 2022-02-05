import apiBase from "./apiBase.service";

const SubAudiosService = {
  getAll(id) {
    return apiBase.get(`/api/v1/audios/${id}/partitions`);
  },
  //   get() {
  //     return apiBase.get(`cfesad/resources/listas/categoria`);
  //   },
  //   update() {
  //     return apiBase.get(`cfesad/resources/listas/categoria`);
  //   },
};
export default SubAudiosService;
