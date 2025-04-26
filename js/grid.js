
const INTENSITY = 1;

export class Grid {

    /**
     * Builds a new grid.
     * @param {number} size number of 
     * @param {Array} forbidden array of forbidden areas of the form [line,col]
     * @param {Array} weights array of inital weights of the form [line,col,weight]
     */
    constructor(size, forbidden, weights) {
        this.size = size; 
        this.over = 0;
        this.forbidden = forbidden;
        this.weights = weights;        
        this.reset();
    }

    /**
     * Resets the grid to the initial configuration.
     */
    reset() {
        this.grid = Array.from({ length: this.size }, () => Array(this.size).fill(0));
        this.weights.forEach(item => {
            this.grid[item.l][item.c] = item.weight;
        });  
        this.forbidden.forEach(item => {
            this.grid[item.l][item.c] = -1;
        });
        this.over = 0;
    }


    /**
     * Checks the balance of the current board.
     * @returns true if the current weights alignment balances the weights
     */
    checkBalance() {

        const cx = Math.floor(this.size / 2);
        const cy = Math.floor(this.size / 2);
        let torqueX = 0;
        let torqueY = 0;
        
        this.over = 0;

        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.grid[y][x] > 0) {
                    const dx = x - cx;
                    const dy = y - cy;
                    torqueX += this.grid[y][x] * dx;
                    torqueY += this.grid[y][x] * dy;
                }
            }
        }
        if (torqueX == 0 && torqueY == 0) {
            this.over = 1;  // victory
        }
        
        const boardWidth = 300; // en pixels
        const boardAltitude = 28; // en pixels sous le plateau
        
        this.tiltX = torqueY * -INTENSITY; // Modifier l'intensité de l'inclinaison en X
        this.tiltY = torqueX * INTENSITY;  // Modifier l'intensité de l'inclinaison en Y

        const radX = this.tiltX * Math.PI / 180;
        const radY = this.tiltY * Math.PI / 180;
            
        // Approximation de la descente maximale d’un coin
        const halfDiagonal = Math.sqrt(2 * Math.pow(boardWidth / 2, 2)); // diagonale du plateau / 2
            
        // Estimation du décalage vertical du coin inférieur (simple)
        const offset = Math.abs(Math.sin(radX)) * halfDiagonal + Math.abs(Math.sin(radY)) * halfDiagonal;
            
        if (offset > boardAltitude) {
            this.over = -1;       
        }
        return [torqueY,torqueX];
    }


    /**
     * Move the object in position "from" to position "to"
     * @param {Object} from source position { l, c }
     * @param {Object} to destination position { l, c }
     * @returns true if the move was made, false otherwise
     */
    move(from, to) {
        if (this.grid[from.l][from.c] <= 0) {
            return false;
        }
        if (this.grid[to.l][to.c] !== 0) {
            return false;
        }
        if (Math.abs(from.l - to.l) + Math.abs(from.c - to.c) !== 1) {
            return false;
        }
        this.grid[to.l][to.c] = this.grid[from.l][from.c];
        this.grid[from.l][from.c] = 0;
        return true;
    }


    /**
     * Retrieves the value in the grid
     * @param {number} l line   
     * @param {number} c column
     * @returns 
     */
    get(l,c) {
        return this.grid[l] ? this.grid[l][c] : null;
    }


    /** Computes the shortest move sequence to reach equilibrium */
    solution() {
        let res = [];

        function getPossibleMoves(grid) {
            const r = [];
            for (let l=0; l < grid.length; l++) {
                for (let c=0; c < grid[l].length; c++) {
                    if (grid[l][c] > 0) {
                        [[0,1],[0,-1],[-1,0],[1,0]].forEach(d => {
                            const to = { l: l+d[0], c: c+d[1] };
                            if (grid[to.l] && grid[to.l][to.c] == 0) {
                                r.push({from: {l, c}, to });
                            }
                        });
                    }
                }
            }
            return r;
        }

        // save the current state of the grid
        const save = JSON.stringify(this.grid);
        const states = {};
        states[save] = [];

        let toRevise = [save];
        while (res.length == 0 && toRevise.length > 0) {
            const newToRevise = [];
            while (toRevise.length > 0) {
                const key = toRevise.shift();
                const moves = getPossibleMoves(JSON.parse(key));
                moves.forEach(m => {
                    this.grid = JSON.parse(key);
                    if (this.move(m.from, m.to)) {
                        this.checkBalance();
                        const bal = this.over;
                        if (bal >= 0) {
                            const newState = JSON.stringify(this.grid);
                            if (!states[newState] || states[newState].length > states[key].length+1) {
                                states[newState] = [m, ...states[key]];
                                newToRevise.push(newState);
                            }
                            if (bal > 0) {
                                // victory
                                res = [m, ...states[key]].reverse();
                            }
                        }
                    }
                });
            }
            toRevise = newToRevise;
        }

        // restores the previous state of the grid
        this.grid = JSON.parse(save);
        this.checkBalance();

        return res;
    }

}


