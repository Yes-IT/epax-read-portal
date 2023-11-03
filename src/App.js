import React, { useEffect, useState, useMemo} from "react";
import "./assets/css/style.css";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import routes from "./utils/routes/index";
import ThemeCustomization from './themes';
import Header from "./components/Header";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import SearchContext from "./store/SearchContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/404";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedRoute from "./utils/routes/AnimatedRoute";
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const searchContextValue = useMemo(
    () => ({ searchTerm, setSearchTerm }), 
    [searchTerm]
  );

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) { //with ! to escap authentication
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);


  const location = useLocation();

  if (isLoading) return <Loading />;
  return (
    <ThemeCustomization>
    <AppContext.Provider value={[isLoggedIn, user]}>
      <SearchContext.Provider value = {searchContextValue}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch key={location.pathname} location={location}>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </GuestRoute>
              );
            }

            if (route.protected === "auth") {
              return (         
                <AuthRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </AuthRoute>
              );
            }

            return (
              
              <AnimatedRoute key={index} path={route.path} exact={route.exact}>
                <route.component />
              </AnimatedRoute>
            );
          })}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AnimatePresence>
      </SearchContext.Provider>
    </AppContext.Provider>
    </ThemeCustomization>
  );
}
export default App;
