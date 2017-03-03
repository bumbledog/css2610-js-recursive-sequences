document.getElementsByTagName("title")[0].innerHTML = "JavaScript Recursive Sequences";


///////////////////////////
//  The Geometric Functions
///////////////////////////
function fibonacci(n){
    if (n <= 1){
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function pell(n){
    if (n <= 1){
        return n;
    }
    return 2 * pell(n - 1) + pell(n - 2);
}

function tribonacci(n){
    if (n <= 1){
        return 1;
    }
    if (n === 2){
        return 1;
    }
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}
