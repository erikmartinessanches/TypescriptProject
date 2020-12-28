import React from 'react';
import ReactDOM from 'react-dom';

//Trying out pure React.
let dish = React.createElement("h1", null, "Baked Salmon");
ReactDOM.render(dish, document.getElementById('react-container'));

// import { cars } from "./demo";
// import CarItem from './CarItem'


// const App: React.FC = () => {
//     return(
//         <div className="App">
//             <ul>
//                 {cars.map((car) => (
//                     <CarItem car={car}/>
//                 ))}
//             </ul>
//         </div>
//     );
// }

//export default App;
