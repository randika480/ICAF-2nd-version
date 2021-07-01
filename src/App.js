import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";










import AdminDashboard from "./screens/AdminDashboard";
import ReviewerDashboard from "./screens/ReviewerDashboard";
import Home from "./screens/Home";



const App = () => {
  return (
    <BRouter>
     
      <main className="page-body-content">
       
       
        <Switch>
          <Route exact path="/profile/admin" component={AdminDashboard} />
        </Switch>
       
        <Switch>
          <Route exact path="/profile/reviewer" component={ReviewerDashboard} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
  

   
   
      



      </main>
   
    </BRouter>
  );
};

export default App;
