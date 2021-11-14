import "./App.css";
import { useState } from "react";
import Login from "./pages/Login";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CatFactsPage from "./pages/CatFactsPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import LoginContext from "./context/LoginContext";
import LogoutContext from "./context/LogoutContext";
import { Layout, Menu, Breadcrumb } from "antd";
import "./css/AppCss.css";
import 'antd/dist/antd.css';

function App() {
  const { Header, Content, Footer, Sider } = Layout;
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  return (
    <>
      <Router>
        <Layout>
          <Header className="header">
            <Nav />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/catFacts" component={CatFactsPage} />
              <Route exact path="/">
                <>{!isLoggedIn && <Redirect to={"/login"}></Redirect>}</>
              </Route>
              <Route path="*" component={NotFound} />
            </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            My App ©2021 Created by Matias Rapallini
          </Footer>
        </Layout>
      </Router>

      <UserContext.Provider value={{ user, setUser }}>
        {/* <LoginContext />
        <br />
        <LogoutContext /> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
