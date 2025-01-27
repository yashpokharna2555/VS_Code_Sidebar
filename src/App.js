import "./styles.css";
import explorer from "./data/folderData";
import { useState } from "react";
import Folder from "./components/Folder";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);

  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}
