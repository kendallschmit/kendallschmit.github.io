var expectedKeyCode = 0;
var startTime = 0;

var correctCount = 0;
var totalTime = 0;

var paused = false;

var timerId = -1;

prompts = [
    { 'keyCode': 37, 'name': 'Left' },
    { 'keyCode': 39, 'name': 'Right' }
];

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
        correctCount = 0;
        reset();
        return;
    }
    if (paused) {
        return;
    }
    else if (event.keyCode == 37 || event.keyCode == 39) {
        if (judge(event.keyCode)) {
            printStats();
            paused = true;
            return;
        }
    }
    document.getElementById('prompt').innerHTML = '';
    timerId = setTimeout(nextPrompt, Math.max(300, Math.random() * 2000))
});

function reset() {
    if (timerId != -1) {
        clearTimeout(timerId);
    }
    timerId = -1;
    expectedKeyCode = 0;
    startTime = 0;
    correctCount = 0;
    paused = false;
    document.getElementById('prompt').innerHTML = 'left or right to start';
    document.getElementById('count').innerHTML = '';
    document.getElementById('averageTime').innerHTML = '';
}

function nextPrompt() {
    startTime = Date.now();
    let p = prompts[Math.floor(Math.random() * prompts.length)];
    expectedKeyCode = p['keyCode'];
    document.getElementById('prompt').innerHTML = p['name'];
}

function judge(keyCode) {
    if (startTime == 0) {
        return false;
    }
    if (keyCode != expectedKeyCode) {
        return true;
    }
    else {
        correctCount++;
    }

    let currentTime = Date.now();
    let diff = currentTime - startTime;
    totalTime += diff;
    return false;
}

function printStats() {
    document.getElementById('prompt').innerHTML = 'space to reset';
    document.getElementById('count').innerHTML = `total correct: ${correctCount}`;
    let average = Math.round(totalTime / correctCount);
    if (correctCount == 0)
        average = 0;
    document.getElementById('averageTime').innerHTML = `average reaction time: ${average}ms`;
}
