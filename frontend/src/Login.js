import {useState} from 'react'
import {Container, Form, Row} from 'react-bootstrap'
import { Redirect } from 'react-router';
import FrameTitle from './components/FrameTitle'
import FrameInputText from './components/FrameInputText'
import FrameLabel from './components/FrameLabel'
import FrameLabelLink from './components/FrameLabelLink'
import FrameFormSubmit from './components/FrameFormSubmit'
import config from './utils/Config'
//eslint-disable-next-line 
import w3 from './css/w3.css'

const Login = (props) => {
    const [validated, setValidated] = useState(false);
    const [state, setState] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateForm = (e) => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else{
            fetch(config.apiBaseUrl+"login", {
                method: "POST", 
                headers:{
                    "Content-Type":"text/plain"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }).then(res => {
                if(res.status === 200)
                    return res.json()
                
                return Promise.reject(res)
                
            }).then(result => {
                const response = JSON.parse(JSON.stringify(result));
                
                props.authenticate({
                    usersName: response.user.user_name,
                    usersEmail: response.user.user_email,
                    usersGroup: response.usersGroup,
                    usersLoggedIn: true
                });

                setState({
                    error: '',
                    fireRedirect: true
                });
                /**
                 * iniciar sessao react
                 * redirecionar ao dashboard
                 */
            }).catch(response => {
                setState({
                    error: response.data.message
                });
                console.log(this.state.error)
                console.log("Request complete! Failed. Response:", response);
            });
            e.preventDefault();
        }

        setValidated(true)
        
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}   
    return (
        <Container style={{marginTop: "4rem "}}>
            <Row className="justify-content-center align-items-center">
                <Form noValidate validated={validated} className="w3-container w3-card guest w3-white w3-round w3-margin justify-content-center" onSubmit={validateForm.bind(this)} method="POST" >
                    
                        <Form.Group style={{width:"100%", paddingBottom:"22px"}}>
                            <Row><FrameTitle title="Iniciar sessão"/></Row>
                            <Row><FrameInputText name="Utilizador" form="username" icon="account_circle" type="name" onChange={handleUsernameChange.bind(this)}/></Row>
                            <Row><FrameInputText name="Senha" form="password" icon="lock" type="password" onChange={handlePasswordChange.bind(this)}/></Row>
                            <Row><FrameLabel label="Esqueceu senha?" fontFamily="Montserrat" class="col-sm btn text-right" fontWeight="normal" fontSize="12px"/></Row>
                            <Row><FrameFormSubmit button="Iniciar sessão"/></Row>
                            <Row><FrameLabelLink url="/signup" label="não possuí conta? Cadastrar" fontFamily="Montserrat" fontWeight="bold" class="col-sm btn align-self-end" marginTop="0px" fontSize="12.8px"/></Row>
                            <Row><FrameLabel label="tedic.mz" class="col-sm text-center" fontFamily="Padauk" fontWeight="normal" marginTop="0px" fontSize="12px"/></Row>
                        </Form.Group>
                </Form>
            </Row>
            {state.fireRedirect && <Redirect to='/dashboard' push={true} />}
        </Container>
    );
}
export default Login;