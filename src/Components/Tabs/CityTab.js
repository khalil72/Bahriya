import React , {useState , useEffect} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box ,Typography } from '@mui/material';
import CityData from '../../Assets/Data/CityData';
import PropertyData from '../../Assets/Data/PropertyData'


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CityTab = () => {
    const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [justifyActive, setJustifyActive] = useState('tab')
    const  handleClick = (event , newValue) => {
      if(value === justifyActive){
        return;
      }
      setJustifyActive(value)
    }

    const [city , setCityData] = useState(CityData);
    const [filterdata , setFilterData] = useState();
  
    useEffect( () => {
      if(city === 'islamabad'){
        setFilterData(PropertyData.city_id);
        console.log('get data');
      }
      if(city === 'lahore'){
  

        setFilterData(PropertyData.city_id);
      }
  
    } , [CityData])
 

  return (
    <Box sx={{ width: '100%' }}>

    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"

    >
        {CityData.map((item)=>(
              <Tab value={item.id} label={item.city_name}  onClick={() => handleClick('tabs1')}  {...a11yProps(0)}/>

        ))}
    
    </Tabs>
    </Box>
  )
}

export default CityTab