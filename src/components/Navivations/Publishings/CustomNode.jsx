import React from "react";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { TypeIcon } from "../TypeIcon";
import styles from "./CustomNode.module.css";
import { useTranslation } from 'react-i18next';

export const CustomNode = (props) => {
  const { t } = useTranslation();

  const { droppable, data } = props.node;
  const indent = props.depth * 24;

  const handleToggle = (e) => {
    e.stopPropagation();
    console.log(props.node);
    props.onToggle(props.node.id);
  };
  const handleNodeClick = (e)=>{
    console.log(props.node);
    props.onToggle(props.node.id);
  }

  return (
    <div
      className={`tree-node ${styles.root}`}
      style={{ paddingInlineStart: indent }}
    >
      <div
        className={`${styles.expandIconWrapper} ${
          props.isOpen ? styles.isOpen : ""
        }`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
      <div>
        <TypeIcon droppable={droppable} fileType={data?.fileType} />
      </div>
      <div className={styles.labelGridItem}
       onClick={handleNodeClick}
      >
        <Typography variant="body2">{t(props.node.text)}</Typography>
      </div>
    </div>
  );
};
