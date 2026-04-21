const tabsData = [
    { label: "HTML", content: "HTML is structure" },
    { label: "CSS", content: "CSS is styling" },
    { label: "JS", content: "JS is logic" }
];
let accordianClicked = "HTML"
const accordianContainer = document.getElementById("accordianContainer")
function renderData() {
   
    accordianContainer.innerHTML = tabsData?.map(item => {
        const isActive = accordianClicked === item.label;
        return `<div id="accordian" data-label="${item.label}" class="accordian">
         ${item.label}
           ${isActive ? `<div>${item.content}</div>` : ""}
         </div>`
    }).join("")
}
renderData()

let accordian = document.querySelectorAll('.accordian')


accordianContainer.addEventListener("click", (e) => {
    const item = e.target.closest(".accordian");
    console.log(item.dataset.label,"ss")

    if (!item) return;

    accordianClicked = item.dataset.label;
    renderData();
  });
