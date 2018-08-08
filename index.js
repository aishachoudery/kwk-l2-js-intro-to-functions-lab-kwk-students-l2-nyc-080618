// Write your code in this file!
function getUKTime() {
  let UKtime = new Date().getHours() + 5; 
  return UKtime;
}




function discountTicket(price) {
  let actualPrice = price - (price * 20)/100
  return actualPrice
}
