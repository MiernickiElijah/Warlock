const Engineer = require('../lib/Engineer');

test("can set up github", () => {
    const flurp = "myGitHub";
    const e = new Engineer("Me", 1, "me@me", "myGitHub");
    expect(e.github).toBe(flurp);
});

test("can getRole() retrieve Engineer", () => {
    const flurp = "Engineer";
    const e = new Engineer("Me", 1, "me@me", "myGitHub");
    expect(e.getRole()).toBe(flurp);
});

test("can retrieve github", () => {
    const flurp = "myGitHub";
    const e = new Engineer("Me", 1, "me@me", "myGitHub");
    expect(e.getGitHub()).toBe(flurp);
});