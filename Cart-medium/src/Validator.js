export class Validator {
    static throwErrorIfValueIsNotAString = (value) => {
        if (typeof value !== "string") {
            throw new Error("It is not a string value")
        }
    }

    static throwErrorIfValueIsNotAInteger = (value) => {
        if (!Number.isInteger(value)) {
            throw new Error("The value must be an integer value")
        }
    }

    static throwErrorIfValueisNotAPositiveNumber = (value) => {
        if (value < 0 && typeof value !== "number" || isNaN(value)) {
            throw new Error("The number must be bigger than zero")
        }
    }

    static throwErrorIfValueHasIncorrectInstance = (item, instance) => {
        if (!item instanceof instance) {
            throw new Error("Incoret class insatnce")
        }
    }

    // static throwErrorIfValueIsNotAnArray(array) {
    //     if (!Array.isArray(array)) {
    //         throw new Error("Input is not Array")
    //     }
    // }

    static throwErrorIfQuantitySmallerThanZeroAndIsNotAIntegerNumber = (quantity) => {
        if (quantity <= 0 && Number.isInteger(quantity)) {
            throw new Error("Quantity must be bigger than 0, and must be a integer number")
        }
    }

    static throwErrorIfDiscountCodeNotExists(providedCode, array) {
        array.every(({
            code,
        }) => {
            if (code !== providedCode) {
                // how can I read providedCode in new Error
                throw new Error(`${providedCode} code not exists`)
            }
        })
    }

    // static throwErrorIfItemAlreadyExists = (item, array) => {
    //     const result = array.some(el => item.id === el.id)
    //     if (result) {
    //         throw new Error("Item already exists")

    //     }
    // }

    static throwErrorIfItemNotExists = (item, array) => {
        const result = array.some(el => item.id === el.id)
        if (!result) {
            throw new Error("Item not exists")
        }
    }

    static throwErrorIfDiscountPercentageIsNotBetweenZeroToOneHundred = (discount) => {
        //correct the method name
        //resp. We are able to set a percentage in CartItem constructor
        if ((discount < 0) || (discount > 100)) {
            throw new Error("Acceptable discount is between 0% and 100%")
        }
    }

    static throwErrorIfDiscountCodeValueIsIncorrect = (discount, totalCartAmount) => {
        console.log(totalCartAmount)
        if ((discount < 0) || (discount > totalCartAmount)) {
            throw new Error(`Acceptable discount is between 0 and  total cart amount ${totalCartAmount} `)
        }
    }
    // dziwny walidator

    static throwErrorIfStringCharactersAreIncorrect = (string) => {
        //nazwa do poprawy
        const regex = /^\w+(\s+\w+)*$/gi;
        if (!regex.test(string)) {
            throw new Error(`You should provide between 2-20 characters. No special characters`)
        }
    }

}

//poprawic nazwy validator z is