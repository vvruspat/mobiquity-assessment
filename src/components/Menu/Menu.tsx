import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Button } from "../UIKit/Button";

import s from "./Menu.module.css";

export type MenuItemOption = {
  /** Key to identify option */
  key: string;
  /** Value to show */
  value: string;
};

type MenuProps = {
  /** Menu options */
  options: MenuItemOption[];
  /** Allow to select item from outside */
  selectedIndex?: number;
  /** Callback when item has been selected */
  onSelect?: (selectedItem: MenuItemOption) => void;
};

/**
 * Menu component
 */
export const Menu: FC<PropsWithChildren<MenuProps>> = ({
  options,
  selectedIndex = 0,
  onSelect,
}) => {
  const [selectedKey, setSelectedKey] = useState(options[selectedIndex]?.key);
  const onMenuItemClick = useCallback(
    (selectedItem: MenuItemOption) => {
      onSelect?.(selectedItem);
      setSelectedKey(selectedItem.key);
    },
    [onSelect]
  );

  useEffect(() => {
    if (options[selectedIndex]) {
      setSelectedKey(options[selectedIndex].key);
    }
  }, [selectedIndex, options]);

  return (
    <div className={s.menu} dir="ltr" data-testid="menu">
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
