import './App.css';
import BuggyCounter from './BuggyCounter'
import ErrorBoundrey from './ErrorBoundrey';
import Color from './conponents/Color';

function App() {
  return (
    <div>
      <h1>exe1</h1>
    <ErrorBoundrey>
    <BuggyCounter/>
    </ErrorBoundrey>

    <h1>exe2</h1>
    <ErrorBoundrey>
    <BuggyCounter/>
    </ErrorBoundrey>

    <ErrorBoundrey>
    <BuggyCounter/>
    </ErrorBoundrey>


    <h1>exe3</h1>
    <BuggyCounter/>


    <Color/>
    </div>
  );
}

export default App;
