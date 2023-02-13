document.getElementById('btn-withdraw').addEventListener('click', function() {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    setElementValueById('withdraw-total', currentWithdrawTotal);

    const previousTotalBalance = getElementValueById('balance-total');
    const currentBalance = previousTotalBalance - newWithdrawAmount;
    setElementValueById('balance-total', currentBalance);
})