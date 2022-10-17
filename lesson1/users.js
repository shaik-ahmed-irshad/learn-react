import "./App.css";

function App() {
    const users = [
        { name : 'Pedro', age:21 },
        { name : 'Abdul', age:23 },
        { name : 'Shaik', age:22 }
    ];

    return (
        <div className='App'>
            {users.map((user, key) => {
                return <User name={user.name} age={user.age} />
            })}
        </div>
    );


}

const User = (props) => {
    return (
        <div>
            {props.name} {props.age}
        </div>
    );
};

export default App;