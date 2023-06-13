import _api from "@/services/_api";
export default {
  getInstructions() {
    return _api().get("/instructions");
  },
};
