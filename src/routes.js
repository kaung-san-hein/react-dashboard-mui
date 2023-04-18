import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Report from './pages/Report';

export const routes = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon />,
        path: '/',
        component: <Dashboard />
    },
    {
        name: 'Accounts',
        icon: <AccountCircleIcon />,
        path: '/accounts',
        component: <Accounts />
    },
    {
        name: 'Report',
        icon: <ReportIcon />,
        path: '/report',
        component: <Report />
    }
]