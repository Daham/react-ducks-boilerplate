import React from 'react';
import ServerIcon from '@material-ui/icons/Storage';
import HistoryIcon from '@material-ui/icons/History';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MainIcon from '@material-ui/icons/StarBorder';
import EscalationsIcon from '@material-ui/icons/ArrowUpward';
import EnvironmentIcon from '@material-ui/icons/Public';
import CategoryIcon from '@material-ui/icons/Category';
import ZoneIcon from '@material-ui/icons/Terrain';
import IncidentsIcon from '@material-ui/icons/Warning';
import TicketsAllocationIcon from '@material-ui/icons/LocalOffer';

export const getIcon = (tag) => {
    switch (tag) {
        case 'server':
            return <DashboardIcon />;
        case 'layout1':
            return <DashboardIcon />;
        case 'layout2':
            return <DashboardIcon />;
        case 'layout3':
            return <DashboardIcon />;
        case 'layout4':
            return <DashboardIcon />;
        case 'subLayout1_3':
            return <DashboardIcon />;
        case 'subLayout2_3':
            return <DashboardIcon />;
        case 'subLayout1_4':
            return <DashboardIcon />;
        case 'subLayout2_4':
            return <DashboardIcon />;
        default:
            break;
    }
}