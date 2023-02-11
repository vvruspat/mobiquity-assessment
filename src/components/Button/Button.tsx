import cn from "clsx";
import s from "./Button.module.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** Button style look. */
  mode?: "primary" | "outline" | "icon";
};

/** 
 Styled HTML button with additional functionality
 */
export const Button = ({
  className,
  mode = "primary",
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={cn(s.button, s[`${mode}-button`], className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
