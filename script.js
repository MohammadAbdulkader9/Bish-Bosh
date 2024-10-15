// imp 1: Bish-bosh 1.0

for (let index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 4 == 0) {
        console.log('Bish-Bosh');
    }
    else if (index % 3 == 0) {
        console.log('Bish');
    }
    else if (index % 4 == 0) {
        console.log('Bosh');
    }
    else
        console.log(index);
}


// imp 2 : Bish-bosh 2.0
console.log('-------------------------------------------------');
console.log('v2');
// let bishReplace = prompt('Enter the Bish replacement number', 3);
// let boshReplace = prompt('Enter the Bosh replacement number', 4);
// let idxLength = prompt('Enter the count length', 100);

document.getElementById('start').addEventListener('click', function () {

    let bishReplace = parseInt(document.getElementById('bishValue').value);
    let boshReplace = parseInt(document.getElementById('boshValue').value);
    let idxLength = parseInt(document.getElementById('loopLength').value);

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let index = 1; index <= idxLength; index++) {
        let result = '';

        if (index % bishReplace == 0 && index % boshReplace == 0) {
            result = 'Bish-Bosh';
        } else if (index % bishReplace == 0) {
            result = 'Bish';
        } else if (index % boshReplace == 0) {
            result = 'Bosh';
        } else {
            result = index;
        }

        let paragraph = document.createElement('p');
        paragraph.textContent = result;
        outputDiv.appendChild(paragraph);
    }
});

