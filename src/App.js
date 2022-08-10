import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Background from './components/Background/Background';
import WelcomeSection from "./views/WelcomeSection/WelcomeSection";
import MainSection from "./views/MainSection/MainSection";




function App() {
  return (
    <>
      <Background />
      <WelcomeSection />
      <MainSection />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomeSection />} />
          <Route exact path="/main" element={<MainSection />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App;
