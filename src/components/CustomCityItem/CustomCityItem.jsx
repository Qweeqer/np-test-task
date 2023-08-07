import React from 'react';

const CustomCityItem = React.forwardRef((props, ref) => {
  const { selected, inputValue, ...rest } = props;
  return (
    <li
      ref={ref}
      style={{
        backgroundColor: selected
          ? 'rgba(15, 189, 247, 1)'
          : inputValue === props.children
          ? 'rgba(15, 189, 247, 0.5)'
          : 'transparent',
        color:
          selected || inputValue === props.children ? '#ffffff' : 'inherit',
      }}
      {...rest}
    />
  );
});

export default CustomCityItem;
