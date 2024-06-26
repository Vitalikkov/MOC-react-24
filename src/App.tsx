import AboutComponent from './components/about/About.component';
import { HeaderComponent } from './components/header/Header.component';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <main className="home">
                <AboutComponent />
            </main>
        </>
    );
}

export default App;
