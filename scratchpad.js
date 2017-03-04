document.getElementsByTagName("title")[0].innerHTML = "JavaScript Recursive Sequences";

addStyles();
addLinks();
fibonacci(11);
pell(11);
tribonacci(11);

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
  div.setAttribute('class', 'fib tree');
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
  div.setAttribute('class', 'pell tree');
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
  div.setAttribute('class', 'tri tree');
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

//creates links
function addLinks(){
  let p = document.createElement('p');
  p.setAttribute('class','link');
  let a1 = document.createElement('a');
  a1.setAttribute('href','https://oeis.org/A000045');
  let a2 = document.createElement('a');
  a2.setAttribute('href','https://oeis.org/A000129');
  let a3 = document.createElement('a');
  a3.setAttribute('href','https://oeis.org/A000073');

  p.innerHTML = 'Click for more details on: <br>';
  a1.innerHTML = 'the fibonacci sequence<br>';
  a2.innerHTML = 'the pell sequence<br>';
  a3.innerHTML = 'the tribonacci sequence<br>'
  p.appendChild(a1);
  p.appendChild(a2);
  p.appendChild(a3);

  document.body.appendChild(p);
}

////////////////
//  CSS
///////////////
function addStyles(){
  let style = document.createElement('style');

  style.textContent = "html{" +
  "  display: flex;" +
  "}" +
  "" +
  "body{" +
  "  text-align: center;" +
  "}" +
  "" +
  "" +
  "p{" +
  "  min-width: 75px;" +
  "}" +
  "" +
  ".tree{" +
  "  display: flex;" +
  "  flex-direction: column;" +
  "  flex: 1;" +
  "  margin: 3px;" +
  "}" +
  "" +
  ".inner{" +
  "  display:flex;" +
  "  flex-direction: row;" +
  "  align-items: flex-start;" +
  "}" +
  "" +
  ".link{" +
  "  text-align: left;" +
  "}" +
  "" +
  "#fibonacci{" +
  "  background-color: rgb(255, 0, 0);" +
  "  color:white;" +
  "}" +
  "" +
  ".fib{" +
  "  background-color: rgba(0,0,200,0.1);" +
  "}" +
  "" +
  "#pell{" +
  "  background-color: rgb(0,0,0);" +
  "  color: white;" +
  "}" +
  "" +
  ".pell{" +
  "  background-color: rgba(128,128,128,0.1);" +
  "}" +
  "" +
  "#tribonacci{" +
  "  background-color: rgb(0, 100, 0);" +
  "}" +
  "" +
  ".tri{" +
  "  background-color: rgba(225, 225, 0, 0.15);" +
  "}" +

  document.head.appendChild(style);
}
