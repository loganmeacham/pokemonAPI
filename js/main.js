document.querySelector('button').addEventListener('click', photoFinder)

// let pokemonName = document.querySelector('input').value.toLowerCase()


function photoFinder(){
    let pokemonName = document.querySelector('input').value.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.sprites.other.dream_world.front_default
        })

        .catch(err => {
            console.log(`error ${err}`)
        })
}
