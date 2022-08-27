
import './App.css';
import Employee from './components/Employee'
import {useState} from 'react';
function App() {
  const [role, setRole] = useState('');
  const showEmployees = true;
  return (
    <div className="App">
      
      {showEmployees ?   
      <div className="container mx-auto bg-gray-300 rounded-lg m-10 p-10">
      <h2>Input the role</h2>
      <input placeholder="....." className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-20 mt-5" type='text' onChange={
          (e) => {
            
            setRole(e.target.value);
            console.log(role)
          }
        }></input>
        <Employee name="Nick" role="Intern"/>
        <Employee name="Abby" role={role}/>
        <Employee name="Scott" role="CTO"/>
      </div>
       : <h3>You cannot see the employees, sorry!</h3>}
      
    </div>
  );
}

export default App;
