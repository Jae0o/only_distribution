import { useCallback, useEffect, useRef, useState } from "react";

interface UseToggle {
  toggleType: "click" | "hover" | "focus";
  duration: number;
}
const useToggle = ({ toggleType, duration }: UseToggle) => {
  const [isToggle, setIsToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOnHandler = useCallback(() => {
    setIsToggle(true);
  }, []);
  const toggleOffHandler = useCallback(() => {
    setIsToggle(false);
  }, []);

  const clickHandler = useCallback(() => {
    setIsToggle(true);
    setTimeout(() => {
      setIsToggle(false);
    }, duration);
  }, [duration]);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    if (toggleType === "hover") {
      current.addEventListener("mouseover", toggleOnHandler);
      current.addEventListener("mouseout", toggleOffHandler);

      return () => {
        current.removeEventListener("mouseover", toggleOnHandler);
        current.removeEventListener("mouseout", toggleOffHandler);
      };
    }
  }, [toggleType, toggleOnHandler, toggleOffHandler]);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    if (toggleType === "click") {
      current.addEventListener("click", clickHandler);

      return () => {
        current.removeEventListener("click", clickHandler);
      };
    }
  }, [clickHandler, toggleType]);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    if (toggleType === "focus") {
      current.addEventListener("focusin", toggleOnHandler);
      current.addEventListener("focusout", toggleOffHandler);

      return () => {
        current.removeEventListener("focusin", toggleOnHandler);
        current.removeEventListener("focusout", toggleOffHandler);
      };
    }
  }, [toggleOffHandler, toggleOnHandler, toggleType]);

  return { ref, isToggle };
};
export default useToggle;
