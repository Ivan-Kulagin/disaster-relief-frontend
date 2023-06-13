import _api from "@/services/_api";
export const report = (reportData) => {
  const data = {
    emergencies: [
      {
        Number: 999,
        Name: reportData.addr,
        Address: reportData.addr,
        Latitude: reportData.lat,
        Longitude: reportData.lon,
        Dr_number: 100,
      },
    ],
  };
  return _api().post("/report", data);
};
