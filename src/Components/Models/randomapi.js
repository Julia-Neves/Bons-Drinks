const aledrinks = async () => {
    const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const dados = await resp.json();
    return dados;
}

export default aledrinks;