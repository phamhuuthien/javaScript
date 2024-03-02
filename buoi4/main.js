// let a = 3;

// const checkSoChan = (a) => a % 2 === 0;

// console.log(checkSoChan());

var sachs = [
  {
    tacgia: "Harper lee",
    tieude: "to kill a mockingbird",
    namXuatBan: 2020,
    trangthai: true,
  },
  {
    tacgia: "ray bradbury",
    tieude: "Fahrenheit 451",
    namXuatBan: 2022,
    trangthai: false,
  },
];

let i = 0;
for (var sach of sachs) {
  i++;
  console.log(
    `${i} tac gia ${sach.tacgia} tieu de ${sach.tieude} nam xuat ban  ${sach.namXuatBan} trang thai ${sach.trangthai}`
  );
}

sachs.forEach((sach, i) => {
  console.log(
    `${++i} tac gia ${sach.tacgia} tieu de ${sach.tieude} nam xuat ban  ${
      sach.namXuatBan
    } trang thai ${sach.trangthai}`
  );
});

const arr = [2, 3, 4, 5];

let min = arr[0];
let max = arr[0];

arr.forEach((item) => {
  item > max ? (max = item) : (max = max);
  item < min ? (min = item) : (min = min);
});

console.log(min, max);

const hoVaTen = "anh thien dep qua";

let maxLengh = 0;
let ten;
hoVaTen
  .trim()
  .split(" ")
  .forEach((item) => {
    maxLengh <= item.length
      ? ((ten = item), (maxLengh = item.length))
      : (ten = ten);
  });
console.log(ten);

const rs = "abc";
let chuoi = "";
for (let i = rs.length - 1; i >= 0; i--) {
  chuoi += rs[i];
}
console.log(chuoi);
