import Resto from './Resto.png';
import Capture from './Capture.PNG';
import React, {useState} from 'react';
import swal from 'sweetalert';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
export default function Auth() {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleValidate=(e)=> {
    e.preventDefault()
    if(email==='k@gmail.com' && password==='123')
    {
      swal("Successful Login","Welcome Restaurant","success")
    }
    else
    {
      swal("Wrong Credentials","Please try again","error")
    }
  }
  return (
    <div className='App-header' style={{ marginTop: "3.8rem" }}>
      <h1>Authentication</h1>
      <Container>
        <Row>
            <Col style={{marginTop:'6rem'}}>
              <img width="300px" height="300px" src={Resto} />
              <img width="px" height="px" src={Capture} />
            </Col>
            <Col style={{padding:'100px', border:'12px solid black', borderRadius:'3rem' ,  backgroundColor: '#FFEB3B', margin:'90px'}}>
              <Form onSubmit={handleValidate} >
               <input type="text" value={email} placeholder='Enter Email'
               onChange={(e)=>setEmail(e.target.value)}/>
               <br/><br/>
               <input type="text" value={password} placeholder='Enter Password' 
               onChange={(e)=>setPassword(e.target.value)}/>
               <br/><br/>
               <Button type='submit'>Login</Button>
              </Form>
            </Col>
        </Row>
      </Container>
      
      
    </div>
  )
}

