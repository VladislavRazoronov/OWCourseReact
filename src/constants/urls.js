const baseURL = "https://jsonplaceholder.typicode.com"

let posts = "/posts"
let comments = "/comments"
let todo = "/todos"
let albums = "/albums"

const urls = {
    posts:{
        byId:(id)=>`${posts}/${id}`
    },
    comments,
    albums,
    todo
}

export {baseURL,urls}