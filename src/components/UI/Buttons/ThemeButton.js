import { DarkIcon, LightIcon } from "../Icons";
import { useDarkMode } from "../View/useDarkMode";
import { BaseButton } from "./BaseButton";

export const ToggleTheme = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const isDark = colorTheme === "dark";
  const isLight = colorTheme === "light";
  const onTheme = () => setTheme(colorTheme);
  return (
    <BaseButton onClick={onTheme} kind={"blank"}>
      {isLight && <LightIcon size={20} className="text-blue-200" />}
      {isDark && <DarkIcon size={20} className="text-blue-900" />}
    </BaseButton>
  );
};