document.getElementsByTagName("title")[0].innerHTML = "JavaScript Recursive Sequences";

var fibDiv = Div('fibonacci');

fibonacci(11, document.querySelector('#fibonacci'));
pell(11);
tribonacci(11);

/*var style = document.createElement('link');
style.setAttribute('ref','stylesheet');
style.setAttribute('type','text/css');
style.setAttribute('href', 'style.css');
document.head.appendChild(style);

var test = document.createElement('style');
test.innerHTML = ".fib{display:flex;flex-direction:column;}.inner{display:flex;flex-direction:row;}";
document.head.appendChild(test);*/

///////////////////////////
//  The Geometric Functions
///////////////////////////
function fibonacci(n, node){
  let fibTree = fib(n);
  node.appendChild(fibTree.html);
}

function fib(n){
  let div = document.createElement('div');
  div.setAttribute('class', 'fib');
  let p = document.createElement('p');
  let value = 0;

  //base case
  if (n <= 1){
    value = n;
  }else{
    var left = fib(n - 1);
    var right = fib(n - 2);
    value = left.value + right.value;
    var hasChildren = true;
  }

  p.textContent = 'Fib(' + n + ') = ' + value;
  div.appendChild(p);

  if(hasChildren){
    let subDiv = document.createElement('div');
    subDiv.setAttribute('class','inner');

    subDiv.appendChild(left.html);
    subDiv.appendChild(right.html);
    div.appendChild(subDiv);
  }

  return {value: value, html: div};
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

//creates unique divs
function Div(id){
  let div = document.createElement('div');
  div.setAttribute('id', id);
  document.body.appendChild(div);
}
