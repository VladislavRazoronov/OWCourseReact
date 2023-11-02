const baseURL = "https://rickandmortyapi.com/api/"

const episodes = "/episode"

const characters = "/character"

const url = {
    episode:{
        getAll:episodes,
        getPage:(page)=>`${episodes}/?page=${page}`
    },
    character:{
        getAll:characters,
        byId:(id)=>`${characters}/${id}`
    }
}

export {
    baseURL,
    url
}