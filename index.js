document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
});

function processTip(percent) {
  const bill = document.getElementById("bill").value;
  const persons = document.getElementById("numberOfPeople").value;
  const tipAmount = tipAmountFunc(bill, persons, percent);
  const total = document.getElementById("total");
  total.innerText = tipAmount;

  const overallTotal = totalFunc(bill, persons, percent);
  const totalAll = document.getElementById("totalAll");
  totalAll.innerText = overallTotal;

  //   const resetBtn = document.getElementById("reset").value;
  // resetBtn.addEventListener(click, function (){
  //   bill.value = "" ;
  //   persons.value = "";
  //   total.replace("0.00");
  //   totalAll.innerText = "0.00";
  // }
  //   )
}

// function reset() {
//   document.getElementById("myForm").reset();
// }

function tipAmountFunc(bill, numberOfPeople, percentTip) {
  const percentOfBill = (percentTip / 100) * bill;
  result = percentOfBill / numberOfPeople;
  console.log(result);
  return result.toFixed(2);
}
console.log(tipAmountFunc(142.55, 5, 15));

function totalFunc(bill, numberOfPeople, percentTip) {
  const result = (percentTip / 100) * bill + bill / numberOfPeople;
  // const tip = (percentTip/100) * bill;
  // let preResult = tip + bill;
  // let result = preResult / numberOfPeople;
  // console.log(result)
  return result.toFixed(2);
}
console.log(totalFunc(142.55, 5, 15));

//const result =(percentTip/100)*bill+ (bill/numberOfPeople);

function resetFields() {
  document.getElementById("bill").value = "";
  document.getElementById("numberOfPeople").value = "";
  document.getElementById("total").innerText = "0.00";
  document.getElementById("totalAll").innerText = "0.00";

  console.log(document.getElementById("total").value);
}
