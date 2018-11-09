# CCSM's ToDo 

## Issues we ran into 
 - Our first issue was just trying to get our test suite off the ground. We had run ``` npm i ``` and had even written tests and nothing was working. Our problem was we hadn't opened up the package.json and added the following:
    ``` 
    "scripts": {
    "test": "tape test.js | tap-spec"
    }
    ```
 - An overall issue for us was just reading and understanding the existing codebase - particularly when functions were being passed around between different files.
<img src="https://media.giphy.com/media/3o6Ztl3rRVq6yZ5MT6/giphy.gif" width="200">
 - In loads of cases, we started writing code that had already been hinted at, or even fully provided for us.

## Lessons learnt 
- READ THE CODEBASE COMPLETELY!!!!!!!!!!
- We could have saved ourselves a lot of headaches, time and confusion if we had taken time to read to the bottom of the file, and realise that the skeleton had already done a lot of the work for us.
<img src="https://media.giphy.com/media/l4JyNy5kTxFPnqvmM/giphy.gif" width="200">

## What we're proud of 
- Scrapping our dom.js file and starting from scratch at 5.30pm and not completely going off the rails (thanks Eve)
<img src="https://media.giphy.com/media/n6xe7RntgjFyo/giphy.gif" width="200">
- All **git** stuff went pretty smoothly!
- Even though we could definitely have initially written more/covered more edge cases, we wrote **failing tests** that we then got to **pass**.
- Sweet **CSS**.

## Stretch goals
 - We wrote our **markToDo** function, but it'd be good to fully **test it**, and then **implement it for the user** (i.e strikeout or different colour for completed tasks).
