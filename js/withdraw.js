// console.log("withdraw")

document.getElementById("withdrawBtn").addEventListener("click", function () {
  // console.log('button clicked')
  const withdrawField = document.getElementById("withdrawField");
  const withdrawAmount = parseFloat(withdrawField.value);

  withdrawField.value = "";
  if (isNaN(withdrawAmount)) {
    alert("please provide a number");
    return;
  }
  const withdrawInitial = document.getElementById("withdrawTotal");
  const withdrawTotal = withdrawInitial.innerText;
  const prevWithdraw = parseFloat(withdrawTotal);

  const totalBalance = document.getElementById("totalBalance");

  const previousBalance = parseFloat(totalBalance.innerText);

  console.log(previousBalance);

  if (withdrawAmount > previousBalance) {
    alert("low balance");
    return;
  }

  const currentTotal = parseFloat(withdrawAmount) + parseFloat(withdrawTotal);

  withdrawInitial.innerText = currentTotal;

  const newBalance = previousBalance - withdrawAmount;

  totalBalance.innerText = newBalance;
});
