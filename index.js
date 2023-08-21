let employeeName = document.getElementById('name');
let hourlyPay = document.getElementById('hourly-pay');
let hoursWorked = document.getElementById('hours-worked');

const button = document.getElementById('submit-btn');

button.addEventListener('click', function(){

    let totalPay = hourlyPay.value * hoursWorked.value;

    document.getElementById('display-salary').style.display="flex";
    document.getElementById('form-container').style.display="none";
    document.getElementById('greetings').innerHTML = ('Hi, ' + employeeName.value);
    document.getElementById('salary-placeholder').innerHTML = ('<span style="color: green;">' + totalPay + '$</span>');
    
});

const claim = document.getElementById('claim-btn');

claim.addEventListener('click', function(){

    window.alert('Sana all. Nananaginip ka ata?');

});

const back = document.getElementById('back-btn');

back.addEventListener('click', function(){

    location.reload();

});