import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import { auth } from './components/Firebase';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useStateValue } from './components/StateProvide';
import { loadStripe, } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe (
  'pk_test_51N5T6NEO5eXO5u6zPOOFj4rrtAzfqN1M0GutrOye4xe9w0KicC9bOqxo2rrnF2K6kVaxFHC3BTnoAtma2mVRGNFo00qu6SqDBG'
)

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if(authUser) {
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
      <div className="App">
        
        <BrowserRouter>
        <Elements stripe={promise}>
          <Header />

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/login' element={<Login/>}/>

                <Route path='/payment' element={<Payment/>}/>
              <Route path='/orders' element={<Orders />}/>
            </Routes>
            </Elements>
        </BrowserRouter>
      </div>
  );
}

export default App;
