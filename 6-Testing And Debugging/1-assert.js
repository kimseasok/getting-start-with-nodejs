var assert = require('assert');
var mathfun = require('./mathfun');

assert.equal(mathfun.evenDoublerSync(2), 4);

assert.throws(() => {
    mathfun.evenDoublerSync(3);
}, /Odd/);

mathfun.evenDoubler(2, (err, results) => {
    assert.ifError(err);
    assert.equal(results, 5, "evenDoubler failed on even number");
});

mathfun.evenDoubler(3, (err, results) => {
    assert.notEqual(err, null);
});