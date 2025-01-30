const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  }

  const deleteNode = (tree, nodeId) => {
    if (!tree) return null;

    if (tree.id === nodeId) {
      return null; // Remove the node by returning null
    }

    // Create a new object instead of modifying the original tree
    return {
      ...tree,
      items: tree.items
        .map((item) => deleteNode(item, nodeId))
        .filter((item) => item !== null),
    };
  };

  const updateNode = () => {};

  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
