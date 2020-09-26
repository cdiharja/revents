import React,{Fragment,useState} from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import EventDashboard from './features/events/eventDashboard/EventDashboard';
import NavBar from './features/nav/NavBar';

function App() {
  
  const [formOpen,setFormOpen] = useState(false);  
  const [selectedEvent,setSelectedEvent] = useState(null);
  
  const handleSelectEvent = (event)=>{
    setSelectedEvent(event);
    setFormOpen(true);
    console.log(event);
  };
  const handleCreateFormOpen=()=>{
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <Fragment>
    
     <NavBar setFormOpen={handleCreateFormOpen}/>
     <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} onEventSelect={handleSelectEvent} selectedEvent={selectedEvent}/>
     </Container>
    </Fragment>
  );
}

export default App;
