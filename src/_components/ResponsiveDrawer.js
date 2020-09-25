import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { RangeSlider } from './RangeSlider';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from "@material-ui/core/Link";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {Archive} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import SearchBar from "material-ui-search-bar";



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    toolbar : theme.mixins.toolbar,
    content : {
        flexGrow: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginLeft: 300,
        },
    },
    offset: theme.mixins.toolbar,
}));

export default function ResponsiveDrawer() {
    const classes = useStyles();
    const [state,setSmallDevice] = React.useState(false);
    const handleSmallDevice = () => {
        setSmallDevice(!state);
    };

    const drawer  = (
        <div>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography component={'span'} variant={'body2'} className={classes.heading}>Technical Specifications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>
                            Airflow(CFM)
                            <RangeSlider min={5000} max={10000} setValue={handleSetYear}/>
                            Max Power (W)
                            <RangeSlider min={9.84} max={96.52} setValue={handleSetMaxPower}/>
                            Sound at max speed (dBA)
                            <RangeSlider min={20} max={80} setValue={handleSetMaxSpeed}/>
                            Fan sweep diameter (in)
                            <RangeSlider min={18} max={96} setValue={handleSetFanSweepDiameter}/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography component={'span'} variant={'body2'} className={classes.heading}>Model Year</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>
                            <RangeSlider min={2000} max={2020} setValue={handleSetYear}/>
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'span'} variant={'body2'} className={classes.heading}> Brand </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>

                            {/*<RangeSlider min={2000} max={2020}/>*/}
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography component={'span'} variant={'body2'} className={classes.heading}> Past Selections </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant={'body2'}>
                            Firm
                            <RangeSlider min={0} max={10} setValue={handleSetFirm}/>
                            Global
                            <RangeSlider min={0} max={1492} setValue={handleSetGlobal}/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
    return (
        <div>
            <AppBar position = 'sticky'>
                <Toolbar>
                    <Hidden smUp implementation="css">
                        <IconButton
                            color="inherit"
                            aria-label = "open drawer"
                            edge = 'start'
                            onClick  = {handleSmallDevice}
                        >  <MenuIcon />
                        </IconButton>
                        <Drawer
                            classes={{
                                paper: classes.drawer,
                            }}
                            open={state}
                            onClose = {handleSmallDevice}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css"> <Drawer
                        classes={{
                            paper: classes.drawer,
                        }}
                        open
                        variant = 'permanent'
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                    <SearchBar>Search Products</SearchBar>
                    <Button color="inherit" href="/login" >Logout</Button>

                </Toolbar>
            </AppBar>
            <div className={classes.content}>
                <div className={classes.toolbar} />
            </div>
        </div>

    );
}
const handleSetYear = (e) => {
    dispatch({
        type: applicationConstants.searchYear,
        payload: [...e]
    });

};
const handleSetAirflow = (e) => {
    dispatch({
        type: applicationConstants.searchAirflow,
        payload: [...e]
    });
};
const handleSetMaxPower = (e) => {
    dispatch({
        type: applicationConstants.searchMaxPower,
        payload: [...e]
    });
};
const handleSetMaxSpeed = (e) => {
    dispatch({
        type: applicationConstants.searchMaxSpeed,
        payload: [...e]
    });
};

const handleSetFanSweepDiameter = (e) => {
    dispatch({
        type: applicationConstants.searchFanSweepDiameter,
        payload: [...e]
    });
};
const handleSetFirm = (e) => {
    dispatch({
        type: applicationConstants.searchFirm,
        payload: [...e]
    });
}

const handleSetGlobal = (e) => {
    dispatch({
        type: applicationConstants.searchGlobal,
        payload: [...e]
    });
}
