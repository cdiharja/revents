
import React,{Fragment} from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import EventDetailedPage from './features/eventDetailed/EventDetailedPage';
import EventDashboard from './features/events/eventDashboard/EventDashboard';
import EventForm from './features/events/eventForm/EventForm';
import HomePage from './features/home/HomePage';
import NavBar from './features/nav/NavBar';
import Sandbox from './sandbox/Sandbox';

function App() {
  const {key} = useLocation();
  // const [formOpen,setFormOpen] = useState(false);  
  // const [selectedEvent,setSelectedEvent] = useState(null);
  
  // const handleSelectEvent = (event)=>{
  //   setSelectedEvent(event);
  //   setFormOpen(true);
  //   console.log(event);
  // };
  // const handleCreateFormOpen=()=>{
  //   setSelectedEvent(null);
  //   setFormOpen(true);
  // };

  return (
    <Fragment>
       <Route path="/" exact component={HomePage}/>
       <Route path={'/(.+)'} render={()=>(
         <>
           <NavBar/>
          <Container className="main">
            <Route path="/sandbox" exact component={Sandbox}/>
              <Route path="/events" exact component={EventDashboard}/>
              <Route path="/events/:id" component={EventDetailedPage}/>
              <Route path={["/createEvent","/manage/:id"]} component={EventForm} key={key}/>

              {/* <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} onEventSelect={handleSelectEvent} selectedEvent={selectedEvent}/> */}
          </Container>
         </>
       )}></Route>
   
    </Fragment>
  );
}

export default App;
