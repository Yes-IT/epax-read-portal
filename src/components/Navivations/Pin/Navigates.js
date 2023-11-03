import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import {
  Tree,
  MultiBackend,
  getBackendOptions
} from "@minoru/react-dnd-treeview";
import { CustomNode } from "./CustomNode";
import styles from "./App.modules.css";
import SampleData from "./sample_data.json";


function Navigates() {
  const [treeData, setTreeData] = useState(SampleData);
  const handleDrop = (newTree) => setTreeData(newTree);
  // const display =(newTree)=>{
  //   console.log(newTree);
  //   setTreeData(newTree);
  //   console.log(treeData);
  //   console.log(treeData);
  //   console.log(treeData);
  //   console.log(treeData);
  //   console.log(treeData);
  // }
  // const handleDrop = (newTree) => display(newTree);

  return (
   

      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div className={styles.app}>
          <Tree
            tree={treeData}
            rootId={0}
            render={(node, { depth, isOpen, onToggle }) => (
              <CustomNode
                node={node}
                depth={depth}
                isOpen={isOpen}
                onToggle={onToggle}
              />
            )}
            onDrop={handleDrop}
            classes={{
              root: styles.treeRoot,
              draggingSource: styles.draggingSource,
              dropTarget: styles.dropTarget
            }}
          />
        </div>
      </DndProvider>

  );
}

export default Navigates;
