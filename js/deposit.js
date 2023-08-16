console.log("deposit");

document.getElementById("depositBtn").addEventListener("click", function () {
  // console.log("deposit btn clicked")
  const depositAmount = document.getElementById("depositField");
  const newDeposit = parseFloat(depositAmount.value);
  // console.log(typeof newDeposit)
  depositAmount.value = "";
  if (isNaN(newDeposit)) {
    alert("please provide a number");
    return;
  }

  const previousDeposit = document.getElementById("depositTotal");
  const h = parseFloat(previousDeposit.innerText);
  // console.log(typeof h)

  const totalDeposit = newDeposit + h;
  // console.log(totalDeposit)

  previousDeposit.innerText = totalDeposit;

  const totalBalance = document.getElementById("totalBalance");
  const previousBalance = parseFloat(totalBalance.innerText);
  console.log(previousBalance);

  const newBalance = previousBalance + newDeposit;
  console.log(newBalance);

  totalBalance.innerText = newBalance;
});
