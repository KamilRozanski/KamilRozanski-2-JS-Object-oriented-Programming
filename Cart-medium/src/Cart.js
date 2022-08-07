import {
    Item
} from "./Item.js";
import {
    CartItem
} from "./CartItem.js";
import {
    Validator
} from './Validator.js';

import {
    v4 as uuidv4
} from 'uuid';

// Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// Ma umożliwiać: 
// - dodawanie/usuwanie przedmiotów do/z koszyka
// - zmianę ilości produktu w koszyku
// - podliczać wartość koszyka uwzględniajac rabaty

export class Cart {
    constructor() {
        this.cart = []
        this.quantity = 0
        this.discountPercent = 0
        this.discountCode = []
        this.discountCodeAmount = 0
        this.totalCartAmount = 0;
        this.id = uuidv4()
    }

    addCartItem = (cartItem, quantity = 1) => {

        //w cart produkt pokazuje jako tablice[item]??
        Validator.isInstanceOf(cartItem, CartItem)
        Validator.throwErrorIfItemExists(cartItem, this.cart)

        this.cart.push(cartItem)
        cartItem.changeQuantity(quantity) //Czy towrzyc do tego oddzielną metode ??
        this.quantity++
    }

    removeCartItem = (cartItem) => {
        Validator.isInstanceOf(cartItem, CartItem)
        Validator.throwErrorIfItemNotExists(cartItem, this.cart)

        this.cart = this.cart.filter(el => el.id !== cartItem.id)
        this.quantity--
    }

    changeCartItemQuantity = (cartItem, quantity) => {
        Validator.isInstanceOf(cartItem, CartItem)
        Validator.isNumber(quantity)
        Validator.isQuantitySmallerThanZero(quantity)

        quantity !== 0 ? cartItem.changeQuantity(quantity) : this.removeItem(cartItem)
    }

    setCartDiscountPercent = (cartDiscount) => {
        Validator.isNumber(cartDiscount)
        Validator.checkDiscountValue(cartDiscount)

        this.discountPercent = cartDiscount
    }

    setDiscountCode = (code, discountCodeAmount) => {
        Validator.isString(code)
        Validator.isNumber(discountCodeAmount)
        Validator.checkDiscountCodeAmount(discountCodeAmount, this.getAmountSummary())
        this.discountCode.push({
            code,
            discountCodeAmount
        })
    }

    applayDiscountCode = (providedCode) => {
        Validator.isString(providedCode)
        Validator.throwErrorIfDiscountCodeNotExists(providedCode, this.discountCode)
        this.discountCode.find(({
            code,
            discountCodeAmount
        }) => {
            if (code === providedCode) {
                this.discountCodeAmount = discountCodeAmount
            }
        })
    }

    getDiscountPercentAmount = () => {
        return this.totalCartAmount * this.discountPercent / 100
    }

    getAmountSummary = () => {
        this.totalCartAmount = this.cart.reduce((acc, cartItem) => {
            return (acc + cartItem.getAmountSummary())
        }, 0)
        this.totalCartAmount = this.totalCartAmount - this.getDiscountPercentAmount() - this.discountCodeAmount
        return Math.round(this.totalCartAmount)
    }
}