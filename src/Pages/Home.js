// import logo from "../logo.svg";
import HomeSplash from "../Images/HomeSplash.JPG";

export default function Home() {
    return (
        <header className="App-header">
            <img src={HomeSplash} className="HomeSplashImage" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}