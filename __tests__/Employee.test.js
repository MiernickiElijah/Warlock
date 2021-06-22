const Employee = require("../lib/Employee")

test("is employee an object", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("can set name", () => {
    const name = "Eli";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("can set id", () => {
    const id = 1;
    const e = new Employee(id);
    expect(e.id) === (id);
});

test("can set email", () => {
    const email = "here@here.com";
    const e = new Employee(email);
    expect(e.email) === (email);
});
