document.getElementsByTagName("title")[0].innerHTML = "JavaScript Recursive Sequences";

fibonacci(11);
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
function fibonacci(n){
  var fibDiv = Div('fibonacci');
  let fibTree = fib(n);
  fibDiv.appendChild(fibTree.html);
}

function fib(n){
  let div = document.createElement('div');
  div.setAttribute('class', 'fib');
  div.setAttribute('class', 'tree');
  let p = document.createElement('p');

  //base case
  if (n <= 1){
    p.textContent = 'Fib(' + n + ') = ' + n;
    div.appendChild(p);
    return {value: n, html: div};
  }

  let left = fib(n - 1);
  let right = fib(n - 2);
  let value = left.value + right.value;
  p.textContent = 'Fib(' + n + ') = ' + value;

  let subDiv = document.createElement('div');
  subDiv.setAttribute('class','inner');

  div.appendChild(p);
  subDiv.appendChild(left.html);
  subDiv.appendChild(right.html);
  div.appendChild(subDiv);

  return {value: value, html: div};
}

function pell(n){
  var pDiv = Div('pell')
  let pellTree = pe(n);
  pDiv.appendChild(pellTree.html);
}

function pe(n){
  let div = document.createElement('div');
  div.setAttribute('class', 'pell');
  div.setAttribute('class', 'tree');
  let p = document.createElement('p');

  if (n <= 1){
    p.textContent = 'pell(' + n + ') = ' + n;
    div.appendChild(p);
    return {value: n, html: div};
  }

  let left = pe(n-1);
  let right = pe(n-2);
  let value = 2 * left.value + right.value;
  p.textContent = 'pell(' + n + ') = ' + value;

  let subDiv = document.createElement('div');
  subDiv.setAttribute('class','inner');

  div.appendChild(p);
  subDiv.appendChild(left.html);
  subDiv.appendChild(right.html);
  div.appendChild(subDiv);

  return {value: value, html: div};
}

function tribonacci(n){
  var triDiv = Div('tribonacci')
  let triTree = tri(n);
  triDiv.appendChild(triTree.html);
}

function tri(n){
  let div = document.createElement('div');
  div.setAttribute('class', 'tri');
  div.setAttribute('class', 'tree');
  let p = document.createElement('p');

  if (n <= 1){
    p.textContent = 'Tri(' + n + ') = ' + 0;
    div.appendChild(p);
    return {value: 0, html: div};
  }
  if (n === 2){
    p.textContent = 'Tri(' + n + ') = ' + 1;
    div.appendChild(p);
    return {value: 1, html: div};
  }

  let left = tri(n-1);
  let mid = tri(n-2);
  let right = tri(n-3);
  let value = left.value + mid.value + right.value;
  p.textContent = 'tri(' + n + ') = ' + value;

  let subDiv = document.createElement('div');
  subDiv.setAttribute('class','inner');

  div.appendChild(p);
  subDiv.appendChild(left.html);
  subDiv.appendChild(mid.html);
  subDiv.appendChild(right.html);
  div.appendChild(subDiv);

  return {value: value, html: div};
}

//creates unique divs
function Div(id){
  let div = document.createElement('div');
  div.setAttribute('id', id);
  document.body.appendChild(div);
  return div;
}
