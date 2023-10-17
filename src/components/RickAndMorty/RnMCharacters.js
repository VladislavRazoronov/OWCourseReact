import './style.css'
function Character({data}){
    let {id,name,status,species,gender,image} = data;
    return(
        <div className={"RnMCharacter"}>
            <img src={image} alt={name}/>
            <div className={"info"}>
                <h1>Name:{name}</h1>
                <h2>Id:{id}</h2>
                <p>Status:{status}</p>
                <p>Species:{species}</p>
                <p>Gender:{gender}</p>
            </div>
        </div>
    )
}

export {Character}