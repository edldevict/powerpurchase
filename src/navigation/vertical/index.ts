/* eslint-disable lines-around-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
  // ** Icon imports
  import Login from 'mdi-material-ui/Login'
  import Table from 'mdi-material-ui/Table'
  import CubeOutline from 'mdi-material-ui/CubeOutline'
  import HomeOutline from 'mdi-material-ui/HomeOutline'
  import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
  import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
  import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
  import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
  import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
  import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
  import { FaBolt } from 'react-icons/fa';
  import { FaClipboardList } from 'react-icons/fa';
  import { FaClipboard } from 'react-icons/fa';
  import { FaDatabase } from 'react-icons/fa'
  


  // ** Type import
  import { VerticalNavItemsType } from 'src/@core/layouts/types'
  import path from 'path'

  interface NavLink {
    title: string;

    path: string;
    openInNewTab?: boolean;
    children?: VerticalNavItemsType[];
  }

  interface NavSectionTitle {
    sectionTitle: string;
  }

  const navigation = (): VerticalNavItemsType => {
    return [
      {
        title: 'Dashboard',
        icon: HomeOutline,
        path: '/'
      },

     
      {
        title: 'Manage data ',
        icon: FaDatabase,
        
        hasSubmenu:true,
        submenuItems:[
          {
            title:'Electric-dam',
            path:'/test3',
            icon: FaBolt,
          },
          {
            title: 'Unit',
            icon:FaClipboard,
            path: '/test4',
    
    
          },
        ]

        
      },
      {
        title: 'Declaration/dispatch',
        icon: GoogleCirclesExtended,
        hasSubmenu:true,
        
        submenuItems:[
          {
            title:'ff',
            path:'/test3',
            icon:FaClipboard,
          },
          {
            title: 'Daily report',
            icon:FaClipboard,
            path: '/test4',
    
    
          },
        ]

      },

      {
        sectionTitle: 'Home'
        
      },
      {
        title: 'Overview',
        icon: HomeOutline,
        path:'/overview'

        
      },
      {
        title: 'Declaration/dispatch',
        icon: GoogleCirclesExtended,
        path: '/test3',

      },
      {
        title: 'Summary',
        icon: FaClipboardList,
        path: '/test2',

      },
    

      {
        title: 'Daily report',
        icon:FaClipboard,
        path: '/test4',


      },
      {
        title: 'formdesign',
        icon: Login,
        path: '/formdesign',


      },
      {
        title: 'Register',
        icon: AccountPlusOutline,
        path: '/pages/register',
        openInNewTab: true
      },
      {
        title: 'Error',
        icon: AlertCircleOutline,
        path: '/pages/error',
        openInNewTab: true
      },
      {
        sectionTitle: 'User Interface'
      },
      {
        title: 'Typography',
        icon: FormatLetterCase,
        path: '/typography'
      },
      {
        title: 'Icons',
        path: '/icons',
        icon: GoogleCirclesExtended
      },
      {
        title: 'Cards',
        icon: CreditCardOutline,
        path: '/cards'
      },
      {
        title: 'Tables',
        icon: Table,
        path: '/tables'
      },
      {
        icon: CubeOutline,
        title: 'Form Layouts',
        path: '/form-layouts'
      },

    ]
  }

  export default navigation;
