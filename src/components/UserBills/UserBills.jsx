import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectWaybillsList } from '../../redux/delivery/selectors';
import { clearWaybills } from '../../redux/delivery/slice';
import { ttnInfo } from '../../redux/delivery/operations';

import { Container, Waybill, WaybillList, Button } from './UserBills.styled';

const UserBills = ({ changeValue }) => {
  const waybills = useSelector(selectWaybillsList);
  const dispatch = useDispatch();

  const onClear = evt => {
    dispatch(clearWaybills());
    toast.success('Всі накладні були успішно видалені! 🎉', {
      autoClose: 3000,
    });
  };

  return (
    <Container>
      <WaybillList>
        <Waybill> Ваші ТТН:</Waybill>
        {waybills.map((item, index) => (
          <Waybill
            key={index}
            onClick={() => {
              changeValue(item);
              dispatch(ttnInfo(item));
            }}
          >
            {item}
          </Waybill>
        ))}
      </WaybillList>
      <Button
        type="button"
        variant="outlined"
        color="secondary"
        startIcon={<DeleteOutlinedIcon />}
        onClick={onClear}
      >
        Очистити всі ТТН
      </Button>
    </Container>
  );
};

UserBills.propTypes = {
  changeValue: PropTypes.func.isRequired,
};

export default UserBills;
