import cn from "clsx";
import { useCallback, useState } from "react";
import s from "./Button.module.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** Button style look. */
  mode?: "primary" | "outline" | "icon";
  /**
   * Switch on button rotation on click
   * @description Appliable only for icon button
   * */
  isToggleable?: boolean;
};

/** 
 Styled HTML button with additional functionality
 */
export const Button = ({
  className,
  mode = "primary",
  onClick,
  children,
  isToggleable,
  ...buttonProps
}: ButtonProps) => {
  const [isToggle, setIsToggle] = useState(false);

  const onButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isToggleable) {
        setIsToggle((prevToggle) => !prevToggle);
      }

      onClick?.(event);
    },
    [isToggleable, onClick]
  );

  return (
    <button
      className={cn(
        s.button,
        s[`${mode}-button`],
        { [s.toggle]: isToggle },
        className
      )}
      onClick={onButtonClick}
      {...buttonProps}
      data-testid="button"
    >
      {children}
    </button>
  );
};
