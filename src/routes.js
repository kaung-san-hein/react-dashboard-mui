import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Report from './pages/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Regions from './pages/Regions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Patients from './pages/Patients';
import Login from './pages/Login';

export const routes = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon />,
        path: '/dashboard',
        component: <Dashboard />,
        layout: '/admin',
    },
    {
        name: 'Login',
        icon: null,
        path: '/login',
        component: <Login />,
        layout: '/auth',
        invisible: true,
    },
    {
        name: 'Accounts',
        icon: <AccountCircleIcon />,
        path: '/accounts',
        component: <Accounts />,
        layout: '/admin',
    },
    {
        collapse: true,
        name: 'Basic Data',
        icon: <BarChartIcon />,
        views: [
            {
                name: 'State/Regions',
                icon: <ChecklistIcon />,
                path: '/regions',
                component: <Regions />,
                layout: '/admin',
            }
        ]
    },
    {
        collapse: true,
        name: 'Patients',
        icon: <LibraryBooksIcon />,
        views: [
            {
                name: 'All Patients',
                icon: <ChecklistIcon />,
                path: '/patients',
                component: <Patients />,
                layout: '/admin',
            }
        ]
    },
    {
        name: 'Report',
        icon: <ReportIcon />,
        path: '/report',
        component: <Report />,
        layout: '/admin',
    }
]