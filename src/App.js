
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProfilePhoto from './Componet/profile/ProfilePhoto';
import FullName from './Componet/profile/FullName';
import Address from './Componet/profile/Address';
function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <br />
      <ProfilePhoto />
      <br />
      <Address />
      <br />
      <FullName />
    </div>
  );
}

export default App;
