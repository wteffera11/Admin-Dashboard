import React, { useCallback, useState } from "react";
import { act } from "react-dom/test-utils";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const Link = ({ page, children }) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = useCallback(() => {
    act(() => {
      setStatus(STATUS.HOVERED);
    });
  }, [STATUS.HOVERED]);
  const onMouseLeave = useCallback(() => {
    act(() => {
      setStatus(STATUS.NORMAL);
    });
  }, [STATUS.NORMAL]);
  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
