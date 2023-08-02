import { Route, Routes } from "react-router-dom";
import BasicTable from "./componets/BasicTable";
import Home from "./componets/Home";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/basicTable" Component={BasicTable}/>
    </Routes>
  );
}

export default App;
