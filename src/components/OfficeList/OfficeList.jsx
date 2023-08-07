import { useSelector } from 'react-redux';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CircularProgress from '@mui/material/CircularProgress';

import { selectOffices } from '../../redux/offices/selectors';
import {
  selectIsLoading,
  selectIsWarehousesLoading,
} from '../../redux/offices/selectors';

import { ListWrap, Text } from './OfficeList.styled';

const OfficeList = () => {
  const offices = useSelector(selectOffices);
  const isLoading = useSelector(selectIsLoading);
  const isWarehousesLoading = useSelector(selectIsWarehousesLoading);
  const tablet = useMediaQuery('(min-width:600px)');

  const isLoadingData = isLoading || isWarehousesLoading;
  const listItemFontSize = tablet ? 17 : 14;

  return (
    <ListWrap>
      {isLoadingData ? (
        <CircularProgress color="secondary" />
      ) : offices.length === 0 ? (
        <Text>Нажаль відділень за цим адресом не знайдено &#128549; </Text>
      ) : (
        <List>
          {offices.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <PlaceOutlinedIcon sx={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: listItemFontSize }}
                primary={item.Description}
              />
            </ListItem>
          ))}
        </List>
      )}
    </ListWrap>
  );
};

export default OfficeList;
