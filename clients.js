import {
  clients,
  saveClients
} from "./data.js";

import {
  fetchRandomClients
} from "./utils.js";

const form =
  document.getElementById("clientForm");

const clientList =
  document.getElementById("clientList");

function renderClients() {

  clientList.innerHTML = "";

  clients.forEach((client) => {

    const row =
      document.createElement("tr");

    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.company}</td>

      <td>
        <button class="delete-btn"
        data-id="${client.id}">
        Delete
        </button>
      </td>
    `;

    clientList.appendChild(row);
  });

  setupDeleteButtons();
}

function setupDeleteButtons() {

  const deleteButtons =
    document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const id =
        Number(button.dataset.id);

      const index =
        clients.findIndex(
          (client) => client.id === id
        );

      if(index !== -1){

        clients.splice(index, 1);

        saveClients();

        renderClients();
      }
    });
  });
}

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const company =
    document.getElementById("company").value;

  const notes =
    document.getElementById("notes").value;

  if(name === "" || email === ""){

    alert("Please fill all required fields");

    return;
  }

  const newClient = {

    id: Date.now(),

    name,

    email,

    company,

    notes
  };

  clients.push(newClient);

  saveClients();

  renderClients();

  form.reset();
});

async function init() {

  if(clients.length === 0){

    const apiClients =
      await fetchRandomClients();

    clients.push(...apiClients);

    saveClients();
  }

  renderClients();
}

init();