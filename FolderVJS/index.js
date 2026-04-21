const fileData = [
    {
        id: 1,
        name: 'README.md',
    },
    {
        id: 2,
        name: 'Documents',
        children: [
            {
                id: 3,
                name: 'Word.doc',
                children: [
                    {
                        id: 3,
                        name: '1.doc',
                    },
                    {
                        id: 4,
                        name: '2.ppt',
                    },
                ],
            },
            {
                id: 4,
                name: 'Powerpoint.ppt',
            },
        ],
    },
];

let openFolder = new Set()


const folderContainer = document.getElementById("folderContainer")

function getOpen(selectedId) {
    let id = parseInt(selectedId)
    if (openFolder.has(id)) {
        openFolder.delete(id)
    } else {
        openFolder.add(id)
    }
    renderData()
}

function getFolder(item, level = 0) {
    let isChildren = item.children?.length
    let isOpen = openFolder.has(item.id)
    return `
    <div id="folder" class="folder" style="padding-left: ${level*20}px"  data-id=${item.id}>${item.name}${isChildren ? isOpen ? "[-]" : "[+]" : ""} </div>
    ${isChildren && isOpen ?
            item.children?.map(item => {
                return getFolder(item, level+1)
            }).join("")
            : ""}
    `
}

function renderData() {
    console.log(openFolder)
    folderContainer.innerHTML = fileData.map(item => {
        return `
              ${getFolder(item, 0)}
        `
    }).join("")
}
renderData()


folderContainer.addEventListener("click", (e) => {

    const selectedFolder = e.target.closest(".folder");
    if (!selectedFolder) return;
    console.log('selectedFolder', selectedFolder)
    const id = selectedFolder.dataset.id;  // 🔥 this is what you want
    console.log("clicked id:", id);
    getOpen(id)
})

