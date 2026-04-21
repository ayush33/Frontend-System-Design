let list = document.getElementById('list')

async function fetchSuggestions(query) {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await res.json();
  
      return data.products.map(p => p.title);
      
    } catch (err) {
      console.error("API error:", err);
      return [];
    }
  }

