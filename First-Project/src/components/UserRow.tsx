import { User } from "../interfaces/reques.response"

interface asdasdasd{
    user: User;
}

export default function UseRow({ user }: asdasdasd){
    return (
        <tr>
                        <td>
                            <img src={user.avatar}/>
                        </td>
                        <td>
                            <span>{user.first_name} {user.first_name}</span>
                        </td>
                        <td>
                        <span>{user.email}</span>
                        </td>
                    </tr>
    )
}