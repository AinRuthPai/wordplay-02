import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DayList from "./components/DayList";
import NotFound from "./components/NotFound";
import Day from "./components/Day";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<DayList />}></Route>
          <Route path='/day/:dayId' element={<Day />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
