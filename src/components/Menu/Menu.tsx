import { FC, PropsWithChildren, useCallback, useState } from "react";
import { Button } from "../Button";

import s from "./Menu.module.css";

type MenuItemOption = {
  /** Key to identify option */
  key: string;
  /** Value to show */
  value: string;
};

type MenuProps = {
  /** Menu options */
  options: MenuItemOption[];
  /** Callback when item has been selected */
  onSelect?: (selectedItem: MenuItemOption) => void;
};

/**
 * Menu component
 */
export const Menu: FC<PropsWithChildren<MenuProps>> = ({
  options,
  onSelect,
}) => {
  const [selectedKey, setSelectedKey] = useState(options[0]?.key);
  const onMenuItemClick = useCallback(
    (selectedItem: MenuItemOption) => {
      onSelect?.(selectedItem);
      setSelectedKey(selectedItem.key);
    },
    [onSelect]
  );

  return (
    <div className={s.menu} dir="ltr">
      {options.map((option) => {
        return (
          <Button
            mode={selectedKey === option.key ? "primary" : "outline"}
            key={option.key}
            onClick={() => onMenuItemClick(option)}
            className={s.menu_item}
          >
            {option.value}
          </Button>
        );
      })}
    </div>
  );
};
