// Reaction Time Test Macro
// for https://humanbenchmark.com/tests/reactiontime
// by https://chadol.xyz/

const divQuery = "div.e18o0sx0";
const screenNamesToClick = ["go", "result", "splash"];
const screenNamesToStop = ["score"];
const macroLoopDelay = 1;
const messages = {
  started: "Macro: started",
  stopped: "Macro: stopped",
  aleady_started: "Error: Macro aleady started",
  not_running: "Error: Macro is not running",
  clicked: "Macro: clicked",
};

const clickEvent = new MouseEvent("mousedown", { view: window, bubbles: true, cancelable: true });

const div = document.querySelector(divQuery);

function isScreenNameIsInList(list) {
  for (const name of list) {
    if (div.classList.contains("view-" + name)) {
      return true;
    }
  }
  return false;
}

let macroIsRunning = false;

function macroMain() {
  if (isScreenNameIsInList(screenNamesToClick)) {
    div.dispatchEvent(clickEvent);
    console.log(messages.clicked);
  }
  if (isScreenNameIsInList(screenNamesToStop)) {
    macroStop();
    return;
  }
  if (macroIsRunning) setTimeout(macroMain, macroLoopDelay);
}

function macroStart() {
  if (!macroIsRunning) {
    macroIsRunning = true;
    console.log(messages.started);
    macroMain();
  } else {
    console.log(messages.aleady_started);
  }
}

function macroStop() {
  if (macroIsRunning) {
    macroIsRunning = false;
    console.log(messages.stopped);
  } else {
    console.log(messages.not_running);
  }
}

macroStart();
