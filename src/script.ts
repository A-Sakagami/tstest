// script.js
function selectSeat(seatId:string) {
    let seat = document.querySelector(`[data-seat="${seatId}"]`);
    seat?.classList.toggle('selected');
    console.log(`Seat ${seatId} selected:`, seat?.classList.contains('selected'));
}