
let container = document.getElementById("container")

// fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
fetch("https://pokeapi.co/api/v2/pokemon/")
.then(response => response.json())
.then(data => {
    const itemsFirst = data.results.slice(0, 10)

    itemsFirst.forEach(item => {
        const listItem = document.createElement('li')
        listItem.textContent = item.name
        container.appendChild(listItem)
    })
})
.catch(error => {
    console.log("Error fetching Pokemon", error)
})