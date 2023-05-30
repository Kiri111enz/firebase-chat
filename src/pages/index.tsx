import RequireAuth from 'components/RequireAuth';

const Home: React.FC = () => {
    return (
        <RequireAuth>
            home
        </RequireAuth>
    );
};

export default Home;