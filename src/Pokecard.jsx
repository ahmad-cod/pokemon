const pokemonAPI = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

export default function Pokecard(props) {
    const to3digits = number => (number < 100 ? `00${number}`.slice(-3) : number)

    console.log(props.id)
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={`${pokemonAPI}${to3digits(props.id)}.png`} alt="Pokecard animal" />
            <p>Type: {props.type}</p>
            <p>Exp: {props.base_experience}</p>
        </div>
    )
}