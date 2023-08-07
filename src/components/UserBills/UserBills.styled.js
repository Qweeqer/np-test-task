import styled from '@emotion/styled';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import DEVICE from '../../constants/deviceSize';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const WaybillList = styled.ul`
  padding: 10px;
  margin-bottom: 8px;
  height: 90px;
  border: 1px solid #0fbdf7;

  text-align: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
    background-color: lightgrey;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #0fbdf7;
  }
  box-shadow: inset 2px 2px 5px 0 #d3d3d3;
  border-radius: 5px;
  border: currentColor;
  background-image: linear-gradient(#00d2ff, #928dab);
  color: #fff;
  @media ${DEVICE.tablet} {
    padding: 16px;
    width: 500px;
  }
  @media ${DEVICE.laptop} {
    height: 250px;
    width: 200px;
  }
`;
const Waybill = styled.li`
  cursor: pointer;
  font-size: 14px;

  &:first-of-type {
    font-weight: 500;
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media ${DEVICE.tablet} {
    font-size: 17px;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border: currentColor;
  border-radius: 5px;
  background-color: #0fbdf7;
  box-shadow: 0 17px 10px -10px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 20px 12px -12px rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    transform: scale(1.05);
  }
`;
const DeleteIcon = styled(DeleteOutlinedIcon)`
  margin-right: 5px; /* Add some margin between icon and text */
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon /> 
      {children}
    </StyledButton>
  );
};

export { Container, Waybill, WaybillList, Button };
