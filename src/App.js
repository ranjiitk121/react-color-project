import Palette from "./components/Palette.component";
import seedColors from "./seedColor";
import {generatePalette} from "./color.helpers";
function App() {
  return (
    <div className="App"> 
      <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
