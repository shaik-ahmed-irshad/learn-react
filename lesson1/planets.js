import "./App.css";

function App() {
    const planets = [
        { name : 'Mars', isGasPlanet:false },
        { name : 'Earth', isGasPlanet:false },
        { name : 'Jupiter', isGasPlanet:true },
        { name : 'Venus', isGasPlanet:false },
        { name : 'Neptune', isGasPlanet:true },
        { name : 'Uranus', isGasPlanet:true }
    ];

    return (
        <div className='App'>
            {planets.map((users, key) => {
              return  <Planet name={users.name} isGasPlanet={users.isGasPlanet}/>                        
            })}
        </div>
    );


}

const Planet = (props) => {
   return  (props.isGasPlanet) && <div>{props.name}</div>
 }


export default App;