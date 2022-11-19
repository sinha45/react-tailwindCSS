
import './App.css';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';


import Navbar from './components/NavBar/Navbar';
import PhoneBar from './components/PhoneBar/PhoneBar';

import Pricing from './Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-3xl font-bold'>Deal we Offer</h1>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>

    </div>
  );
}

export default App;
