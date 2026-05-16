import {
  clients,
  invoices
} from "./data.js";

import {
  fetchQuote
} from "./utils.js";

document.getElementById("totalClients")
.innerText = clients.length;

document.getElementById("totalInvoices")
.innerText = invoices.length;

const revenue =
  invoices.reduce(
    (sum, invoice) =>
      sum + invoice.amount,
    0
  );

document.getElementById("totalRevenue")
.innerText = "$" + revenue;

async function loadQuote(){

  const data = await fetchQuote();

  document.getElementById("quote")
    .innerText = data.quote;

  document.getElementById("author")
    .innerText = data.author;
}

loadQuote();
