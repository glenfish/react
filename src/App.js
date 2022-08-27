
import './App.css';
import Employee from './components/Employee'
function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?   
      <>
        <Employee name="Nick" role="Intern"/>
        <Employee name="Abby" role=""/>
        <Employee name="Scott" role="CTO"/>
      </>
       : <h3>You cannot see the employees, sorry!</h3>}
      
    </div>
  );
}

export default App;
