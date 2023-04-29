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
        sectionTitle: 'Operation document'
      },
      {
        title: 'Login',
        icon: Login,


        children:[
          {
            title: 'Login',
        icon: Login,
        path: '/pages/login',
          }
        ]
      },
      {
        title: 'num ou',
        icon: Login,
        path: '/test3',

      },
      {
        title: 'powerpurchase',
        icon: Login,
        path: '/test2',

      },
      {
        title: 'Components5',
        icon: 'mdi:archive-outline',
        children:[
          {
            title:'components',
            path:'/test2'
          }
        ]

      },

      {
        title: 'numnguemee',
        icon: Login,
        path: '/test4',


      },
      {
        title: 'formdesign',
        icon: Login,
        path: '/formdesign',


      },
      // {
      //   title: 'Register',
      //   icon: AccountPlusOutline,
      //   path: '/pages/register',
      //   openInNewTab: true
      // },
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

  export default navigation
