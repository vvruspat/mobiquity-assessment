import { FC, PropsWithChildren } from "react";

import { Card } from "../UIKit/Card";
import { Text } from "../UIKit/Text";

import s from "./Error.module.css";

type ErrorProps = {};

/**
 * Error component
 */
export const Error: FC<PropsWithChildren<ErrorProps>> = ({ children }) => {
  return (
    <Card isAccent={true} header={<Text size="m">Error</Text>}>
      <div className={s.error_text}>{children}</div>
    </Card>
  );
};
