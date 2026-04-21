
const tabsContainer = document.getElementById("tabs")
const content = document.getElementById("content")



const tabsData = [
    { label: "HTML", content: "HTML is structure" },
    { label: "CSS", content: "CSS is styling" },
    { label: "JS", content: "JS is logic" }
  ];
  
function renderTabs(){
    tabsContainer.innerHTML = tabsData?.map(item=>{
        return `<div class="tab" id="tab">${item.label}</div>`
    }).join("")
}
renderTabs()

const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab=>{   
    tab.addEventListener("click",()=>{
       let selected = tabsData?.find(item=>item.label === tab.innerHTML)
       tabs.forEach(tab=>tab.classList.remove("active"))

       tab.classList.add("active")
       content.innerText = selected.content
    })
})