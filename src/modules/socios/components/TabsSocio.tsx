import {
    Container,
    /*  Typography, */
} from '@mui/material';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import InfoSocio from './InfoSocio';
import { Response } from '../../../interface/Socios.interface';
import BuyProcess from '../../hinchas/components/BuyProcess';
const primary = {
    50: '#F0F7FF',
    100: '#303030',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#e5e918',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
    color: ${primary[100]};
    cursor: pointer;
    font-size: 1rem;
    background: ${primary[500]};
    padding: 15px 20px;
    border: none;
    display: flex;
  
    &.Mui-selected {
      color: #000;
      font-weight: bold;
    }
  
    
  
    &.${buttonUnstyledClasses.focusVisible} {
      color: #E90101;
      outline: none;
      background-color: ${primary[600]};
      border-bottom: 2px solid ${primary[600]};
    }
  
    &.${tabUnstyledClasses.selected} {
      border-bottom: 4px solid #E90101;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
      box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
    }
  `;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
  `;

const TabsList = styled(TabsListUnstyled)`
    background-color: ${primary[500]};
    border-radius: 8px;
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
    padding: 0 10px 0 10px;
    margin-bottom: 10px;
    display: flex;
    align-content: space-between;
  `;
const TabsSocio = (data: Response) => {
    return (
        <>
            <TabsUnstyled defaultValue={0}>
                <div style={{ width: 'fit-content', margin: '0 auto' }}>
                    <TabsList sx={{ width: 'fit-content' }}>
                        <Tab>Generar Boleto</Tab>
                        <Tab>Comprar Boleto</Tab>
                    </TabsList>
                </div>
                <TabPanel value={0}> <InfoSocio {...data} /> </TabPanel>
                <TabPanel value={1}>
                    <BuyProcess/>
                </TabPanel>
            </TabsUnstyled>
        </>
    )
}

export default TabsSocio;