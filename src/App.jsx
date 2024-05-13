// Custom Components
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";

// Constants
import { Titles } from "./utils/constants";

function App() {
  return (
    <>
      <Header title={Titles.HEADER_TITLE} />
      <DashBoard />
    </>
  );
}

export default App;
