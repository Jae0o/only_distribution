import React, { useCallback, useEffect, useState } from "react";
import { PopNavigation } from "../Types/ContextType";
import { MIN_OFFSET_PERCENTAGE } from "../Constants";

const useMouseDrag = (onPrevEvent: PopNavigation) => {
  const [isDrag, setIsDrag] = useState(false);
  const [startOffset, setStartOffset] = useState<number>(0);
  const [offsetX, setOffsetX] = useState(0);

  const mouseDownHandler = useCallback((e: React.MouseEvent) => {
    setIsDrag(true);
    setStartOffset(e.clientX);
  }, []);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDrag) return;
      const dragDistanceX = e.clientX - startOffset;

      if (dragDistanceX > 0) {
        const percentage = ((e.clientX - startOffset) / 500) * 100;
        setOffsetX(percentage);
      }
    };

    const mouseUpHandler = () => {
      if (offsetX > MIN_OFFSET_PERCENTAGE) {
        onPrevEvent();
      }
      setOffsetX(0);
      setIsDrag(false);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [isDrag, offsetX, onPrevEvent, startOffset]);

  return { offsetX, mouseDownHandler };
};

export default useMouseDrag;
