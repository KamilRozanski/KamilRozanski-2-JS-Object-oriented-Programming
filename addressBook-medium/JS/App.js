import {
    Contact
} from "./Contact.js";
import {
    Group
} from "./Group.js";
import {
    AddressBook
} from "./AddressBook.js";



const contactOne = new Contact("Kamil", "Róański", "kamil@wp.pl")
const contactTwo = new Contact("Patryk", "Róański", "patryk@mail.com")
const contactThree = new Contact("Dominika", "Rozanska", "dominika@mail.com")
const contactFour = new Contact("Weronika", "Rozanska", "weronika@mail.com")

const males = new Group("males")
males.addContact(contactOne)
males.addContact(contactTwo)
males.addContact(contactThree)

males.removeContact(contactFour)



// console.log(males.checkIfContactExists(contactOne));

const females = new Group("females")
// females.addContact(contactThree)
// females.addContact(contactFour)


// females.addContact(contactThree)

// console.log(males.showAllGroupContacts())
// console.log(females.showAllGroupContacts())




const addressBook = new AddressBook()

// addressBook.addContactToList(contactOne)
// addressBook.addContactToList(contactTwo)
// addressBook.addContactToList(contactThree)
// addressBook.addContactToList(contactFour)

// addressBook.addGroup(males)
// addressBook.addGroup(females)
// addressBook.changeFirstName(contactOne, "Roman")
// addressBook.changeLastName(contactOne, "Romański")
// addressBook.changeEmail(contactOne, "Romański@roman.pl")
// console.log(addressBook.removeGroup("1"))
// console.log(addressBook.showAllContacts())
// console.log(addressBook.searchContact("Kamil"))