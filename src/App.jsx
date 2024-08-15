import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div className="w-full h-screen flex flex-wrap justify-center  items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/14354107/pexels-photo-14354107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    }}>
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;