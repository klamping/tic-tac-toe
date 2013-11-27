/* jshint node:true */
describe('tic tac toe', function () {
    var ttt;

    beforeEach(function () {
        // Load the service's module
        module('ttt');


        inject(function (TTT) {
            ttt = new TTT();
        });
    });

    describe('spot', function () {
        it('should return value of spot if no player passed in', function () {
            var spot = [0, 0];

            expect(ttt.spot(spot)).to.equal(null);

            ttt.spots[1][2] = 1;

            expect(ttt.spot([1, 2])).to.equal(1);
        });

        it('should set value of spot if player passed in', function () {
            // should be null to begin with
            expect(ttt.spots[0][0]).to.equal(null);

            // we set the spot
            ttt.spot([0, 0], 0);

            expect(ttt.spots[0][0]).to.equal(0);
        });

        it('should set and get value of spot', function () {
            // should be null to begin with
            expect(ttt.spot([0, 0])).to.equal(null);

            // we set the spot
            ttt.spot([0, 0], 1);

            // should now be player
            expect(ttt.spot([0, 0])).to.equal(1);
        });

        it('should throw error if index out of bounds', function () {
            expect(function(){ttt.spot([4, 2]);}).to.throw(Error);
            expect(function(){ttt.spot([1, 4]);}).to.throw(Error);
        });
    });

    it.skip('should mark spot for player', function () {
        var spot = [0, 0];

        // nothing should be marked initially
        expect(ttt.spot(spot)).to.equal(null);

        // mark the spot
        ttt.set(spot, 0);

        // spot should be marked by player index now
        expect(ttt.get(spot)).to.equal(0);
    });
});


// it('should add a class of "ex" for first player', function () {
//     expect($('#row1col1').className).to.contain("ex");
// });
// add a class of 'oh' on second click
// alternate class additions after each click

// determine a winner
//     when 3 vertical
//     when 3 horizontal
//     when 3 diagonal

// determine a tie when all boxes taken
