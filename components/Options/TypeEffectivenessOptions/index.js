import { useState } from 'react';
import { OptionsContainer, Option } from './Options.styles.js';

export const TypeEffectivenessOptions = ({
  correctOption,
  loading,
  options,
  handleClickOption,
  validation,
}) => {
  const [lastClickedOption, setLastClickedOption] = useState(null);

  const handleClick = (option) => {
    if (!validation) {
      setLastClickedOption(option);
      handleClickOption(option);
    }
  };

  return (
    <OptionsContainer>
      {!options || loading
        ? ''
        : options.map((option) => (
            <Option
              validation={validation}
              incorrect={
                validation &&
                option === lastClickedOption &&
                option !== correctOption
              }
              correct={validation && option === correctOption}
              onClick={() => handleClick(option)}
              key={option}>
              <span>{option}</span>
            </Option>
          ))}
    </OptionsContainer>
  );
};
