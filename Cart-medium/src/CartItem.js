import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator.js';
import {
    Item
} from "./Item.js";




// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać: 
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii ???
// - zmianę nazwy, ceny lub rabatu

export class CartItem {
    constructor(item, discountPercentage = 0) {
        Validator.throwErrorIfValueHasIncorrectInstance(item, Item)
        Validator.throwErrorIfValueisNotAPositiveNumber(discountPercentage)
        Validator.throwErrorIfDiscountPercentageIsNotBetweenZeroToOneHundred(discountPercentage)

        this.item = item
        this.discountPercentage = discountPercentage
        this.quantity = 1
        this.id = uuidv4()
    }

    changeDiscountPercente = (newDiscount) => {
        // dodac domyslna wartosc 
        Validator.throwErrorIfValueisNotAPositiveNumber(newDiscount)
        Validator.throwErrorIfDiscountValueIsIncorrect(newDiscount)

        this.discountPercent = discount
    }


    changeQuantity = (newQuantity) => {
        Validator.throwErrorIfValueisNotAPositiveNumber(newQuantity)
        Validator.throwErrorIfQuantitySmallerThanZeroAndIsNotAIntegerNumber(newQuantity)

        return this.quantity = newQuantity
    }


    getDiscountAmount = () => {
        return this.item.getPrice() * this.discountPercent / 100
    }

    getTotalAmount = () => {
        //poprawic nazwenictwo
        return (this.item.getPrice() - this.getDiscountAmount()) * this.quantity
    }
}