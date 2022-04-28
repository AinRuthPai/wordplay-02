import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DayList from "./components/DayList";
import NotFound from "./components/NotFound";
import Day from "./components/Day";
import CreateDay from "./components/CreateDay";
import CreateWord from "./components/CreateWord";
import data from "./db/data.json";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<DayList data={data} />}></Route>
          <Route path='/day/:dayId' element={<Day />}></Route>
          <Route path='/create_day' element={<CreateDay data={data} />} />
          <Route path='/create_word' element={<CreateWord data={data} />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
