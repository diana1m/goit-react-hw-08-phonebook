import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const contactsFilter = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return(
        <ul>
            {contactsFilter.map(contact => <ContactsItem key={contact.id} id={contact.id} name={contact.name} number={contact.number}/>)}
        </ul>
    )
}