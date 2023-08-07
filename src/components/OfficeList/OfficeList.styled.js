import styled from '@emotion/styled';
import DEVICE from '../../constants/deviceSize';

const ListWrap = styled.div`
  border: 1px solid #0fbdf7;
  min-height: 250px;
  max-height: 500px;
  overflow: auto;
  padding: 10px;
  width: 100%;
  ::-webkit-scrollbar {
    width: 9px;
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
    width: 500px;
    padding: 16px;
  }
  @media ${DEVICE.laptop} {
    width: 700px;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  @media ${DEVICE.tablet} {
    font-size: 17px;
  }
`;

export { ListWrap, Text };
