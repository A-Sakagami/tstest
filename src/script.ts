// script.js
function selectSeat(seatId:string) {
    let seat = document.querySelector(`[data-seat="${seatId}"]`);
    seat?.classList.toggle('selected');
    console.log(`Seat ${seatId} selected:`, seat?.classList.contains('selected'));
}

// 座席を予約する
function reserveSeat(seatId:string, employeeId:string){

}

// 座席の予約を取り消す
function resetReserveSeat(seatIdSet:string[], employeeId:string){

}

// 座席の予約状況を確認する
function searchReserveSeat(seatIdSet:string[]){

}