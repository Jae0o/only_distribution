import React, { ReactNode, useMemo } from "react";
import "../CSS/Tooltip.css";
import useToggle from "../Hooks/useToggle";
import { TOOLTIP_LEFT_PERCENTAGE } from "../Constants";

interface TooltipProps {
  children: ReactNode;
  toggleType?: "click" | "hover" | "focus";
  info: string;
  pointer?: boolean;
  leftPercentage?: number;
  duration?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  toggleType = "hover",
  info,
  pointer = true,
  leftPercentage = 50,
  duration = 3000
}) => {
  const { ref, isToggle } = useToggle({ toggleType, duration });

  const checkedLeftPercentage = useMemo(() => {
    const checkedMinRange = Math.max(TOOLTIP_LEFT_PERCENTAGE.MIN, leftPercentage);
    const checkedMaxRange = Math.min(TOOLTIP_LEFT_PERCENTAGE.MAX, checkedMinRange);
    return checkedMaxRange;
  }, [leftPercentage]);

  return (
    <div className="tooltip__wrapper">
      <div
        ref={ref}
        className="tooltip__children-container">
        {children}
      </div>
      <div
        className={`tooltip__container ${isToggle && "tooltip-hover"}`}
        style={{ left: `${checkedLeftPercentage}%` }}>
        <div
          style={{ display: pointer ? "block" : "none" }}
          className="tooltip__pointer"
        />
        {info}
      </div>
    </div>
  );
};

export default Tooltip;
