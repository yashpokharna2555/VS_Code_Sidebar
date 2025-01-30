import "./styles.css";
import explorer from "./data/folderData";
import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);

  const { insertNode, deleteNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (nodeId) => {
    const finalTree = deleteNode(explorerData, nodeId);

    if (finalTree) {
      setExplorerData({ ...finalTree }); // Spread to create a new object
    } else {
      setExplorerData({
        id: new Date().getTime(),
        name: "root",
        isFolder: true,
        items: [],
      });
    }
  };

  return (
    <div className="App">
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        explorer={explorerData}
      />
    </div>
  );
}
