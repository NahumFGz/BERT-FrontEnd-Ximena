import apiBase from "./apiBase.service";

const AudiosService = {
  searchTweet(id) {
    return apiBase.post(`/tweet`, {
      id: id,
    });
  },
  predict(text) {
    return apiBase.post(`/text`, {
      text: text,
    });
  },
};
export default AudiosService;
