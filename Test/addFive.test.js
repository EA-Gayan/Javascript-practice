const {default: TestRunner}=require("jest-runner");
const addFive = require(`./addFive`);
test('return the numberplus 5',()=>{
    expect(addFive(1)).toBe(6);
})