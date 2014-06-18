
describe('randomNumberService', function () {
    var service;
    var stubMath;

    beforeEach(function () {
        module("hogwartsApp");
        stubMath = sinon.stub(Math, 'random');
        inject(function (randomNumberService) {
            service = randomNumberService;
        });
    });

    afterEach(function () {
        stubMath.restore();
    });

    describe('when generating a random number in range 0 - 3', function () {

        it ('returns 0 for random range 0.0 - 0.249', function() {
            stubMath.returns(0.249);
            expect(service.getInRange(0, 3)).toEqual(0);
        });

        it ('returns 1 for random range 0.25 - 0.49', function() {
            stubMath.returns(0.49);
            expect(service.getInRange(0, 3)).toEqual(1);
        });

        it ('returns 2 for random range 0.5 - 0.749', function() {
            stubMath.returns(0.749);
            expect(service.getInRange(0, 3)).toEqual(2);
        });

        it ('returns 3 for random range 0.75 - 1', function() {
            stubMath.returns(0.99);
            expect(service.getInRange(0, 3)).toEqual(3);
        });

    });

});
