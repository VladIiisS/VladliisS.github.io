 import AppInfo from '../app-info/app-info';
 import SearchPanel from '../search-panel/search-panel';
 import AppFilter from '../app-filter/app-filter';
 import EmployeesList from '../employees-list/employees-list';
 import EmployeesAddForm from '../employees-add-form/employees-add-form';

 import './app.css';

 function App() {

    const data = [
      {name: 'Stiv', salary: 456, increase: false },
        {name: 'Maks', salary: 876, increase: true},
         {name: 'Ivan', salary: 1214, increase: false},
    ];
   return (
     <div className="app">
         <AppInfo />

         <div className="search-panel">
             <SearchPanel/>
             <AppFilter/>
         </div>
        
         <EmployeesList data = {data}/>
         <EmployeesAddForm/>
     </div>
   );
 }

 export default App;


// import './App.css';

//   function WhoAmI ({name, surname, link}) {
//       return (
//          <div> 
//             <h1> My name is { name}, surname - {surname}</h1>
//                <a href={props.link}>My profile</a>

//          </div>
//       )
//   }
//    function App () {
//       return (
//          <div className="App">
//             <WhoAmI name="John" surname="Smith" link="fecebook.com"/>
//              <WhoAmI name="Alex" surname="Spilberg" link="instagram.com"/>
//          </div>
//       );
//    }