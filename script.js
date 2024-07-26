function calculateTotal() {
  const monthlyPayment = parseFloat(
    document.getElementById("monthlyPayment").value
  );
  const interestRate =
    parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const numberOfPayments = parseInt(
    document.getElementById("numberOfPayments").value
  );

  if (isNaN(monthlyPayment) || isNaN(interestRate) || isNaN(numberOfPayments)) {
    document.getElementById("totalResult").innerText =
      "모든 입력값을 올바르게 입력해주세요.";
    document.getElementById("totalPaymentsResult").innerText = "";
    document.getElementById("totalInterestResult").innerText = "";
    return;
  }

  let total = 0;
  let totalPayments = 0;
  for (let i = 0; i < numberOfPayments; i++) {
    totalPayments += monthlyPayment;
    total = (total + monthlyPayment) * (1 + interestRate);
  }

  const totalInterest = total - totalPayments;

  document.getElementById("totalResult").innerText =
    total.toLocaleString("ko-KR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " 원";
  document.getElementById("totalPaymentsResult").innerText =
    totalPayments.toLocaleString("ko-KR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " 원";
  document.getElementById("totalInterestResult").innerText =
    totalInterest.toLocaleString("ko-KR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " 원";
}
