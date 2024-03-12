import './App.css';
import EventEcample from './components/EvntEcample';
import { useState } from 'react';
import Form from './components/Form';
import Counter from './components/Counter';
import ErrorBoundery from './ErrorBoundery';

function App() {
  const [countApp,setCountApp]=useState(10)
  return (
    <div>
      {/* <h2>form</h2>
      <h2>error boiundry</h2>
      <h2>event handler</h2>
      {countApp}
      <EventEcample countApp={countApp} setCountApp={setCountApp}/>
      <Form/> */}
      <ErrorBoundery>
      <Counter/>
      </ErrorBoundery>

      <Counter/>
    </div>
  );
}

export default App;
