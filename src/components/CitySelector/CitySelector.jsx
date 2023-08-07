import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { Autocomplete, TextField, CircularProgress } from '@mui/material';

import { selectCities, selectCity } from '../../redux/offices/selectors';
import { setCityName } from '../../redux/offices/slice';
import CustomCityItem from '../CustomCityItem/CustomCityItem';

const CitySelector = ({ getCityName }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const citiesList = useSelector(selectCities);
  const cityName = useSelector(selectCity);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
    setOptions(
      citiesList.map(item => {
        return { title: item.Description, id: item.CityID };
      })
    );
  }, [citiesList, open, cityName]);

  const onSelectChange = evt => {
    dispatch(setCityName(evt.target.innerText));
    getCityName(evt.target.innerText);
  };

  return (
    <Autocomplete
      id="city"
      autoSelect={true}
      onChange={onSelectChange}
      sx={{ width: 300, marginBottom: '24px' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      ListboxComponent="ul"
      renderOption={(props, option, { selected, inputValue }) => (
        <CustomCityItem
          {...props}
          selected={selected}
          inputValue={inputValue}
          key={option.id}
          data-focus={props['data-focus']}
        >
          {option.title}
        </CustomCityItem>
      )}
      components={{
        ListItem: CustomCityItem,
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={option => option.title}
      options={options}
      renderInput={params => (
        <TextField
          {...params}
          label="Оберіть місто"
          sx={{
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
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </div>
            ),
          }}
        />
      )}
    />
  );
};

CitySelector.propTypes = {
  getCityName: PropTypes.func.isRequired,
};

export default CitySelector;
