import {useNavigate} from "react-router-dom";

const User = ({props,shorthand}) => {
    let {id,name,username,email,address,phone,website,company} = props
    const navigate = useNavigate()
    return (
        <div>
            <h2>Name:{name}</h2>
            <p>Id:{id}</p>
            {shorthand ? <button onClick={()=>navigate(`../userDetails/${id}`)}>View details</button>:
                <div>
                    <p>username:{username}</p>
                    <p>email:{email}</p>
                    <p>phone:{phone}</p>
                    <p>Website:{website}</p>
                    <p>Company:{company.name}</p>
                    <p>Address:{address.street}</p>
                </div>
            }

        </div>
    );
}

export {User};