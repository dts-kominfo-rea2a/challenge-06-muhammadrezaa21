// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const paths = [file1, file2, file3];
  let errs = null;
  let datas = [];
  paths.forEach((e, i) => {
    fs.readFile(e, "utf8", (err, data) => {
      if (err) {
        return fnCallback(err, data);
      } else {
        switch (i) {
          case 0:
            dataJson = JSON.parse(data).message.split(" ");
            if (dataJson.length >= 2) datas.push(dataJson[1]);
            break;
          case 1:
            dataJson = JSON.parse(data)[0].message.split(" ");
            if (dataJson.length >= 2) datas.push(dataJson[1]);
            break;
          case 2:
            dataJson = JSON.parse(data)[0].data.message.split(" ");
            if (dataJson.length >= 2) datas.push(dataJson[1]);
            break;
          default:
            return data;
        }
      }
    });
  });
  fnCallback(errs, datas);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
