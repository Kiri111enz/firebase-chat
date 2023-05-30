import { useContext, PropsWithChildren } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AppContext } from 'pages/_app';
import Login from 'components/Login';

const RequireAuth: React.FC<PropsWithChildren> = (props) => {
    const { auth } = useContext(AppContext);
    const [user, loading] = useAuthState(auth);

    return (
        <>
            <div className="absolute">{props.children}</div>
            {!user && !loading && <Login />}
        </>
    );
};

export default RequireAuth;