import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from "./Components/Navbar/Navbar";
import AuthProvider from './Context/AuthProvider';
import AddService from "./Pages/AddService/AddService";
import AddToOrder from "./Pages/AddToOrder/AddToOrder";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import NotFound from './Pages/NotFound/NotFound';
import YourOrders from './Pages/YourOrders/YourOrders';
import PrivateRoute from "./PrivateRoute/PrivateRoute";


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/addToOrder/:id">
              <AddToOrder></AddToOrder>
            </PrivateRoute>
            <PrivateRoute path="/yourOrders">
              <YourOrders></YourOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/mangeOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
