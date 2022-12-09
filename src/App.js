import logo from './logo.svg';
import { AuthProvider } from './Config/Auth.js';
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.js'

function App() {
    return (
        <>
            <AuthProvider>
                <Outlet />
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;
