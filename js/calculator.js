var num1 = 0;
var num2 = 0;
var currentOperation = '+';
var refreshNumber = false;
var isFirstTime = true;

$('button').click(function () {
    if (isNaN($(this).val())) {
        switch ($(this).val()) {
            case 'CE':
                num1 = 0;
                num2 = 0;
                $('#total').val(0);
                break;
            case 'C':
                $('#total').val(0);
                break;
            case '=':
                if (isFirstTime) {
                    num2 = $('#total').val();
                    isFirstTime = false;
                    refreshNumber = true;
                }

                num1 = calculate(
                    parseInt(num1),
                    parseInt(num2),
                    currentOperation
                );

                $('#total').val(num1);
                break;
            default:
                if (!isFirstTime) {
                    isFirstTime = true;
                    num1 = $('#total').val();
                    currentOperation = $(this).val();
                } else {
                    num2 = $('#total').val();
                    num1 = calculate(
                        parseInt(num1),
                        parseInt(num2),
                        currentOperation
                    );
                    $('#total').val(num1);
                    currentOperation = $(this).val();
                }
                refreshNumber = true;
                break;
        }
    } else {
        showNumber($(this).val());
    }
});

function showNumber(input) {
    if (refreshNumber) {
        $('#total').val(input);
        refreshNumber = false;
    } else if ($('#total').val() == 0) {
        $('#total').val(input);
    } else if ($('#total').val().length < 8) {
        $('#total').val($('#total').val() + input);
    }
}

function calculate(x, y, operator) {
    switch (operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
    }
}