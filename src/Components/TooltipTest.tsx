import "../CSS/TooltipTest.css";
import Tooltip from "./Tooltip";

const TooltipTest = () => {
  return (
    <div className="test">
      <div className="test__button-container">
        <Tooltip
          toggleType="hover"
          info="Hover 이벤트">
          <button className="test__button">Hover</button>
        </Tooltip>
        <Tooltip
          toggleType="click"
          info="Click 이벤트">
          <button className="test__button">Click</button>
        </Tooltip>
      </div>
      <div className="test__input-container">
        <Tooltip
          toggleType="focus"
          info="Focus 이벤트에 발생하는 Tooltip입니다!">
          <input
            className="test__input"
            type="text"
            placeholder="Focus"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default TooltipTest;
