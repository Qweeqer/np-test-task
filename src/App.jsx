import { useState } from 'react';
import { Tabs, Tab, useMediaQuery, Box, styled } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import { ToastContainer } from 'react-toastify';

import CheckWaybillForm from './components/CheckWaybillForm/CheckWaybillForm';
import OfficeSearch from './components/OfficeSearch/OfficeSearch';
import { Container, Image } from './App.styled';

const tabColors = {
  default: 'transparent',
  selected: '#0fbdf7',
};

const iconColors = {
  default: '#000',
  selected: '#fff',
};

const TabLabel = styled('span')(({ isSelected }) => ({
  color: isSelected ? iconColors.selected : iconColors.default,
  '&.Mui-selected': {
    color: iconColors.selected,
  },
}));

function App() {
  const [value, setValue] = useState('check');
  const tablet = useMediaQuery('(min-width:768px)');

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      value: 'check',
      label: 'Перевірити ТТН',
      icon: <SearchOutlinedIcon />,
    },
    {
      value: 'list',
      label: 'Список відділень',
      icon: <NotListedLocationOutlinedIcon />,
    },
  ];

  return (
    <Container>
      <ToastContainer />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#0fbdf7' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="choosing tab"
            textColor="inherit"
            indicatorColor="secondary"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#fff',
              },
            }}
            centered={!tablet}
          >
            {tabs.map(tab => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={
                  <TabLabel isSelected={value === tab.value}>
                    {tab.label}
                  </TabLabel>
                }
                icon={tab.icon}
                sx={{
                  fontSize: tablet ? undefined : '12px',
                  color:
                    value === tab.value
                      ? iconColors.selected
                      : iconColors.default,
                  backgroundColor:
                    value === tab.value
                      ? tabColors.selected
                      : tabColors.default,
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Box>
          <Image />
        </Box>
        <TabPanel value="check">
          <CheckWaybillForm />
        </TabPanel>
        <TabPanel value="list">
          <OfficeSearch />
        </TabPanel>
      </TabContext>
    </Container>
  );
}

export default App;
