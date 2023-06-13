import _api from "@/services/_api";
export default {
  getMap() {
    return _api().get("/map");
  },

  getMapData() {
    return _api().get("/panel/data");
  },
};
