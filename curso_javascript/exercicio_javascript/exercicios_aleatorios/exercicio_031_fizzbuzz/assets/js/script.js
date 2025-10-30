
function requestUser(){
    let number;
    while (true) {
        const input = prompt('Please provide the number: ');
        if(input !== '' && input !== null){
            number = Number(input);
            
            if(!isNaN(number) && number !== null){
                break;
            }
        }
        
        alert('Invalid input! Please enter a valid number.');
    }
    return number
}

function fizzBuzz(number) {
    const result = document.querySelector('#resultado');
    result. innerHTML = '';
    for (let i = 1; i <= number; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';

        result.innerHTML += `${output || i} <br>`;
    }
}

let userNumber = requestUser();
fizzBuzz(userNumber);

