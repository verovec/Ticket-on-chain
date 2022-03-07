import './App.css';
import {User} from "./screens/user";
import {Agent} from "./screens/agent";



function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flex: 1, height: '100vh', width: '100%', flexDirection: 'row' }}>
        <User />
        <Agent />
      </div>
    </div>
  );
}

export default App;
