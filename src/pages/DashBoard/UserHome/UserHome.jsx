import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, welcome</span>
                {
                    user?.displayName ? user.displayName : 'back'
                }
            </h2>
        </div>
    );
};

export default UserHome;