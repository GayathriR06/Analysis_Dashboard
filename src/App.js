import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Train from "./scenes/train";
import TrainPage from "./scenes/TrainPage"; 
import Employee from "./scenes/employee";
import Station from "./scenes/station";
import Bar from "./scenes/visuals/stackBar";
import Predict from "./scenes/visuals/prediction";
import BarTrain from "./scenes/visuals/barTrain";
import Line from "./scenes/visuals/line";
import Pie from "./scenes/visuals/piefeedback";
import PieSug from "./scenes/visuals/piesuggestion";
import KOP from "./scenes/stationlist/Kolhapur";
import MMCT from "./scenes/stationlist/MumbaiCentral";
// import Pun from "./scenes/stationlist/Pune";
import SUR from "./scenes/stationlist/Solapur";
import Delhi from "./scenes/stationlist/CSMT";
import TNA from "./scenes/stationlist/Thane";
import MRJ from "./scenes/stationlist/Miraj";
import ANG from "./scenes/stationlist/Ahmednagar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import EmployeePage from "./scenes/employeepage";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/train" element={<Train />} />
              <Route path="/train/:id" element={<TrainPage />} />
              <Route path="/visuals/barTrain" element={<BarTrain />} />
              <Route path="/station" element={<Station />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/employee/:id" element={<EmployeePage />} />
              <Route path="/visuals/stackBar" element={<Bar />} />
              <Route path="/visuals/prediction" element={<Predict />} />
              <Route path="/visuals/piefeedback" element={<Pie />} />
              <Route path="/visuals/piesuggestion" element={<PieSug />} />
              <Route path="/visuals/line" element={<Line />} />
              <Route path="/line" element={<Line />} />
              <Route path="/station/Kolhapur" element={<KOP />} />
              <Route path="/station/MumbaiCentral" element={<MMCT />} />
              {/* <Route path="/station/Pune" element={<Pun />} /> */}
              <Route path="/station/Solapur" element={<SUR />} />
              <Route path="/station/CSMT" element={<Delhi />} />
              <Route path="/station/Thane" element={<TNA/>}/>
              <Route path="/station/Miraj" element={<MRJ />} />
              <Route path="/station/Ahmednagar" element={<ANG />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
