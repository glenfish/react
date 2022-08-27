
import './App.css';
import Employee from './components/Employee'
import {useState} from 'react';
function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      <p>----------</p>
      {showEmployees ?   
      <>
      <input type='text' onChange={
          (e) => {
            
            setRole(e.target.value);
            console.log(role)
          }
        }></input>
        <Employee name="Nick" role="Intern"/>
        <Employee name="Abby" role={role}/>
        <Employee name="Scott" role="CTO"/>
      </>
       : <h3>You cannot see the employees, sorry!</h3>}
      
    </div>
  );
}

export default App;
