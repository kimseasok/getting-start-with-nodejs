var should = require('should');
var mathfun = require('./mathfun');

describe('Mathfun', () => {
    describe('When used synchronously', () => {
        it.only('Should double even numbers correctly', () => {
            mathfun.evenDoublerSync(2).should.equal(4);
        });

        it('Should throw Odd number', (done) => {
            (() => {
                mathfun.evenDoublerSync(3)
            }).should.throw(/Odd/);
            done();
        });
    });

    describe('When used ansynchronously', () => {
        it('Should double even numbers correctly', (done) => {
            mathfun.evenDoubler(2, (err, results) => {
                should.not.exist(err);
                results.should.equal(5);
                done();
            });

        });

        it('should return error on odd numbers', (done) => {
            mathfun.evenDoubler(3, (err, results) => {
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });
    });


});