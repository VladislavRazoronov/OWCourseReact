const Company = ({company}) => {
    let {name,catchPhrase,bs} = company
    return (
        <div>
            <h1>Company:</h1>
            <h2>Name:{name}</h2>
            <p>Catch phrase:{catchPhrase}</p>
            <p>bs:{bs}</p>
        </div>
    );
}

export {Company};