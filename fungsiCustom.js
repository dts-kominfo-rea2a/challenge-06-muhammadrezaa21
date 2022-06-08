// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
const { exit } = require("process");

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
  let datas = [];
  fs.readFile(file1, (err, data) => {
    if (err) return fnCallback(err, null);

    const dataHasilSplit = JSON.parse(data).message.split(" ");
    if (!dataHasilSplit) {
      return fnCallback("Tidak ada data dari " + file1, null);
    } else if (dataHasilSplit.length < 2) {
      return fnCallback(
        "Message dari " + file1 + " kurang dari dua kata",
        null
      );
    } else {
      datas.push(dataHasilSplit[1]);
    }
    fs.readFile(file2, (err, data) => {
      if (err) return fnCallback(err, null);

      const dataHasilSplit = JSON.parse(data)[0].message.split(" ");
      if (!dataHasilSplit) {
        return fnCallback("Tidak ada data dari " + file2, null);
      } else if (dataHasilSplit.length < 2) {
        return fnCallback(
          "Message dari " + file2 + " kurang dari dua kata",
          null
        );
      } else {
        datas.push(dataHasilSplit[1]);
      }
      fs.readFile(file3, (err, data) => {
        if (err) return fnCallback(err, null);

        const dataHasilSplit = JSON.parse(data)[0].data.message.split(" ");
        if (!dataHasilSplit) {
          return fnCallback("Tidak ada data dari " + file3, null);
        } else if (dataHasilSplit.length < 2) {
          return fnCallback(
            "Message dari " + file3 + " kurang dari dua kata",
            null
          );
        } else {
          datas.push(dataHasilSplit[1]);
        }
        return fnCallback(null, datas);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
