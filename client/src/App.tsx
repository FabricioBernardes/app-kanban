import { BrowserRouter } from "react-router-dom";
import Header from "./app/components/header/Header";
import Sidebar from "./app/components/sidebar/Sidebar";
import Main_routes from "./app/routes/Main_routes";

import './App.scss'

function App() {

  return (
    <div className="app-wrapper">

      <Header />

      <div className="content-wrapper">

        <Sidebar />

        <BrowserRouter>
          <Main_routes />
        </BrowserRouter>

      </div>

    </div>
  )
}

export default App
