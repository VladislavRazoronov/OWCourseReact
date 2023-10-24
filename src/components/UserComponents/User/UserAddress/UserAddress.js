const UserAddress = ({address}) => {
    let {street,suite,city} = address
    return (
        <div>
            <h1>Address:</h1>
            <p>City:{city}</p>
            <p>street:{street}</p>
            <p>suite:{suite}</p>
        </div>
    );
}

export {UserAddress};