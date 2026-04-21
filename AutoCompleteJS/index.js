const data = [
    "Apple",
    "Banana",
    "Grapes",
    "Orange",
    "Pineapple",
    "Mango",
    "Papaya",
    "Strawberry"
  ];

  const input = document.getElementById("search-input")
  const list = document.getElementById("suggestions")

  let filtered = []

  input.addEventListener('input',debounce(async (e)=>{
    console.log(e.target.value)
    let value = e.target.value.toLowerCase()
    if (!value) {
        list.innerHTML = "";
        return;
      }
     filtered = await fetchSuggestions(value);
    console.log(filtered)
    render(); 
  },300)
  )

  function render(){
    list.innerHTML = filtered.map(item=>{
        return `<li>${item}</li>`
    }).join('')
  }

  list.addEventListener("click",(e)=>{
    if (e.target.tagName === "LI") {
        input.value = e.target.innerText; // set selected value
        list.innerHTML = ""; // clear suggestions
      }
  })

  function debounce(fn, delay) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
}

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