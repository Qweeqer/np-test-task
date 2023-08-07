import styled from '@emotion/styled';
import DEVICE from '../../constants/deviceSize';

const StatusWrap = styled.div`
  border: 1px solid #0fbdf7;
  padding: 10px;
  height: 250px;
  margin-bottom: 10px;
  box-shadow: inset 2px 2px 5px 0 #d3d3d3;
  border-radius: 5px;
  border: currentColor;
  background-image: linear-gradient(#00d2ff, #928dab);
  color: #fff;
  @media ${DEVICE.tablet} {
    padding: 16px;
    width: 500px;
    margin-bottom: 10px;
    margin-right: 10px;
    box-shadow: inset 2px 2px 5px 0 #d3d3d3;
  }
`;
const StatusTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  @media ${DEVICE.tablet} {
    font-size: 17px;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
const StatusText = styled.span`
  font-weight: 400;
  line-height: 1.6;
`;

export { StatusText, StatusTitle, StatusWrap };
