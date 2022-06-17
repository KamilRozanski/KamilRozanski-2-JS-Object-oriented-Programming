import {
    Validator
} from "./Validator.js"
`use strict`

export class Switch {
    constructor() {
        this.cases = [];
    }

    add = (condition, callback) => {
        Validator.isBoolean(condition)
        Validator.isFunction(callback)
        this.cases.push({
            condition,
            callback
        })
    }
    isValid() {
        const resultArr = this.cases.filter(el => {
            if (el.condition) {
                el.callback()
                return el
            }
        })
        this.cases = []
        return resultArr.length === 0
    }


    isEmpty = () => {
        return this.cases.length === 0
    }
}