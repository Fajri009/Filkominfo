import logo from './logo.svg';
import { AuthProvider } from './Config/Auth.js';
import Nav from './Components/Nav/Nav.js'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.js'

function App() {
    return (
        <>
            <AuthProvider>
                <Nav />
                <Outlet />
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;
