import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import Calendar from 'react-calendar';

function App() {
  const [date,setDate] = useState(new Date());

  const onChange = date =>{
    
    setDate(date);
  }
  return (
    <div class="container"> <div >
  <Calendar onChange={onChange} value={date} />
  {date.toString()}
</div></div>
  );
}

export default App;
