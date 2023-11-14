import {useForm} from "react-hook-form";


import {userService} from "../../../services";

const UserForm = ()=>{
    const {register,handleSubmit} = useForm()

    const save = async(user)=>{
        await userService.create(user)
        console.log(`Saving ${user}`)
    }

    return(
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>
    )
}

export {UserForm}