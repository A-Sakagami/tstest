"use strict";
// script.js
function selectSeat(seatId) {
    let seat = document.querySelector(`[data-seat="${seatId}"]`);
    seat?.classList.toggle('selected');
    console.log(`Seat ${seatId} selected:`, seat?.classList.contains('selected'));
}
// 座席を予約する
function reserveSeat(seatId, employeeId) {
}
// 座席の予約を取り消す
function resetReserveSeat(seatIdSet, employeeId) {
}
// 座席の予約状況を確認する
function searchReserveSeat(seatIdSet) {
}
//# sourceMappingURL=script.js.map