/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ElementType, ReactNode, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

// ** Configs Import
import themeConfig from 'src/configs/themeConfig'

// ** Types

import { Settings } from 'src/@core/context/settingsContext'

// ** Custom Components Imports
import UserIcon from 'src/layouts/components/UserIcon'

// ** Utils
import { handleURLQueries } from 'src/@core/layouts/utils'

interface NavLink {
  title: string
  path?: string
  icon?: ElementType
  badgeContent?: string
  openInNewTab?: boolean
  disabled?: boolean
  hasSubmenu?: boolean
  submenuItems?: NavLink[]
}

interface Props {
  item: NavLink
  settings: Settings
  navVisible?: boolean
  toggleNavVisibility: () => void
}

// ** Styled Components

const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
>(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    backgroundImage: 'linear-gradient(45deg, #2196f3 30%, #1976d2 90%)'
  }
}))

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})

const SubMenuWrapper = styled(ListItem)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    background: '#f5f5f5',
    color: ''
  },
})

const SubMenu = ({ submenuItems, isOpen, handleToggle }: { submenuItems: NavLink[], isOpen: boolean, handleToggle: () => void }) => {
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit >
      <List component="div" disablePadding style={{color:'white'}}>
        {submenuItems.map((subItem, index) => (
          <VerticalNavLink key={index} item={subItem} navVisible={true} toggleNavVisibility={() => { } } settings={{
            mode: 'light',
            themeColor: 'primary',
            contentWidth: 'full'
          }} />
        ))}
      </List>
    </Collapse>
  )
}

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  // ** Hooks

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  const IconTag: ReactNode = item.icon

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }
  
  const toggleSubMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    
<div>
  <ListItem disablePadding className="nav-link" disabled={item.disabled || false}>
    <Link passHref href={item.path === undefined ? "/" : `${item.path}`}>
      <MenuNavLink
        component="a"
        className={isNavLinkActive() ? "active" : ""}
        {...(item.openInNewTab ? { target: "_blank" } : null)}
        onClick={(e) => {
          if (item.path === undefined) {
            e.preventDefault();
            e.stopPropagation();
          }
          if (navVisible) {
            toggleNavVisibility();
          }
          if (item.hasSubmenu) {
            toggleSubMenu();
          }
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          pl: 3.5,
          pr: 2.5,
          py: 1.5,
          ...(item.disabled ? { pointerEvents: "none" } : { cursor: "pointer" }),
          "&:hover": {
            bgcolor: "primary.main",
            borderRadius: "8px"
          }
        }}
      >
       <ListItemIcon sx={{ color: 'white', minWidth: 'unset', mr:2  }}>
  <UserIcon icon={IconTag}  />
</ListItemIcon>
<Typography variant="body2" sx={{ color: 'white', flex: 1,ml:2 }}>
  {item.title}
</Typography>
        {item.badgeContent && (
          <Chip
            label={item.badgeContent}
            style={{ color: "white", marginLeft: 1.25 }}
            sx={{
              height: 20,
              fontWeight: 500,
              bgcolor: "secondary.main",
              "& .MuiChip-label": { px: 1.5, textTransform: "capitalize" },
            }}
          />
        )}
        {item.hasSubmenu && (isOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore  sx={{ color: "white" }} />)}
      </MenuNavLink>
    </Link>
  </ListItem>
  {item.hasSubmenu && <SubMenu submenuItems={item.submenuItems || []} isOpen={isOpen} handleToggle={toggleSubMenu} />}
</div>

  )
}

export default VerticalNavLink
