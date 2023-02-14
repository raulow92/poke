const GetPokeList = () => {
    let pokeList = []

    const getPokes = async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        pokeList.push(data)
    };

    const getNum = (num) => {
        for (let i = 1; i <= num; i++) {
            getPokes(i);
        }
    };

    getNum(10)
    console.log(pokeList)
};

export default GetPokeList;
