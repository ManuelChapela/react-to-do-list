import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {
  // const [logged, setLogged] = useState(false)
  // const toggleLog = => {
  //   setLogged(!logged)
  // }


  let myBrand = "FyF"; // Hardcoded

  // const user = { name: 'Jacinto', loggedIn: true }

  /* JSX */
  return (
    <div className="App">
      {/* <UserProvider value={user}>  */}
        <Header myBrand={myBrand} />
        <Main />
        <Footer brand={myBrand} />
        {/* <Login /> */}
      {/* </UserProvider> */}

    </div>
  );
}

export default App;