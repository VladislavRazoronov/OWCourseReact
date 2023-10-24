const UserDetails = ({user}) => {
    let {id,name,username,email,phone,website} = user
    return (
        <div>
            <h1>Name:{name}</h1>
            <h2>Id:{id}</h2>
            <p>username:{username}</p>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <p>website:{website}</p>
        </div>
    );
}

export {UserDetails};