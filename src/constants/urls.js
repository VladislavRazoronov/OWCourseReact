const baseURL = "https://jsonplaceholder.typicode.com"

let posts = "/posts"
let users = "/users"

const urls = {
    posts:{
        byId:(id)=>`${posts}/${id}`,
        byUserId:(userId) => `${users}/${userId}/posts`
    },
    comments:{
        byPostId:(postId)=>`${posts}/${postId}/comments`
    },
    users:{
        getAll:users,
        byId:(id)=>`${users}/${id}`
    }
}

export {baseURL,urls}