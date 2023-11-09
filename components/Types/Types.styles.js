export const TypeCard = ({ children, ...props }) => (
  <div className='flex flex-col content-center justify-center' {...props}>
    {...children}
  </div>
);
/*
export const TypeCard = styled.div`
  flex: 1;
  padding: 10px;
  margin: 5px;
  background-color: ${(props) => props.color};
  border-color: ${theme.accent};
  color: ${theme.background};
  border-width: 2px;
  border-radius: 50px;
  border-style: solid;
  align-items: center;
`;*/

export const TypesContainer = ({ children, ...props }) => (
  <div className='flex align-center justify-center' {...props}>
    {...children}
  </div>
);

/*
export const TypesContainer = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;*/

export const TypeContainer = ({ children, ...props }) => (
  <div className='' {...props}>
    {...children}
  </div>
);

export const VSTitle = ({ children, ...props }) => (
  <span className='' {...props}>
    {...children}
  </span>
);

/*
export const VSTitle = styled.span`
  color: ${theme.accent};
  font-size: 20px;
`;*/
