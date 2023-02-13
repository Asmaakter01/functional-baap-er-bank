document.getElementById('btn-deposit').addEventListener('click', function() {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getElementValueById('deposit-add');
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    setElementValueById('deposit-add', currentDepositAmount);

    const previousTotalBalance = getElementValueById('balance-total');
    const currentBalance = previousTotalBalance + newDepositAmount;
    setElementValueById('balance-total', currentBalance);
})