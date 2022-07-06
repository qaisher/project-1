function displayNum(val) {
    document.getElementById('display-screen').value += val;
}



function displayOperator(operator) {
    document.getElementById('display-screen').value += ' ' + operator + ' ';
}



function clr() {
    document.getElementById("display-screen").value = "";
}




function calc() {
    let input = document.getElementById('display-screen').value;
    let output = eval(input);
    document.getElementById("display-screen").value = output;


    function createHistory(input, output) {


        if (input != '') {
            historyArray.unshift({
                equation: input,
                result: output,
            });
        }

        if (historyArray.length == 11) {
            historyArray.pop();
            historyArray.length = 10;
        }


    }

    createHistory(input, output);

}



function backspace() {
    let input = document.getElementById("display-screen").value;

    if (input[input.length - 1] === ' ') {
        document.getElementById('display-screen').value = input.slice(0, input.length - 3);
    }

    else {
        document.getElementById('display-screen').value = input.slice(0, input.length - 1);
    }
}



function showHistory() {

    document.getElementById('keys').style.display = 'none';
    document.getElementById('history').style.display = 'block';
    document.getElementById('historyBtn').value = 'Hide';
    document.getElementById('historyBtn').onclick = showKeys;

    for (i = 0; i < historyArray.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'historyBlock');
        div.setAttribute('id', 'historyBlock' + i);
        document.getElementById('history').appendChild(div);
        div.addEventListener('click', displayHistory);
        div.textContent = historyArray[i].equation + ' = ' + historyArray[i].result;

        function displayHistory() {

            document.getElementById("display-screen").value = div.textContent;

        }

    }


}



function showKeys() {

    document.getElementById('keys').style.display = 'block';
    document.getElementById('history').style.display = 'none';
    document.getElementById('historyBtn').value = 'History';
    document.getElementById('historyBtn').onclick = showHistory;
    for (let i = 0; i < historyArray.length; i++) {
        var element = document.getElementById('historyBlock' + i);
        element.remove();
    }

}



let historyArray = [];