import {
    Validator
} from "./Validator.js"
import {
    Contact
} from "./Contact.js";
import {
    Group
} from "./Group.js";



export class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
    constructor() {
        this.allContacts = []
        this.allGroup = []

    }

    addContactToList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        this.allContacts.push(contact)
    }

    removeContactFromList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        this.allContacts = this.allContacts.filter(el => el.id !== contact.id)
        //usuwac po ID?
    }
    changeFirstName = (contact, firstName) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(firstName)
        Validator.isEmptyString(firstName)
        contact.changeFirstName(firstName)
    }
    changeLastName = (contact, lastName) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(lastName)
        Validator.isEmptyString(lastName)
        contact.changeLastName(lastName)
    }

    changeEmail = (contact, email) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(email)
        Validator.isEmptyString(email)
        Validator.checkEmail(email)
        contact.changeEmail(email)
    }

    searchContact = (contactDetails) => {
        Validator.isEmptyString(contactDetails)
        Validator.isString(contactDetails)
        Validator.isEmptyString(contactDetails)
        const foundContacts = this.allContacts.filter(obj => {
            for (const el in obj) {
                if (typeof obj[el] !== "function" && obj[el] === contactDetails) {
                    return obj[el]
                }
            }
        })
        //Why return dosen't show the foundContacts Arr in console
        return foundContacts.length === 0 ? new Error("Contact does not exist") : foundContacts
    }

    showAllContacts = () => {
        //Why return dosen't show the this.allContacts Arr in console
        return this.allContacts
    }

    addGroup = (group) => {
        Validator.isInstanceOfClass(group, Group)
        this.allGroup.push(group)
    }
    removeGroup = (groupID) => {
        Validator.isString(groupID)
        Validator.isEmptyString(groupID)
        // console.log(this.allGroup)
        return this.allGroup = this.allGroup.filter(el => {
            // console.log(el.groupID, groupID)
            if (el.groupID !== groupID) {
                throw new Error(`The group ID not exist`)
            }
        })
    }

    changeGroupName = (newName, group) => {
        Validator.isInstanceOfClass(group, Group)
        Validator.isString(newName)
        Validator.isEmptyString(newName)
        group.changeGroupName = newName
    }

    showAllGroups = () => {
        //Why return dosent show the this.allContacts Arr in console
        return this.allGroup
    }
}























// class Store {
//     constructor(paymentProcessor) {
//         this.paymentProcessor = paymentProcessor
//     }

//     pay() {
//         return `
//             $ {
//                 this.paymentProcessor.pay(2, 20)
//             }
//             `
//     }
// }

// class AllegroPay {
//     constructor(user) {
//         this.user = user
//     }
//     pay(quantity, price) {
//         return `
//             $ {
//                 this.user
//             }
//             made a payment $ {
//                 quantity * price
//             }
//             PLN `
//     }
// }

// class AllegroPaymentProcessor {
//     constructor(user) {
//         this.allegroPay = new AllegroPay(user)
//     }

//     pay(quantity, price) {
//         return this.allegroPay.pay(quantity, price)
//     }
// }


// class MBankPay {
//     constructor(user) {
//         this.user = user
//     }
//     pay(quantity, price) {
//         return `
//             $ {
//                 this.user
//             }
//             made a payment by mBank $ {
//                 (quantity * price) * 100
//             }
//             groszy `
//     }

// }
// class MBankPaymentProcessor {
//     constructor(user) {
//         this.mBank = new MBankPay(user)
//     }

//     pay(quantity, price) {
//         return this.mBank.pay(quantity, price)
//     }
// }


// const store = new Store(new MBankPay("kamil"))