let isPaused = false;

document.addEventListener("DOMContentLoaded", function(event){
  // sets timer to 1000 seconds
  window.setInterval(incrementTimer, 1000);
  // set constants to all buttons
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const heart = document.getElementById('heart');
  const submit = document.getElementById('submit');
  const pause = document.getElementById('pause');
  const commentsList = document.getElementById('comments-list');
  // assigns functions to each click event and action (functions we'll write)
  plus.addEventListener('click', incrementTimer);
  minus.addEventListener('click', decrementTimer);
  heart.addEventListener('click', likeNumber);
  pause.addEventListener('click', pauseCounter);
  commentsList.addEventListener('submit', addComment);

});

function incrementTimer() {
  if (!isPaused) {
    // finding the dom element
    const counter = document.getElementById('counter');
    // setting it to that node
    let counterNum = parseInt(counter.innerHTML);
    // so user can add a second to it to increment timer
    counterNum = (counterNum + 1).toString();
    // setting the HTML to the number to show.
    counter.innerHTML = counterNum;
  }
}

function decrementTimer() {
  const counter = document.getElementById('counter');
  let counterNum = parseInt(counter.innerHTML);
  // so user can decrement a second from timer
  counterNum = (counterNum - 1).toString();
  counter.innerHTML = counterNum;
}

function pauseCounter() {
  const pause = document.getElementById('pause');
  if (isPaused) {
    isPaused = false;
    pause.innerHTML = 'pause';
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
  } else {
    isPaused = true;
    pause.innerHTML = 'resume';
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
  }
}

function resumeCounter() {
  const resume = document.getElementById('pause');
  isPaused = false;
  resume.innerHTML = 'pause';
  resume.setAttribute("id", "pause");
  document.getElementById("minus").disabled = false;
  document.getElementById("plus").disabled = false;
  document.getElementById("heart").disabled = false;
  document.getElementById("submit").disabled = false;
}

function likeNumber() {
  const counterNum = document.getElementById('counter').innerHTML;
  let ul = document.getElementsByClassName('likes')[0];
  const li = document.querySelector('li[data-num="' + counterNum + '"]');
  if (li) {
    let count = parseInt(li.dataset.count) + 1;
    li.setAttribute("data-count", (count).toString())
    li.innerHTML = counterNum + " has been liked " + count + " times!"
  } else {
    const node = document.createElement('li');
    node.setAttribute("data-num", counterNum);
    node.setAttribute("data-count", "1");
    node.innerHTML = counterNum + " has been liked 1 time!"
    ul.appendChild(node);
  }
}

function addComment(event) {
  event.preventDefault();
  const div = document.getElementById('list');
  let ul = document.getElementById('comments-list');
  let textInput = document.getElementById('comment-input')
  if (!ul) {
    ul = document.createElement('ul');
    ul.setAttribute('id', 'comments-list');
    div.appendChild(ul);
  }
  const li = document.createElement('li');
  li.innerHTML = textInput.value;
  ul.appendChild(li);
  textInput.value = '';
}
