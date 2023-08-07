import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Button, TextField, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CheckDeliveryStatus from '../CheckDeliveryStatus/CheckDeliveryStatus';
import ListWaybills from '../ListWaybills/ListWaybills';
import { ttnInfo } from '../../redux/delivery/operations';

import { Container, Form, Wrapper } from './CheckWaybillForm.styled';

const CheckWaybillForm = () => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const tablet = useMediaQuery('(min-width:600px)');

  const onFormSubmit = evt => {
    evt.preventDefault();
    const numericRegex = /^\d+$/;
    const formatRegex = /^\d{14}$/;
    if (number === '') {
      return toast.warn('Будь-ласка заповніть поле пошуку!', {
        autoClose: 2000,
      });
    }
    if (!numericRegex.test(number) || !formatRegex.test(number)) {
      return toast.error('Введено невірний формат даних!', {
        autoClose: 5000,
      });
    }

    dispatch(ttnInfo(number));
  };
  const changeValue = value => {
    setNumber(value.trim());
  };

  return (
    <Wrapper>
      <Form onSubmit={onFormSubmit}>
        <TextField
          variant="outlined"
          label="Номер ТТН"
          value={number}
          onChange={evt => {
            setNumber(evt.target.value);
          }}
          sx={{
            width: '100%',
            maxWidth: '290px',
            boxShadow: 'inset 2px 2px 5px 0 #d3d3d3',
            '& label': {
              color: 'grey',
            },
            '& label.MuiInputLabel-shrink': {
              color: '#0fbdf7',
              borderColor: '#0fbdf7',
            },
            '& input:focus ~ label': {
              color: '#0fbdf7',
            },
          }}
        />

        {tablet ? (
          <Button
            type="submit"
            variant="outlined"
            sx={{
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '20px',
              marginRight: 'auto',
              border: 'currentColor',
              backgroundColor: '#0fbdf7',
              boxShadow: '0 17px 10px -10px rgba(0, 0, 0, 0.4)',
              color: '#ffffff',
              transition: 'all 0.2s ease-in-out',

              '&:hover': {
                boxShadow: '0 20px 12px -12px rgba(0, 0, 0, 0.4)',
                background:
                  'linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%)',
                border: 'currentColor',
                transform: 'scale(1.05)',
              },
            }}
          >
            <SendIcon />
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            sx={{
              width: '100%',
              height: '50px',
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              border: 'currentColor',
              backgroundColor: '#0fbdf7',
              boxShadow: '0 17px 10px -10px rgba(0, 0, 0, 0.4)',
              color: '#ffffff',
              transition: 'all 0.2s ease-in-out',

              '&:hover': {
                boxShadow: '0 20px 12px -12px rgba(0, 0, 0, 0.4)',
                background:
                  'linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%)',
                border: 'currentColor',
                transform: 'scale(1.05)',
              },
            }}
            endIcon={<SendIcon />}
          >
            Перевірити
          </Button>
        )}
      </Form>
      <Container>
        <CheckDeliveryStatus />
        <ListWaybills changeValue={changeValue} />
      </Container>
    </Wrapper>
  );
};

export default CheckWaybillForm;
