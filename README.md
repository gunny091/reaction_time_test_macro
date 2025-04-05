# Reaction Time Test Macro

## How To Use
1. Go to https://humanbenchmark.com/tests/reactiontime
2. Open console
3. Copy & paste the following code(minified) or main.js

```js
const divQuery="div.e18o0sx0",screenNamesToClick=["go","result","splash"],screenNamesToStop=["score"],macroLoopDelay=1,messages={started:"Macro: started",stopped:"Macro: stopped",aleady_started:"Error: Macro aleady started",not_running:"Error: Macro is not running",clicked:"Macro: clicked"},clickEvent=new MouseEvent("mousedown",{view:window,bubbles:!0,cancelable:!0}),div=document.querySelector("div.e18o0sx0");function isScreenNameIsInList(e){for(let s of e)if(div.classList.contains("view-"+s))return!0;return!1}let macroIsRunning=!1;function macroMain(){if(isScreenNameIsInList(screenNamesToClick)&&(div.dispatchEvent(clickEvent),console.log(messages.clicked)),isScreenNameIsInList(screenNamesToStop)){macroStop();return}macroIsRunning&&setTimeout(macroMain,1)}function macroStart(){macroIsRunning?console.log(messages.aleady_started):(macroIsRunning=!0,console.log(messages.started),macroMain())}function macroStop(){macroIsRunning?(macroIsRunning=!1,console.log(messages.stopped)):console.log(messages.not_running)}macroStart();
```
