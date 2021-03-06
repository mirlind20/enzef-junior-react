import '../../styles/create-acc-form.css';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap'

const CreateAccForm = () => {
  return (
    <div className="create-account">
      <Form className="form-boxess">
        <FormGroup className="left-box">
          <FormLabel className='text-style'>First Name</FormLabel>
          <FormControl type='text' placeholder='John' name='firstName' className="bgd-style"/>
          <br />
          <FormLabel className='text-style'>E-mail</FormLabel>
          <FormControl type='email' placeholder='john@smith.com' name='email' className="bgd-style" />
          <br />
          <FormLabel className='text-style'>Password</FormLabel>
          <FormControl type='password' placeholder='******' name='password' className="bgd-style"/>
          <button className='register' type='button'>Create Account</button>
        </FormGroup>
        <FormGroup className="right-box">
          <FormLabel className='text-style'>Last Name</FormLabel>
          <FormControl type='text' placeholder='Smith' name='lastName' className="bgd-style"/>
          <br />
          <FormLabel className='text-style'>Birthday</FormLabel>
          <FormControl type='date' name='birthday' defaultValue="1999-12-22" className="bgd-style"/>
          <br />
          <FormLabel className='text-style'>Repeat Password</FormLabel>
          <FormControl type='password' placeholder='******' name='repeatPassword' className="bgd-style"/>
        </FormGroup>
      </Form>
    </div>
  );
};
export default CreateAccForm;