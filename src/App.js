import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
        <AppProvider>
            <div className="container">
                <h1>Shopping App</h1>
                <div className="row">
                    <div className="col-sm">
                        <CartValue/>
                    </div>
                    <div className="col-sm">
                        <Location/>
                    </div>
                </div>
                <div>
                    <ExpenseList/>
                </div>
                <h3>Add Items</h3>
                <div className="row">
                    <ItemSelected/>
                </div>
            </div>
        </AppProvider>
    </div>
  );
}

export default App;