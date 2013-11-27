var TTT = {
    spots: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    spot: function (spot, player) {
        var row = spot[0];
        var col = spot[1];

        if (row >= this.spots[0].length ||
            col >= this.spots.length) {
            throw new Error('Spot out of bounds');
        }

        if (isNaN(player)) {
            // return the spot
            return this.spots[spot[0]][spot[1]];
        } else if (this.spots[spot[0]][spot[1]] === null) {
            // set the spot if not already set
            this.spots[spot[0]][spot[1]] = player;
        }
    },
    isFinished: function () {
        var isFinished = false;

        isFinished = this.checkRows();
        isFinished = isFinished || this.checkCols();
        isFinished = isFinished || this.checkDiags();

        console.log('isFinished', isFinished);

        return isFinished;
    },
    checkRows: function () {
        var hasWinner = false;
        var x = 0;

        while (!hasWinner && x < 3) {
            hasWinner =
                this.spots[x][0] !== null &&
                (this.spots[x][0] === this.spots[x][1] &&
                this.spots[x][1] === this.spots[x][2]);
            x++;
        }

        return hasWinner;
    },
    checkCols: function () {
        var hasWinner = false;
        var y = 0;

        while (!hasWinner && y < 3) {
            hasWinner =
                this.spots[0][y] !== null &&
                (this.spots[0][y] === this.spots[1][y] &&
                this.spots[1][y] === this.spots[2][y]);
            y++;
        }

        return hasWinner;
    },
    checkDiags: function () {
        var hasWinner = false;

        hasWinner =
            this.spots[1][1] !== null &&
            ((this.spots[0][0] === this.spots[1][1] &&
            this.spots[1][1] === this.spots[2][2]) ||
            (this.spots[0][2] === this.spots[1][1] &&
            this.spots[1][1] === this.spots[2][0]));

        return hasWinner;
    },
    restart: function () {
        this.spots = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
};

var ttt = Object.create(TTT);

var markerClasses = ['ex', 'oh'];

window.currentPlayer = 0;

window.play = function (spot, el) {
    ttt.spot(spot, window.currentPlayer);

    el.className = el.className + ' ' + markerClasses[window.currentPlayer];

    // set marker class


    // switch player
    window.currentPlayer = 1 - window.currentPlayer;

    if (ttt.isFinished()) {
        alert('winner!');
    }
};