
let data = ["Ayush", "Tushar", "Akshay", "Ankit"]

export async function getData(searchItem){
    if (!searchItem) return [];

    const response = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(searchItem)}&limit=8&fields=title`
    );
    const data = await response.json();
  
    // extract just the title strings
    return data.docs.map((book) => book.title);
}