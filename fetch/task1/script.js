

document.getElementById("btn").addEventListener("click", function(){
    let container = document.getElementById("container")
    

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then( data => {
        let listitem = ''
        data.forEach (item => {
            listitem += `<li>${item.title}</li>`
        })
        container.innerHTML = listitem
    })
    .catch(error => {
        console.log("Error in fetching", error)
        container.innerHTML = `<li>Failed to load posts</li>`
    })
})