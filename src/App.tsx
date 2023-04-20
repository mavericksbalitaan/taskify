import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './components/Home';
import TaskProvider from "./contexts/TaskContext";


function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
