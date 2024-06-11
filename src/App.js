// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Addtask from './Components/Addtask';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import TaskList from './Components/TaskList';

function App() {
  return (
     <div className='container'>
       <Navbar />
        <Row className="justify-content-md-center">
          <Col lg="6">
            <Addtask />
            <TaskList />

          </Col>
        </Row>
     </div>
  );
}

export default App;
