import React from "react";
import cn from "../../classname";

const loading = cn("loading");

const Loading: React.FC = () => {
  return (
    <div className={loading()}>
      <div className={loading("container")}>
        <div className={loading("bar")} />
        <div className={loading("bar")} />
        <div className={loading("bar")} />
      </div>
    </div>
  );
};

export default Loading;
