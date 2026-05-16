export async function fetchQuote() {

  try {

    const response =
      await fetch("https://dummyjson.com/quotes");

    const data = await response.json();

    const randomQuote =
      data.quotes[
        Math.floor(Math.random() * data.quotes.length)
      ];

    return {
      quote: randomQuote.quote,
      author: randomQuote.author
    };

  } catch(error) {

    console.log(error);

    return {
      quote: "Keep learning and never give up.",
      author: "Unknown"
    };
  }
}



export async function fetchRandomClients() {

  try {

    const response =
      await fetch(
        "https://randomuser.me/api/?results=5&nat=us"
      );

    const data = await response.json();

    return data.results.map(user => ({

      id:
        Date.now() + Math.random(),

      name:`
        ${user.name.first} ${user.name.last}
      `,

      email:
        user.email,

      company:
        "Freelance Inc.",

      notes:
        ""

    }));

  } catch(error) {

    console.log(error);

    return [];
  }
}
