import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Carrinho from "./Carrinho";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Carrinho }  path="/" exact />
       </BrowserRouter>
   )
}

export default Routes;