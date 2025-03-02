import "./App.css";
import { MainLayout } from "./Components/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center h-full">
        <div>primera seccion</div>
        <div>Segunda sección</div>
      </div>
    </MainLayout>
  );
}

export default App;
