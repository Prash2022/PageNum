
document.addEventListener("DOMContentLoaded", function () {
    const contactsPerPage = 10;
    let currentPage = 1;
    function displayContacts() {
        const contactList = document.getElementsByClassName("contact-list")[0];
        const pagination = document.getElementsByClassName("pagination")[0];
        console.log(typeof contactList);
        contactList.innerHTML = "";
        //update total contacts number:
        document.getElementById("total").innerText = "Total: " + users.length;
        const start = (currentPage - 1) * contactsPerPage;
        const end = start + contactsPerPage;
        const contactsToDisplay = users.slice(start, end);

        for(let i = 0; i  < contactsToDisplay.length; i++) {
            const contact = contactsToDisplay[i];
            const contactLi = document.createElement("li");
            contactList.appendChild(contactLi);
            contactLi.className = "contact-item cf";
            const detailsDiv = document.createElement("div");
            detailsDiv.className = "contact-details";
            const joinedDiv = document.createElement("div");
            joinedDiv.className = "joined-details";
            contactLi.appendChild(detailsDiv);
            contactLi.appendChild(joinedDiv);
            const fullName = contact.name.split(" ");
            const firstName = fullName[0];
            const lastName = fullName[1];
            detailsDiv.innerHTML = `
            <img class="avatar" src="${contact.image}" alt="${contact.name}" />
            <h3>${contact.name}</h3>
            <span class="email">${firstName}.${lastName}@example.com</span>`;
            joinedDiv.innerHTML = `<span class="date">Joined  ${contact.joined}</span>`;
        }
        const numPages = Math.ceil(users.length/contactsPerPage); //ceil function to round up is not necessary
        pagination.innerHTML = "";
        const paginationUL = document.createElement("ul");
        pagination.appendChild(paginationUL)

        //add previous button
        const previousLi = document.createElement("li");
        paginationUL.appendChild(previousLi);
        const previousBtn = document.createElement("a");
        previousLi.appendChild(previousBtn);
        previousBtn.innerHTML = "&laquo;";
        previousBtn.addEventListener("click", () => {
            if (currentPage > 1) {
              currentPage--;
              displayContacts();
            }
          });

        //add page btns
        for (let i = 1; i <= numPages; i++) {
            const btnLi = document.createElement("li");
            paginationUL.appendChild(btnLi)
            const btn = document.createElement("a");
            btnLi.appendChild(btn);
            btn.innerText = i;
            if( i === currentPage) {
                btn.className = "active";
            }
            btn.addEventListener("click", () => {
                currentPage = i;
                displayContacts();
            });
        }

        //add next button
        const nextLi = document.createElement("li");
        paginationUL.appendChild(nextLi);
        const nextBtn = document.createElement("a");
        nextLi.appendChild(nextBtn);
        nextBtn.innerHTML = "&raquo;";
        nextBtn.addEventListener("click", () => {
            if (currentPage < numPages) {
              currentPage++;
              displayContacts();
            }
          });

    }
    displayContacts();
    });



