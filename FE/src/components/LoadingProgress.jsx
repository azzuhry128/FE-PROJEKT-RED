import React from "react";
import { Progress } from "@chakra-ui/react";

const LoadingProgress = (props) => {

  const { show } = props;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "transparent" }}>
      {show && <Progress size="xs" isIndeterminate bgColor='transparent'/>}
    </div>
  );
};

// Menyimpan komponen CustomProgressBar
export default LoadingProgress;