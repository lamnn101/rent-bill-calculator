"use strict";

// Elements
const btnCalc = document.querySelector(".btn");
const elRoom = document.querySelector(".room");
const elElec = document.querySelector(".elec");
const elWate = document.querySelector(".wate");
const elLam = document.querySelector(".lam-result");
const elLuan = document.querySelector(".luan-result");
const elTi = document.querySelector(".ti-result");
const elBao = document.querySelector(".bao-result");
const elTu = document.querySelector(".tu-result");

const checkboxLam = document.querySelector(".vehicle-lam");
const checkboxLuan = document.querySelector(".vehicle-luan");
const checkboxTi = document.querySelector(".vehicle-ti");
const checkboxBao = document.querySelector(".vehicle-bao");
const checkboxTu = document.querySelector(".vehicle-tu");

const calcAvg = function (value) {
   return value / 5;
};

btnCalc.addEventListener("click", function () {
   const roomPer = Number(elRoom.value) / 5;
   const lamElec = Number(elElec.value) * 0.5;
   const otherElec = (Number(elElec.value) * 0.5) / 4;
   const water = Number(elWate.value);
   let billLam = Math.round(
      roomPer + lamElec + water + calcAvg(260) + calcAvg(30)
   );
   let billOther = Math.round(roomPer + otherElec + calcAvg(260) + calcAvg(30));

   let billLuan;
   let billTi;
   let billBao;
   let billTu;

   if (checkboxLam.checked) billLam += 150;
   if (checkboxLuan.checked) {
      billLuan = billOther + 150;
   } else {
      billLuan = billOther;
   }
   if (checkboxTi.checked) {
      billTi = billOther + 150;
   } else {
      billTi = billOther;
   }
   if (checkboxBao.checked) {
      billBao = billOther + 150;
   } else {
      billBao = billOther;
   }
   if (checkboxTu.checked) {
      billTu = billOther + 150;
   } else {
      billTu = billOther;
   }

   elLam.textContent = billLam;
   elLuan.textContent = billLuan;
   elTi.textContent = billTi;
   elBao.textContent = billBao;
   elTu.textContent = billTu;
});
