export const LABELS = [
  "Tutorial", "Wobbly Steps", "Shaky Business", "Tipping Point", "Masters of Balance"
];

export const LEVELS = [];
  // tutorial 
LEVELS[0] = { "size":5,"forbidden":[],"weights":[{"l":1,"c":3,"weight":1}] };
LEVELS[0].msg = "Click on the cube to move it to the center and balance the board.";
LEVELS[1] = {"size":5,"forbidden":[],"weights":[{"l":0,"c":1,"weight":1},{"l":4,"c":4,"weight":1}]};
LEVELS[1].msg = "To balance a board with two identical cubes, create symmetry.";
LEVELS[2] = {"size":5,"forbidden":[{l:4,c:3},{l:0,c:0}],"weights":[{"l":0,"c":1,"weight":1},{"l":4,"c":4,"weight":1}]};
LEVELS[2].msg = "Sometimes, forbidden cells will force you to find alternative solutions.";
LEVELS[3] = {"size":5,"forbidden":[],"weights":[{"l":1,"c":3,"weight":1},{"l":3,"c":2,"weight":2}]};
LEVELS[3].msg = "Bigger cubes are heavier. Gauges measure imbalance.";
LEVELS[4] = {"size":5,"forbidden":[],"weights":[{"l":0,"c":3,"weight":1},{"l":3,"c":2,"weight":3},{"l":1,"c":1,"weight":2}]};
LEVELS[4].msg = "There exist three different sizes of cubes.";
LEVELS[5] = {"size":5,"forbidden":[],"weights":[{"l":0,"c":0,"weight":2},{"l":4,"c":0,"weight":2},{"l":3,"c":4,"weight":1}]};
LEVELS[5].msg = "Avoid unbalancing the board too much, or you lose.";
LEVELS[6] = {"size":5,"forbidden":[{"l":1,"c":1},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":3}],"weights":[{"l":0,"c":4,"weight":1},{"l":2,"c":2,"weight":1},{"l":4,"c":2,"weight":2}]};
LEVELS[6].msg = "Your score depends on the number of moves you used to balance the board.";
LEVELS[7] = {"size":5,"forbidden":[],"weights":[{"l":0,"c":3,"weight":1},{"l":3,"c":0,"weight":1},{"l":4,"c":3,"weight":3}]};
LEVELS[7].msg = "The pause menu gives you access to an hint, indicating the next move.";
LEVELS[8] = {"size":5,"forbidden":[{"l":2,"c":1},{"l":3,"c":3}],"weights":[{"l":1,"c":0,"weight":1},{"l":4,"c":1,"weight":1}]};
LEVELS[8].msg = "You can solve this puzzle in 4 moves.";
LEVELS[9] = {"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":3,"c":4}],"weights":[{"l":2,"c":2,"weight":1},{"l":4,"c":4,"weight":1}]};
LEVELS[9].msg = "You can use the sliders to change the scene orientation.";
LEVELS[10] = {"size":5,"forbidden":[],"weights":[{"l":0,"c":0,"weight":1},{"l":1,"c":1,"weight":1},{"l":2,"c":2,"weight":1},{"l":3,"c":2,"weight":1},{"l":3,"c":3,"weight":1},{"l":4,"c":0,"weight":1}]};
LEVELS[10].msg = "The number of cubes can be potentially quite high...";
LEVELS[11] = {"size":5,"forbidden":[{"l":0,"c":1},{"l":1,"c":4},{"l":3,"c":3},{"l":4,"c":0}],"weights":[{"l":2,"c":0,"weight":1},{"l":2,"c":4,"weight":1},{"l":4,"c":4,"weight":1}]};
LEVELS[11].msg = "Last tutorial level, before things get harder.";

