/* jshint node:true */

var TTT = function () {
    return {
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
            } else {
                // set the spot
                this.spots[spot[0]][spot[1]] = player;
            }
        }
    };
};

module.exports = TTT;