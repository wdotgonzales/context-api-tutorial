import { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {

    const { user } = useContext(UserContext);
    if (!user) return <h1>Not Logged In</h1>

    return <div>
        <h2>Profile Information</h2>
        <p>Username : {user.username}</p>
        <p>Password : {user.password}</p>
    </div>
}

export default Profile; 