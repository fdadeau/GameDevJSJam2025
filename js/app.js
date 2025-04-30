
import { Grid } from "./grid.js";

import { LEVELS, LABELS } from "./levels.js";

import { audio } from "./audio.js";

document.addEventListener("DOMContentLoaded", function() {

    const CUBE_WIDTH = 60;

    const STORAGE_KEY = "balanz";

    const bcStage = document.getElementById("stage");
    /** Gauges verical and horizontal */
    const gaugeX = document.getElementById("gaugeX");
    const gaugeY = document.getElementById("gaugeY");
    /** Board rotation vertical (X) / horizontal (Z) */
    const rotateX = document.getElementById("rotateX");
    const rotateZ = document.getElementById("rotateZ");

    /** Level selection display */
    const LEVELS_PER_PAGE = 12;

    /** Level informations (object and index) */
    let level = null;
    let currentLevel = 0;


    /**
     * Loads the level at the specified index.
     * @param {number} index 
     */
    function loadLevel(index) {
        currentLevel = index;
        const size = LEVELS[index].size;
        const forbidden = LEVELS[index].forbidden;
        const weights = LEVELS[index].weights;
        const msg = LEVELS[index].msg;

        level = { grid: new Grid(size, forbidden, weights), moves: 0, selected: null, hint: false };
        level.min = level.grid.solution().length;

        createStage(level.grid);
        const bal = level.grid.checkBalance();
        updateBalance(bal);
        document.body.className = "game";
        document.getElementById("msg").innerHTML = msg ? msg : "";
        audio.music.play();
    };
    

    /**
     * Updates the balance of the board.
     * @param {Array} torques array of X and Y torques 
     */
    function updateBalance(torques) { 

        // Applies a rotation to the stage
        document.querySelector("#stage").style.transform = 
            `translateZ(30px) rotateX(${level.grid.tiltX}deg) rotateY(${level.grid.tiltY}deg)`; 
            
        // Update gauges
        [gaugeX,gaugeY].forEach((gauge,i) => {
            const clamped = Math.min(50, Math.abs(torques[i]));
            gauge.style.height = `${clamped * 6}%`;
            gauge.style.transform = `rotate(${torques[i] <= 0 ? 0 : 180}deg)`;
            gauge.parentElement.style.backgroundColor = torques[i] == 0 ? "green" : "white"; 
    
            if (clamped < 1) {
                gauge.style.background = "green";
            } else if (clamped < 8) {
                gauge.style.background = "orange";
            } else {
                gauge.style.background = "red";
            }
        });

    }


    /**
     * Marks possible moves around selected cube (if exists).
     * No marks if game is over (won or lost). 
     */
    function markAuthorizedMoves() {
        bcStage.querySelectorAll(".cell.target").forEach(c => c.classList.remove("target"));
        const selected = bcStage.querySelector(".cube.selected");
        if (level.grid.over) {
            selected && selected.classList.remove("selected");
            return;
        };
        
        if (selected) {  
            [[-1,0],[1,0],[0,-1],[0,1]].forEach(dec => {
                let nl = Number(selected.dataset.l) + dec[0];
                let nc = Number(selected.dataset.c) + dec[1];
                //console.log([nl,nc])
                const cell = bcStage.querySelector(`.cell[data-c='${nc}'][data-l='${nl}']`);
                if (cell && !cell.classList.contains("forbidden") && !bcStage.querySelector(`.cube[data-c='${nc}'][data-l='${nl}']`)) {
                    cell.classList.add("target");
                }
            })
        }
    }




    /**
     * Updates the rotation of the scene based on the user's view selection (sliders)
     */
    function updateRotate() {
        document.querySelector("#scene").style.transform = `perspective(700px) rotateX(${rotateX.value}deg) rotateZ(${rotateZ.value}deg) translateZ(20px)`;
    }


    /**
     * Initial rendering of the grid and weights on the stage.
     */
    function createStage(grid) {
        
        bcStage.innerHTML = "";
        
        const bcBoard = document.createElement("div");
        bcBoard.id = "board";
        bcStage.appendChild(bcBoard);

        let gridEl = null;
        
        ["top","left","right","bottom","front","back"].forEach(f => {
            const e = document.createElement("div");
            e.classList.add("gridface",f);
            if (f === "top") {
                e.id = "grid";
                gridEl = e;
            }
            bcBoard.appendChild(e);            
        });

        for (let l = 0; l < grid.size; l++) {
            for (let c = 0; c < grid.size; c++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.dataset.c = c;
                cell.dataset.l = l;
                
                const val = grid.get(l,c);

                if (val < 0) {
                    cell.classList.add("forbidden");
                } 
                else if (val > 0) {
                        bcStage.appendChild(makeCube(val, l, c));
                }
                gridEl.appendChild(cell);
            }
        }
    }
    

    /**
     * Factory for cube creation.
     * @param {number} height the size of the cube
     * @param {number} l the column location of the cube
     * @param {number} c the line location of the cube
     * @returns {Element} the DOM element for the cube
     */
    function makeCube(height, l, c) {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        cube.dataset.l = l;
        cube.dataset.c = c; 
        cube.innerHTML = ["front","left","right","top","back"].map(e => `<div class="cubeface ${e}"></div>`).join("");
        cube.style = `--size: ${Math.floor(10 + height * 10)}px;`;
        moveCube(cube);
        return cube;
    }


    /** 
     * Move the cube element to its actual position 
     * @param {Element} cube the cube element. Must have data-l and data-c attributes. 
     */
    function moveCube(cube) {
        const l = Number(cube.dataset.l);
        const c = Number(cube.dataset.c);
        cube.style.left = `${(c + 0.5) * CUBE_WIDTH + (c) * 0}px`;
        cube.style.top = `${(l + 0.5) * CUBE_WIDTH + (l) * 0}px`; 
    }
    

    /** Menu generation */
    function displayMenu() {
        const scores = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        const page = Math.floor(currentLevel / LEVELS_PER_PAGE);
        const bcMenu = document.querySelector("nav > div:last-child");
        bcMenu.innerHTML = "";
        document.querySelector("nav h3").innerHTML = 
            (page > 0 ? "<button id='btnPrevious'>&larr; easier</button>" : "") +
            (page < 3 ? "<button id='btnNext'>harder &rarr;</button>" : "") + 
            LABELS[page];
        for (let i=0; i < LEVELS_PER_PAGE; i++) {
            const bcLevel = document.createElement("div");
            const id = page * LEVELS_PER_PAGE + i;
            bcLevel.dataset.score = scores[id] || 0;
            bcLevel.dataset.id = id+1;
            bcMenu.appendChild(bcLevel);
        }
        document.body.className = "level";
    }

    

    /**
     * Display a popup whose content depends on the current level state. 
     * in game --> pause menu
     * victory 
     * defeat
     */
    function showPopup() {
        const msg = document.querySelector("aside div");
        if (level.grid.over > 0) {
            let score = (level.min == level.moves) ? 3 :
                        (level.min*2 > level.moves) ? 2: 
                        1;
            if (score == 3 && level.hint) {
                score = 1;
            }
            msg.innerHTML = `<h4>Balance restored!<br>${"&#11088; ".repeat(score)}${"<span style='filter: grayscale(1);'>&#11088; </span>".repeat(3-score)}</h4><p><button id='btnRestart'>Restart</button><button id="btnBack">Menu</button>${currentLevel+1 < LEVELS.size ? '<button id="btnNext">Next level</button></p>' : ''}`;
            const scores = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            if (!scores[currentLevel] || score > scores[currentLevel]) {
                scores[currentLevel] = score;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
            }
            audio.victory.play();
        }
        else if (level.grid.over < 0) {
            msg.innerHTML = `<h4>You lost!</h4>
                            <p style="margin-bottom: 40px;">The board overturned!</p>
                            <p>
                                <button id='btnRestart'>Restart</button>
                                <button id="btnBack">Menu</button>
                            </p>`;
            audio.defeat.play();
        }
        else {
            msg.innerHTML = `<h4>Game paused<h4><button id="btnClose">&#x274C;</button><p><button id='btnRestart'>Restart</button><button id='btnHint'>Show hint</button><button id="btnBack">Menu</button></p>`;
        }
        
        document.querySelector("aside").style.display = "block";
    }


    /*********************************************************************************************** 
                                        EVENT LISTENERS 
    ************************************************************************************************/

    /** Sliders for changing the view */
    rotateX.addEventListener("input", updateRotate);
    rotateZ.addEventListener("input", updateRotate);

    /** Click on the pause button during in-game */
    document.getElementById("btnPause").addEventListener("click", showPopup);

    //** Interactions with ending popup */
    document.querySelector("aside").addEventListener("click", function(e) {
        if (e.target.id == "btnRestart") {
            level.grid.reset();
            level.moves = 0;
            createStage(level.grid);
            const bal = level.grid.checkBalance();
            updateBalance(bal);
            document.querySelector("aside").style.display = "none";
            return;
        }
        if (e.target.id == "btnNext") {
            currentLevel++;
            loadLevel(currentLevel);
            document.querySelector("aside").style.display = "none";
            return;
        }
        if (e.target.id == "btnBack") {
            displayMenu();
            document.querySelector("aside").style.display = "none";
            return;
        }
        if (e.target.id=== "btnHint") {
            level.hint = true;
            document.querySelector("aside").style.display = "none";
            const solution =level.grid.solution();
            //console.log(solution);
            const a = "0.8s ease-in 0s 2 blink";
            document.querySelector(`.cube[data-l="${solution[0].from.l}"][data-c="${solution[0].from.c}"]`).style.animation = a
            document.querySelector(`.cell[data-l="${solution[0].to.l}"][data-c="${solution[0].to.c}"]`).style.animation = a
            setTimeout(() => {
                document.querySelector(`.cube[data-l="${solution[0].from.l}"][data-c="${solution[0].from.c}"]`).style.animation = "";
                document.querySelector(`.cell[data-l="${solution[0].to.l}"][data-c="${solution[0].to.c}"]`).style.animation = "";
            }, 2000);
            return;
        }
        if (e.target.id === "btnClose") {
            document.querySelector("aside").style.display = "none";
        }
    });

    /**
     * Stage clicks - event delegation
     */
    document.querySelector("#stage").addEventListener("click", function(e) {
        const selected = this.querySelector(".cube.selected");
        if (e.target.classList.contains("cubeface")) {
            const cube = e.target.parentElement;
            if (selected && selected != cube) {
                selected.classList.remove("selected");
                markAuthorizedMoves();
            }
            cube.classList.toggle("selected");
            markAuthorizedMoves();
            return;
        }
        if (selected && e.target.classList.contains("target")) {
            const from = { l: Number(selected.dataset.l), c: Number(selected.dataset.c) };
            const to = { l: Number(e.target.dataset.l), c: Number(e.target.dataset.c) };
            
            if (level.grid.move(from, to)) {
                selected.dataset.l = e.target.dataset.l;
                selected.dataset.c = e.target.dataset.c;
                moveCube(selected);
                updateBalance(level.grid.checkBalance());
                markAuthorizedMoves();
                level.moves++;
                audio.move.play();
                if (level.grid.over !== 0) {
                    setTimeout(showPopup, 800);
                }
            }
                
        }
    });
    
    /**
     * Starting of the applicaation - click on the title page to display menu
     */
    document.querySelector("body > header").addEventListener("click", function(e) {
        audio.music.play();
        displayMenu();
    });    

    /**
     * Clicks on the level selection panel
     */
    document.querySelector("nav").addEventListener("click", function(e) {
        if (e.target.id == "btnPrevious" && currentLevel >= 12) {
            currentLevel -= 12;
            displayMenu();
            return;
        }
        if (e.target.id == "btnNext" && currentLevel < 36) {
            currentLevel += 12;
            displayMenu();
            return;
        }
        if (e.target.dataset.id) {
            loadLevel(Number(e.target.dataset.id) - 1);
            return;
        }
    });


    /*** RESPONSIVE DESIGN: scalability of the STAGE block */
    function scaleGame() {
        const container = document.querySelector('main');
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const scale = Math.min(vw, vh) / 700;
        container.style.transform = `translateX(-50%) translateY(-50%) scale(${scale})`;
    }
    scaleGame();
    window.addEventListener('resize', scaleGame);
    window.addEventListener('load', scaleGame);
});
