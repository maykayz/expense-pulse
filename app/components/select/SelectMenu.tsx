import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {LuChevronDown, LuChevronUp} from "react-icons/lu";
import {ComponentPropsWithoutRef} from "react";

interface SelectItemProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
  itemValue: string;
  disabled?: string;
}

interface SelectMenuProps {
  items: string[];
  placeholder?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
}

const SelectItem: React.FC<SelectItemProps> = ({itemValue, disabled, className, children, ...props}) => {
  return (
    <Select.Item className={classnames("text-[13px] leading-none text-black rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-theme-color-tertiary data-[highlighted]:text-bg-theme-color-tertiary", className)} value={itemValue} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <LuChevronDown />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

const SelectMenu: React.FC<SelectMenuProps> = ({items, defaultValue, onChange, placeholder}) => (
  <Select.Root defaultValue={defaultValue || items[0]} onValueChange={onChange}>
    <Select.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-black shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-theme-color-tertiary outline-none" aria-label="Food">
      <Select.Value placeholder={placeholder} />
      <Select.Icon className="text-black">
        <LuChevronDown />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-black cursor-default">
          <LuChevronUp />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
          <Select.Group>
            <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">{placeholder}</Select.Label>
            {items.map((item) => (
              <SelectItem itemValue={item} key={item}>{item}</SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-black cursor-default">
          <LuChevronDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default SelectMenu;
