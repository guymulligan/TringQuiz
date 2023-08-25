const handleRestartQuiz = require('./handleRestartQuiz');

test('the page runs', () => {
    expect(handleRestartQuiz).toBe(true);
});
