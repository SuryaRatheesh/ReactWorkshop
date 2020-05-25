import React, { Component } from 'react';


const contacts = [
    {
        name: "Shinto Thomas",
        email: "sthomas@suyati.com"
    },
    {
        name: "Praphul",
        email: "pnangeelil@suyati.com"
    },
    {
        name: "Shamnad V A",
        email: "sabdul@suyati.com"
    }
];


const ContactList = (props) => {

    const contact = props.contact;

    return <table style={style}>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {contact.map((contact, i) => {
                return <tr key={i}>
                    <td> {contact.name}</td>
                    <td>{contact.email}</td>
                </tr>
            })}
        </tbody>
    </table>
};


const contactData = <section id="contact-list">
    <h1>Contacts</h1>
    <ContactList contact={data}></ContactList>
</section>

const props = {
    contact: data
}
ReactDOM.render(contactData, document.getElementById("react-container"));
