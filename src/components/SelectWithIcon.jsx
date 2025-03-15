import React from 'react';
import * as Select from '@radix-ui/react-select';
import { FaChevronDown } from 'react-icons/fa';  // Import an icon from react-icons

const SelectWithIcon = () => {
  return (
    <Select.Root>
      <Select.Trigger
        className="select-trigger"
        aria-label="Select an option"
      >
        <Select.Value placeholder="Select an option" />
        <Select.Icon>
          <FaChevronDown /> {/* Icon component */}
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item value="option1">
              <Select.ItemText>Option 1</Select.ItemText>
            </Select.Item>
            <Select.Item value="option2">
              <Select.ItemText>Option 2</Select.ItemText>
            </Select.Item>
            <Select.Item value="option3">
              <Select.ItemText>Option 3</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectWithIcon;
