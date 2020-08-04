
QUnit.module('findLongestWord', function () {
    QUnit.test('should find the longest word ', function (assert) {
        assert.equal(findLongestWord(["England", "Lithuania", "Congo"]), "Lithuania", "Found the longest word");
        assert.equal(findLongestWord(["apple", "wine", "cheesecake"]), "cheesecake", "Found the longest word");
    });
    QUnit.test('should throw error when no parameters', function (assert) {
        assert.throws(function () {
            findLongestWord();
        });
    });
});
