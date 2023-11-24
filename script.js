function search(){
    let textToSearch = document.getElementById("search-text").value;
    let para = document.getElementById("para");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`, "gi");

    para.innerHTML = para.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}