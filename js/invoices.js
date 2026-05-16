import {
  clients,
  invoices,
  saveInvoices
} from "./data.js";

const form =
  document.getElementById("invoiceForm");

const clientSelect =
  document.getElementById("clientSelect");

const invoiceList =
  document.getElementById("invoiceList");

clients.forEach(client => {

  clientSelect.innerHTML += `
    <option value="${client.id}">
      ${client.name}
    </option>
  `;
});

function renderInvoices(){

  invoiceList.innerHTML = "";

  invoices.forEach(invoice => {

    invoiceList.innerHTML += `
      <div class="card">

        <h3>${invoice.service}</h3>

        <p>Amount: $${invoice.amount}</p>

        <p>Status: ${invoice.status}</p>

      </div>
    `;
  });
}

form.addEventListener("submit", e => {

  e.preventDefault();

  const invoice = {

    id: Date.now(),

    clientId: clientSelect.value,

    service:
      document.getElementById("service").value,

    description:
      document.getElementById("description").value,

    amount:
      Number(document.getElementById("amount").value),

    date:
      document.getElementById("date").value,

    status:"Unpaid"
  };

  invoices.push(invoice);

  saveInvoices();

  renderInvoices();

  form.reset();
});

renderInvoices();
