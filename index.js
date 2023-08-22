let employeeName = document.getElementById('name');
let hourlyPay = document.getElementById('hourly-pay');
let hoursWorked = document.getElementById('hours-worked');

const button = document.getElementById('submit-btn');

button.addEventListener('click', function () {

    let totalPay = hourlyPay.value * hoursWorked.value;

    if (!(employeeName.value == "" || hourlyPay.value == 0 || hoursWorked.value == 0)) {

        document.getElementById('display-salary').style.display = "flex";
        document.getElementById('form-container').style.display = "none";
        document.getElementById('greetings').innerHTML = ('Hi, ' + employeeName.value);
        document.getElementById('salary-placeholder').innerHTML = ('<span style="color: green;">$' + totalPay + '</span>');

    } else {

        window.alert('please fill in the blanks');

    }

    var claimCount = 0;

    const claim = document.getElementById('claim-btn');

    claim.addEventListener('click', function () {

        if (claimCount < 1) {

            window.alert('$' + totalPay + ' has been added to your account.');
            claimCount++;

        } else {

            window.alert('you already claimed your salary.');
        }

    });


    const back = document.getElementById('back-btn');


    back.addEventListener('click', function () {

        if (claimCount == 0) {

            if (window.confirm("you haven't claim your salary yet. are you sure you want to go back?") == true){

                location.reload();

            }

        } else {

            location.reload();
        }

    });

});