import {
    createPhoneList,
    updateAmount,
    clearCart,
} from './functions.js';

document.addEventListener("DOMContentLoaded", function () {
    initPage(testDataObj);
});

function initPage(testDataObj) {
    const mainTable = document.getElementById("mainTable");

    // สร้างรายการสินค้า
    testDataObj.forEach(function (item) {
        const phoneList = createPhoneList(item);
        mainTable.appendChild(phoneList);
    });

    // โหลดจำนวนสินค้าจาก Local Storage
    let amount = localStorage.getItem("amount") ? parseInt(localStorage.getItem("amount")) : 0;
    const phoneAmount = document.getElementById("amount");
    phoneAmount.textContent = amount;

    // ตั้งค่าเหตุการณ์ล้างตะกร้าสินค้า
    const clearCartButton = document.getElementById("ClearCartBox");
    clearCartButton.addEventListener("click", clearCart);
}
