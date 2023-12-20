import "./App.css";
import BreadCrumb from "./Components/BreadCrumb";
import Navbar from "./Components/Navbar";
import PageManager from "./Pages/PageManager";

function App() {
  return (
    <main className="app">
      <Navbar />
      <div className="app__divider" />
      <BreadCrumb />
      <div className="app__divider" />
      <PageManager />
    </main>
  );
}

export default App;
