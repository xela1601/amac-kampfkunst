import React from "react"
import { Link } from "gatsby"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Avatar,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import useStyles from "../styles/components/header.styles"
import useSiteMetadata from "../queries/siteMetadata"
import useMenuData from "../queries/menu"
const Header = props => {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }
  const data = useMenuData()
  const mobileMenuId = "menu"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {data.wpMenu.menuItems.nodes.map(menuItem => (
        <MenuItem>
          <Typography variant="body1">
            <Link className={classes.linkForMobile} to={menuItem.path}>
              {menuItem.label}
            </Link>
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  )
  const { title, description, author, image } = useSiteMetadata()

  console.log(JSON.stringify(data))
  return (
    <div>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <Link className={classes.title} to="/">
            <Avatar
              alt={title}
              title={title}
              src={image}
              className={classes.large}
            />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {data.wpMenu.menuItems.nodes.map(menuItem => (
              <Typography className={classes.link} variant="body1">
                <Link to={menuItem.path}>{menuItem.label}</Link>
              </Typography>
            ))}
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label={mobileMenuId}
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}
export default Header
