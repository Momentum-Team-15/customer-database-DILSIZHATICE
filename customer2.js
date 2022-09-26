
const customerContainer = document.querySelector("#customerContainer")
function buildDirectory(customerArray) {
    for (let customer of customerArray) {
        let customerDiv = document.createElement("div");
        customerDiv.classList.add("customer");

        let picture = document.createElement("img");
        picture.src = `${customer.picture.large}`;
        customerDiv.appendChild(picture);
        customerContainer.appendChild(customerDiv);
        
        let email = document.createElement("h3");
        email.innerText = `${customer.email}`;
        customerDiv.appendChild(email);
        customerContainer.appendChild(customerDiv);

        let name = document.createElement("h2");
        name.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
        customerDiv.appendChild(name);
        customerContainer.appendChild(customerDiv);

        let location = document.createElement("p");
        location.innerText = `${customer.location.street.number} ${customer.location.street.name} ${customer.location.city}, ${nameToAbbr(customer.location.state)}`;
        customerDiv.appendChild(location); 
        customerContainer.appendChild(customerDiv);

        let dob = document.createElement("p");
        dob.classList.add("dob");
        dob.innerText = `DOB: ${moment(customer.dob.date).format("MMMM Do YYYY")}`;
        customerDiv.appendChild(dob);
        customerContainer.appendChild(customerDiv);
        

        let registered = document.createElement("p");
        registered.classList.add("registered");
        registered.innerText = `Customer since ${moment(customer.registered.date).format("MMMM Do YYYY")}`;
        customerDiv.appendChild(registered);
        customerContainer.appendChild(customerDiv);

        
    }
    
}
buildDirectory(customers);

