import "./App.css";
import { Navbar } from "./Components/Navbar";
import { MainLayout } from "./Components/MainLayout";


function App() {
  return (
    <MainLayout>
      <div className="items-center grow justify-center w-full bg-white my-4 ml-4 md:w-4/5">
        <div>primera seccion</div>
      </div>
      <Navbar />
    </MainLayout>
  );
}

export default App;
