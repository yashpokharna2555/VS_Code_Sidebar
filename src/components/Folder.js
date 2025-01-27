// const Folder = (props) => {  // this is also method to write props and then destructure to get explorer

// };

function Folder({ explorer }) {
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div>
          <span>📁 {explorer.name}</span>
        </div>
        <div>
          {explorer.items.map((item) => {
            return <span>{item.name}</span>;
          })}
        </div>
      </div>
    );
  } else {
    return <span>📄 {explorer.name}</span>;
  }
}

export default Folder;
