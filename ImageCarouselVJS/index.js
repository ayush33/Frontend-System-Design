
const imagesData = [{ id: 1, src: "https://fastly.picsum.photos/id/884/200/300.jpg?hmac=VnWK-J-znCMSx2FSelz3LtT1DXhrxRLtzsX6-hkZDJk" },
{ id: 2, src: "https://fastly.picsum.photos/id/718/200/200.jpg?hmac=__zLj3h3wgMNm3OM6xAOydBYFAw3V-LoIymGCluM0mY" },
{ id: 3, src: "https://fastly.picsum.photos/id/884/200/300.jpg?hmac=VnWK-J-znCMSx2FSelz3LtT1DXhrxRLtzsX6-hkZDJk" }]

let selectedImage = 1
let imageContainer = document.getElementById("image")
let circleContainer = document.getElementById("circle")


let left = document.getElementById("left")
let right = document.getElementById("right")


function renderData() {
    imageContainer.innerHTML = imagesData.map(item => {
        return `${selectedImage === item.id ? `<img src=${item.src}></img>` : ""}`
    }).join("")

    circleContainer.innerHTML = imagesData.map((item) => {
        const isActive = selectedImage === item.id;
        return `<div class="dot ${isActive ? "active" : ""}"></div>`;
    }).join("")
}
renderData()

left.addEventListener("click",()=>{
    if(selectedImage===1){
         selectedImage = 1
    }else{
        selectedImage--
    }
    renderData()
})

right.addEventListener("click",()=>{
    if(selectedImage===3){
         selectedImage = 3
    }else{
        selectedImage++
    }
    renderData()

})

// let timerId;
// function startSlider() {
//     timerId = setInterval(() => {
//         if (selectedImage === 3) selectedImage = 1
//         else selectedImage++
//         console.log(selectedImage)
//         renderData()
//     }, 1000)

// }
// startSlider()