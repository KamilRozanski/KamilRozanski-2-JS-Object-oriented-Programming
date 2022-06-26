import {
    Switch
} from "./Switch.js"

const formChecker = new Switch();
const testValue = "Hel"

formChecker.addCase(typeof testValue !== "string", () => {
    console.error("Value is not a string")
})
formChecker.addCase(testValue.length < 5, () => {
    console.error("Value must have at least five characters")
})


console.log(formChecker.isEmpty() + " formEmpty")
console.log(formChecker.isValid())
console.log(formChecker.isEmpty() + " formEmpty")