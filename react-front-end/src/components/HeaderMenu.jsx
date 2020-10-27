import React, { useEffect } from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";

import Profile from "./Profile";
import Employees from "./Employees";
import Work from "./Work";
import EmployeesGroupTabs from "./EmployeesGroupTabs";
import ProfileTabs from "./ProfileTabs";
import WorkTabs from "./WorkTabs";
import CountriesContainer from "./CountriesContainer"

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  drawerPaper: {
    width: "240px",
  },
  content: {
    padding: theme.spacing(3),
  },
  drawerContainer: {
    height: "100vw",
    width: "240px",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    marginLeft: "240px",
  },
  headerContainer: {
    padding: "10px",
    alignItems: "center",
    position: "static",
  },
}));

function ResponsiveDrawer(props) {
  // const { window } = props;
  const classes = useStyles();
  // const theme = useTheme();
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  const [currentTab, setCurrrentTab] = React.useState("profile");

  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const user = { name: "Rei" };

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);

  const drawer = (
    <div className={classes.drawerContainer}>
      <ListItem button>
        <Profile
          onClick={() => {
            setCurrrentTab("profile");
          }}
        />
      </ListItem>
      <ListItem button>
        <Employees
          onClick={() => {
            setCurrrentTab("employee");
          }}
        />
      </ListItem>
      <ListItem button>
        <Work
          onClick={() => {
            setCurrrentTab("work");
          }}
        />
      </ListItem>
    </div>
  );

  const tab =
    currentTab === "profile" ? (
      <ProfileTabs />
    ) : currentTab === "work" ? (
      <WorkTabs />
    ) : (
      <EmployeesGroupTabs />
      // <CountriesContainer />
    );

  return (
    <div>
      {/* <div>
        {currentUser.loggedIn ? (
          <>
            <h1>Hello, {currentUser.user.name}</h1>
            <button onClick={() => dispatch(allActions.userActions.logOut())}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <button
              onClick={() => dispatch(allActions.userActions.setUser(user))}
            >
              Login as Rei
            </button>
          </>
        )}
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(allActions.counterActions.increment())}>
          Increase Counter
        </button>
        <button onClick={() => dispatch(allActions.counterActions.decrement())}>
          Decrease Counter
        </button>
      </div> */}

      {drawer}
      <div className={classes.contentContainer}>
        <AppBar className={classes.headerContainer}>
          <Typography variant="h6" noWrap>
            Management Application
          </Typography>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {tab}
        </main>
      </div>
    </div>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default ResponsiveDrawer;