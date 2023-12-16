// process thoughts
// 

// creating the array of contacts with five names
let contacts = [
    { id: 1, name: "James Boss", email: "james.boss@gmail.com", phone: "123-456-7890" },
    { id: 2, name: "Oga Mayor", email: "oga.mayor@gmail.com", phone: "567-644-3333" },
    { id: 3, name: "General Sugar", email: "general.sugar@gmail.com", phone: "555-000-4567" },
    { id: 4, name: "John Frontend", email: "john.frontend@gmail.com", phone: "234-111-0000" },
    { id: 5, name: "Sule Ibrahim", email: "sule.ibrahim@gmail.com", phone: "234-252-3890" }
];

display_contacts();


 // Function to add a new contact
 function addContact() {
    
    const nameInput = document.getElementById('name_id');
    const emailInput = document.getElementById('email_id');
    const phoneInput = document.getElementById('phone_id');

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    // Performing the Validation of inputs
    if (!name || !email || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    const newContact = { id: generateId(), name, email, phone };
    contacts.push(newContact);

    displayContacts();
    alert('Contact added successfully!');
}

// Function to display contacts
function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent = contact.name + ' | ' + contact.email + ' | ' + contact.phone;
        contactList.appendChild(listItem);
    });
}

// Logic to search contacts
function searchContacts() {
    const searchInput = document.getElementById('searchInputId').value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchInput) ||
        contact.email.toLowerCase().includes(searchInput) ||
        contact.phone.includes(searchInput)
    );

    displayFilteredContacts(filteredContacts);
}

// Function to display filtered contacts
function displayFilteredContacts(filteredContacts) {
    const contactList = document.getElementById('contactListId');
    contactList.innerHTML = '';

    filteredContacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent = contact.name + ' | ' + contact.email + ' | ' + contact.phone;
        contactList.appendChild(listItem);
    });
}

// Function to edit a contact
function editContact(contactId) {
    const contactToEdit = contacts.find(contact => contact.id === contactId);

    if (!contactToEdit) {
        alert('Contact not found.');
        return;
    }

    const newName = prompt('Enter the new name:', contactToEdit.name);
    const newEmail = prompt('Enter the new email:', contactToEdit.email);
    const newPhone = prompt('Enter the new phone number:', contactToEdit.phone);

    if (newName && newEmail && newPhone) {
        contactToEdit.name = newName;
        contactToEdit.email = newEmail;
        contactToEdit.phone = newPhone;
        displayContacts();
    }
}

// Function to delete a contact
function deleteContact(contactId) {
    const contactIndex = contacts.findIndex(contact => contact.id === contactId);

    if (contactIndex === -1) {
        alert('Contact not found.');
        return;
    }

    contacts.splice(contactIndex, 1);
    displayContacts();
}

// Function to generate a unique ID for new contacts
function generateId() {
    return Math.max(...contacts.map(contact => contact.id), 0) + 1;
}

displayContacts();

function showAllContacts() {
    
    const allContacts = [
        { id: 1, name: "James Boss", email: "james.boss@gmail.com", phone: "123-456-7890" },
    { id: 2, name: "Oga Mayor", email: "oga.mayor@gmail.com", phone: "567-644-3333" },
    { id: 3, name: "General Sugar", email: "general.sugar@gmail.com", phone: "555-000-4567" },
    { id: 4, name: "John Frontend", email: "john.frontend@gmail.com", phone: "234-111-0000" },
    { id: 5, name: "Sule Ibrahim", email: "sule.ibrahim@gmail.com", phone: "234-252-3890" }
        
    ];

    displayContacts(allContacts);
}

function displayContacts(contacts) {
    const contactList = document.getElementById('contactListId');
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>" + contact.name + " - " + contact.email + " - " + contact.phone + "</span>
            <div class="contact-actions">
                <button onclick="editContact(${contact.id})">Edit</button>
                <button onclick="deleteContact(${contact.id})">Delete</button>
            </div>
        `;
        contactList.appendChild(listItem);
    });
}

