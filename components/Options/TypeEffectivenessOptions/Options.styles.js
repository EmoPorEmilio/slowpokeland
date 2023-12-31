export const Option = ({ children, ...props }) => (
  <div className='flex' {...props}>
    {children}
  </div>
);

/*
export const Option = styled.div`
  display: flex;
  border-radius: 8px;
  min-height: 50px;
  margin: 10px;
  width: 100%;
  background-color: ${theme.cardsBackground};
  border-color: ${theme.accent};
  color: ${theme.accent};
  border-width: 2px;
  border-style: solid;
  align-items: center;
  justify-content: center;
  ${(props) =>
    !props.validation
      ? `:hover {
    cursor: pointer;
    background-color: ${theme.accent};
    border-color: #fff;
    color: ${theme.cardsBackground};
  }`
      : ''}}
  
  font-weight: 400;
  text-align: center;
  font-size: 25px;
  ${(props) => (props.correct ? 'color: #83f1a7; border-color: #83f1a7' : '')}
  ${(props) => (props.incorrect ? 'color: #e74c3c; border-color: #e74c3c' : '')}
`;*/

export const OptionLoader = ({ children, ...props }) => (
  <div className='flex' {...props}>
    {children}
  </div>
);

/*
export const OptionLoader = styled.div`
  display: flex;
  border-radius: 8px;
  height: 50px;
  margin: 10px;
  width: 100%;
  border-color: ${theme.accent};
  border-width: 2px;
  border-style: solid;
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
  background: #000;
  background: linear-gradient(
    110deg,
    ${theme.cardsBackground} 8%,
    ${theme.cardsBackgroundLoad} 18%,
    ${theme.cardsBackground} 33%
  );
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
`;*/

export const OptionsContainer = ({ children, ...props }) => (
  <div
    className='flex flex-col h-[39vh] w-[80vw] max-w-[350px] justify-center align-center'
    {...props}>
    {children}
  </div>
);
