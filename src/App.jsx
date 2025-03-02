import "./App.css";
import { MainLayout } from "./Components/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-full w-full bg-white m-4">
        <div>primera seccion</div>
        <div>Segunda sección</div>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full bg-white m-4">
        <div>primera seccion</div>
        <div>Segunda sección</div>
      </div>
    </MainLayout>
  );
}

export default App;
