const GetPokeList = async() => {
    let pokeList = []

    const getPokes = async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        pokeList.push(data)
    };

    const getNum = async (num) => {
        for (let i = 1; i <= num; i++) {
            await getPokes(i);
        }
    };

    await getNum(10)
    console.log(pokeList)
    console.log(pokeList[1])
};

export default GetPokeList;
