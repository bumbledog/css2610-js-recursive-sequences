document.getElementsByTagName("title")[0].innerHTML = "JavaScript Recursive Sequences";

addLinks();

///////////////////////////
//  The Geometric Functions
///////////////////////////
function fibonacci(n){
  var fibDiv = document.getElementById('fibonacci');
  let fibTree = fib(n);
  fibDiv.replaceChild(fibTree.html, fibDiv.lastChild);
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
  var pDiv = document.getElementById('pell');
  let pellTree = pe(n);
  pDiv.replaceChild(pellTree.html, pDiv.lastChild);
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
  var triDiv = document.getElementById('tribonacci');
  let triTree = tri(n);
  triDiv.replaceChild(triTree.html, triDiv.lastChild);
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

function changeText(slider, name){
  let target = slider.parentNode.querySelector('button');
  //let target = document.getElementById(name);
  target.textContent = name + "(" + slider.value + ")";
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
