import { useAuth } from "../../../hooks/useAuth";
import cl from './UserProfilePage.module.css'

const UserProfilePage = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return (
            <div  className={cl.profile__page}>
                <h1>You are not logged in</h1>
            </div>
        );
    }

    return (
        <div className={cl.profile__page}>
            <h1>{user.username}</h1>
            <h4>{user.email}</h4>
            <button onClick={logout}>Log Out</button>
        </div>
    );
};

export default UserProfilePage;
