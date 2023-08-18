import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
    </div>
  );
}

export default App;