// easy 
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":1},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":3}],"weights":[{"l":4,"c":1,"weight":2},{"l":4,"c":4,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":1},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":3}],"weights":[{"l":0,"c":2,"weight":1},{"l":3,"c":4,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":1},{"l":2,"c":0},{"l":2,"c":4},{"l":3,"c":3}],"weights":[{"l":2,"c":2,"weight":2},{"l":3,"c":4,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":1},{"l":2,"c":4},{"l":4,"c":2}],"weights":[{"l":0,"c":4,"weight":2},{"l":3,"c":1,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":2,"c":0},{"l":2,"c":4},{"l":4,"c":2}],"weights":[{"l":3,"c":4,"weight":2},{"l":4,"c":1,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":2,"c":0},{"l":2,"c":4},{"l":4,"c":2}],"weights":[{"l":0,"c":0,"weight":2},{"l":1,"c":4,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":0},{"l":0,"c":4},{"l":2,"c":2},{"l":4,"c":0},{"l":4,"c":4}],"weights":[{"l":1,"c":0,"weight":1},{"l":3,"c":1,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":0},{"l":0,"c":4},{"l":2,"c":2},{"l":4,"c":0},{"l":4,"c":4}],"weights":[{"l":2,"c":3,"weight":1},{"l":3,"c":3,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":0},{"l":0,"c":4},{"l":2,"c":1},{"l":2,"c":3},{"l":4,"c":0},{"l":4,"c":4}],"weights":[{"l":0,"c":2,"weight":2},{"l":1,"c":2,"weight":1},{"l":3,"c":4,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":0},{"l":0,"c":4},{"l":2,"c":1},{"l":2,"c":3},{"l":4,"c":0},{"l":4,"c":4}],"weights":[{"l":1,"c":0,"weight":1},{"l":3,"c":0,"weight":2},{"l":3,"c":3,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":0},{"l":0,"c":4},{"l":2,"c":1},{"l":2,"c":3},{"l":4,"c":0},{"l":4,"c":4}],"weights":[{"l":1,"c":0,"weight":3},{"l":1,"c":2,"weight":1},{"l":4,"c":3,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":2},{"l":2,"c":0},{"l":2,"c":4},{"l":4,"c":2}],"weights":[{"l":0,"c":3,"weight":1},{"l":2,"c":1,"weight":2},{"l":3,"c":1,"weight":3}]});
// medium 
LEVELS.push({"size":5,"forbidden":[{"l":2,"c":2}],"weights":[{"l":2,"c":3,"weight":3},{"l":2,"c":4,"weight":2},{"l":3,"c":1,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":2,"c":2}],"weights":[{"l":0,"c":4,"weight":3},{"l":3,"c":0,"weight":1},{"l":3,"c":1,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":2},{"l":2,"c":0},{"l":2,"c":2},{"l":2,"c":4},{"l":4,"c":2}],"weights":[{"l":0,"c":3,"weight":3},{"l":4,"c":0,"weight":1},{"l":4,"c":4,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":2},{"l":2,"c":0},{"l":2,"c":2},{"l":2,"c":4},{"l":4,"c":2}],"weights":[{"l":0,"c":0,"weight":1},{"l":0,"c":1,"weight":2},{"l":3,"c":4,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":2},{"l":2,"c":0},{"l":2,"c":2},{"l":2,"c":4},{"l":4,"c":2}],"weights":[{"l":1,"c":3,"weight":1},{"l":3,"c":1,"weight":2},{"l":4,"c":0,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":3},{"l":2,"c":1},{"l":3,"c":3}],"weights":[{"l":1,"c":2,"weight":2},{"l":3,"c":0,"weight":2},{"l":4,"c":1,"weight":1}]});
LEVELS.push({ size: 5, forbidden: [ { l: 0, c: 2 }, { l: 4, c: 2 }, { l: 2, c: 1 }, { l: 2, c: 3 } ], weights: [ { l: 1, c: 1, weight: 3 }, { l: 1, c: 2, weight: 2 }, { l: 2, c: 4, weight: 1 } ]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":2},{"l":2,"c":0},{"l":2,"c":2},{"l":2,"c":4},{"l":4,"c":2}],"weights":[{"l":0,"c":3,"weight":1},{"l":2,"c":1,"weight":2},{"l":3,"c":1,"weight":3}]});
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":1},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":3}],"weights":[{"l":0,"c":4,"weight":1},{"l":1,"c":2,"weight":2},{"l":3,"c":4,"weight":3},{"l":4,"c":0,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":1},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":3}],"weights":[{"l":0,"c":2,"weight":1},{"l":1,"c":4,"weight":3},{"l":3,"c":4,"weight":2},{"l":4,"c":0,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":2,"c":2},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":1,"c":1,"weight":3},{"l":1,"c":2,"weight":1},{"l":4,"c":0,"weight":2},{"l":4,"c":4,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":2,"c":2},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":0,"c":4,"weight":3},{"l":2,"c":4,"weight":2},{"l":4,"c":0,"weight":2},{"l":4,"c":3,"weight":1}]});
// hard 
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":2,"c":2},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":1,"c":3,"weight":2},{"l":3,"c":0,"weight":1},{"l":3,"c":2,"weight":3},{"l":4,"c":2,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":2,"c":2},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":1,"c":1,"weight":2},{"l":3,"c":0,"weight":2},{"l":3,"c":2,"weight":1},{"l":4,"c":4,"weight":3}]});
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":1},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":3}],"weights":[{"l":0,"c":3,"weight":1},{"l":1,"c":4,"weight":2},{"l":3,"c":2,"weight":3},{"l":3,"c":4,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":1},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":3}],"weights":[{"l":0,"c":4,"weight":1},{"l":1,"c":4,"weight":1},{"l":2,"c":0,"weight":2},{"l":3,"c":4,"weight":3}]});
LEVELS.push({"size":5,"forbidden":[{"l":1,"c":2},{"l":2,"c":1},{"l":2,"c":2},{"l":2,"c":3},{"l":3,"c":2}],"weights":[{"l":0,"c":3,"weight":3},{"l":1,"c":3,"weight":1},{"l":1,"c":4,"weight":2},{"l":2,"c":0,"weight":2},{"l":3,"c":0,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":2,"c":2},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":1,"c":3,"weight":2},{"l":3,"c":2,"weight":3},{"l":4,"c":0,"weight":1},{"l":4,"c":2,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":0,"c":4,"weight":3},{"l":2,"c":4,"weight":1},{"l":3,"c":0,"weight":1},{"l":4,"c":2,"weight":3}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":2,"c":2},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":1,"c":4,"weight":1},{"l":2,"c":0,"weight":3},{"l":4,"c":0,"weight":1},{"l":4,"c":4,"weight":3}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":2,"c":2},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":1,"c":4,"weight":3},{"l":2,"c":0,"weight":2},{"l":2,"c":4,"weight":3},{"l":4,"c":0,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":1},{"l":1,"c":0},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":4},{"l":4,"c":3}],"weights":[{"l":1,"c":1,"weight":2},{"l":1,"c":2,"weight":1},{"l":1,"c":4,"weight":3},{"l":4,"c":1,"weight":1},{"l":4,"c":4,"weight":2}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":1},{"l":1,"c":0},{"l":1,"c":3},{"l":3,"c":1},{"l":3,"c":4},{"l":4,"c":3}],"weights":[{"l":0,"c":0,"weight":3},{"l":0,"c":4,"weight":1},{"l":2,"c":1,"weight":2},{"l":2,"c":4,"weight":3},{"l":3,"c":2,"weight":1}]});
LEVELS.push({"size":5,"forbidden":[{"l":0,"c":3},{"l":1,"c":0},{"l":2,"c":2},{"l":3,"c":4},{"l":4,"c":1}],"weights":[{"l":0,"c":2,"weight":1},{"l":0,"c":4,"weight":2},{"l":2,"c":0,"weight":2},{"l":2,"c":1,"weight":3},{"l":3,"c":1,"weight":2},{"l":3,"c":2,"weight":2},{"l":4,"c":0,"weight":1}]});
