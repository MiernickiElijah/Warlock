const Manager = require('../lib/Manager');


test("can getRole() retrieve Manager", () => {
    const flurp = "Manager";
    const e = new Manager("Me", 1, "me@me", "myofficeNum");
    expect(e.getRole()).toBe(flurp);
});

test("can set officeNum", () => {
    const officeNum = 2;
    const e = new Manager("Me", 1, "me@me", officeNum);
    expect(e.officeNum).toBe(officeNum);
});

test("can getOffice() retrieve officeNum", () => {
    const officeNum = 2;
    const e = new Manager("Me", 1, "me@me", officeNum);
    expect(e.getOfficeNum()) === (officeNum);
});