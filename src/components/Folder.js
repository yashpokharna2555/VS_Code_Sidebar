// const Folder = (props) => {  // this is also method to write props and then destructure to get explorer

import { useState } from "react";

// };

function Folder({ handleInsertNode, handleDeleteNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);

    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };
  const onAddFolder = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...setShowInput, visible: false });
    }
  };

  const onDeleteFolder = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorer.id);
  };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <button onClick={(e) => onDeleteFolder(e)}>Delete 🗑️</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                className="inputContainer__input"
              />
            </div>
          )}
          {explorer.items.map((item) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                key={item.id}
                explorer={item}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}

export default Folder;
