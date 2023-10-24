const base = "https://jsonplaceholder.typicode.com"

const user = {
    all:"/users",
    byId:(id)=>`/users/${id}`
}

const post = {
    all:"/posts",
    byId:(id)=>`/posts/${id}`,
    byUserId:(userId)=>`${user.byId(userId)}/posts`
}

export {base,user,post}