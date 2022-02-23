import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div>
            <div><Header/></div>
            <div className="App">
                <ul>
                    <li>css</li>
                    <li>html</li>
                    <li>js</li>
                    <li>react</li>
                </ul>

            </div>
        </div>
    );
}
const Header = () => {
    return (<div>
        <a href='#s'>Home</a>
        <a href='#s'>News Feed</a>
        <a href='#s'>Messages</a>
    </div>)
}

export default App;