// console.log("withdraw")

document.getElementById("withdrawBtn").addEventListener("click", function () {
  // console.log('button clicked')
  const withdrawField = document.getElementById("withdrawField");
  const withdrawAmount = parseFloat(withdrawField.value);

  const withdrawInitial = document.getElementById("withdrawTotal");
  const withdrawTotal = withdrawInitial.innerText;
  const prevWithdraw = parseFloat(withdrawTotal);

  const currentTotal = parseFloat(withdrawAmount) + parseFloat(withdrawTotal);

  withdrawInitial.innerText = currentTotal;

  const totalBalance = document.getElementById("totalBalance");

  const previousBalance = parseFloat(totalBalance.innerText);

  const newBalance = previousBalance - withdrawAmount;

  totalBalance.innerText = newBalance;

  withdrawField.value = "";
});
