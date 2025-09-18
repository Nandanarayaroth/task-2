document.getElementById("btn").addEventListener("click", function(){
    let product = document.getElementById("product")

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        const image = data.message
        product.innerHTML = `<img src="${image}" alt="Random Dog" style="max-width: 300px">`
    })
    .catch(error => {
        console.log("error in fetching", error)
    })
})
