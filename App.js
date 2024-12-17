import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemProvider } from "./context/ItemContext";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";

const App = () => {
   return (
       <ItemProvider>
           <Router>
               <div>
                   <h1>CRUD App with MERN & Context API</h1>
                   <Routes>
                       <Route
                           path="/"
                           element={
                               <>
                                   <AddItemForm />
                                   <ItemList />
                               </>
                           }
                       />
                       <Route path="/edit/:id" element={<EditItemForm />} />
                   </Routes>
               </div>
           </Router>
       </ItemProvider>
   );
};

export default App;
