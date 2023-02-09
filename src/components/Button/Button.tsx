import cn from "clsx";
import { ReactNode } from "react";

import "./Button.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** Button style look. */
  mode?: "primary" | "secondary" | "outline" | "icon";
  /** Should this button fill out all available width */
  stretched?: boolean;
  /** Add something into the button before the text */
  after?: ReactNode;
  /** Append something in the button after the text */
  before?: ReactNode;
};

/** 
 Styled HTML button with additional functionality
 */
export const Button = ({
  className,
  stretched = false,
  mode = "primary",
  children,
  before,
  after,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "button",
        `${mode}-button`,
        { "stretched-button": stretched },
        className
      )}
      {...buttonProps}
    >
      {before && <div className="button-before">{before}</div>}
      {children}
      {after && <div className="button-after">{after}</div>}
    </button>
  );
};
