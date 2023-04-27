import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/contacts/selectors";
import { List } from "./ContactsList.styled";

export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const contactsFilter = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return(
        <List>
            {contactsFilter.map(contact => <ContactsItem key={contact.id} id={contact.id} name={contact.name} number={contact.number}/>)}
        </List>
    )
}