// accessign elements from code by giving attributes to a pre-written function


import './App.css';

function App() {

  return (
    <div className="App">
      <Job salary={90000} position='Senior SDE' company='Amazon' />
      <Job salary={12000} position='Junior SDE' company='Google' />
      <Job salary={10000} position='Project Manager' company='Netflix' />
    </div>
  );
}

export default App;

const Job = (props) => {
  return (
  <div>
  <h3>{props.company}</h3>
  <h3>{props.salary}</h3>
  <h3>{props.position}</h3>
  </div>
)}