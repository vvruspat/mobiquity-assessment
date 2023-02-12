import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import cn from "clsx";

import { ReactComponent as LoadingIcon } from "./assets/loading.svg";
import s from "./Loading.module.css";

type LoadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

/**
 * Loading component
 */
export const Loading: FC<PropsWithChildren<LoadingProps>> = ({
  className,
  ...htmlProps
}) => {
  return (
    <div className={cn(s.loading, className)} {...htmlProps}>
      <div className={s.loadingIcon}>
        <LoadingIcon />
      </div>
    </div>
  );
};
