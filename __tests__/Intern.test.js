const Intern = require('../lib/Intern');

test("can set up school", () => {
    const flurp = "educated";
    const e = new Intern("Me", 1, "me@me", "educated");
    expect(e.educated) === (flurp);
});

test("can getRole() retrieve Intern", () => {
    const flurp = "Intern";
    const e = new Intern("Me", 1, "me@me", "educated");
    expect(e.getRole()).toBe(flurp);
});

test("can retrieve school", () => {
    const flurp = "myeducated";
    const e = new Intern("Me", 1, "me@me", "myeducated");
    expect(e.getSchool()).toBe(flurp);
});
