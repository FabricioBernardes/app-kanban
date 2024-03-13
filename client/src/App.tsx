import { BrowserRouter } from "react-router-dom";
import Header from "./app/components/header/Header";
import Sidebar from "./app/components/sidebar/Sidebar";
import Main_routes from "./app/routes/Main_routes";

import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />

        <div className="content-wrapper">

          <Sidebar />

          <article className="main-content">
              <Main_routes />
          </article>

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
