import './style.css'
function Simpson({props}){
    let {name,age,description,image} = props;
return (<div className={"simpson"}>
            <img src={image} alt={name}></img>
            <h1 id={name}>Name: {name}</h1>
            <h2 id={age}>Age: {age}</h2>
            <p id={description}>{description}</p>
        </div>

    );
}
export {Simpson};