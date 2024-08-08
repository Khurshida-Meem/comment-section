import { DataContext } from "./contexts";
import Comments from "./pages/comments";
import { dummyData } from "./pages/comments/dummyData";

function App() {
  return (
    <DataContext.Provider value={dummyData}>
      <Comments />
    </DataContext.Provider>
  );
}

export default App;
