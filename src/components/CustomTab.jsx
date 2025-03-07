import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const CustomTab = ({ tab1, tab2, childElement }) => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(childElement)
  return (
    <div>
    <Box sx={{ width: '100%' }}>
      <div className='flex flex-row'>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='#2EC4B6'
          indicatorColor='#2EC4B6'
          aria-label="secondary tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#2EC4B6',
            },
            '& .Mui-selected': {
              color: '#2EC4B6',
            },
          }}
        >
          <Tab {...a11yProps(0)} label="Today" />
          <Tab {...a11yProps(1)} label="Overall" />
        </Tabs>
        {value == 1 && <div className='flex ml-[2px] md:ml-[200px]'>{childElement}</div>}
       </div> 
      <TabPanel value={value} index={0} dir={theme.direction}>
        {tab1}
        {/* test1 */}
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        {tab2}
        {/* test2 */}
      </TabPanel>
    </Box>
    </div>
  )
}

export default CustomTab