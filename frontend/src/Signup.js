import { useState } from "react";
import {Container, Row, Form, FormGroup} from 'react-bootstrap'
import FrameTitle from './components/FrameTitle'
import FrameInputText from './components/FrameInputText'
import FrameLabel from './components/FrameLabel'
import FrameLabelLink from './components/FrameLabelLink'
import FrameFormSubmit from './components/FrameFormSubmit'
import FrameCheckbox from './components/FrameCheckbox'

const Signup = () => {
    const [validated, setValidated] = useState(false);

    const validateForm = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true)
        
    }   
    return(
        <Container style={{marginTop:"4rem"}}>
            <Row className="justify-content-center align-items-center">
                <Form noValidate validated={validated} className="w3-container w3-card guest w3-white w3-round w3-margin justify-content-center " name="signup" method="POST" onSubmit={validateForm.bind(this)}>
                    <FormGroup className="vertical-scrollable" style={{width:"100%", paddingBottom:"22px"}}>
                        
                            <Row><FrameTitle title="Subscrição"/></Row>
                            <div className="row"><FrameInputText name="Nome" form="firstname" icon="account_circle" type="name" width="100%"/></div>
                            <div className="row"><FrameInputText name="Apelido" form="surname" icon="account_circle" type="name" width="100%"/></div>
                            <div className="row"><FrameInputText name="E-mail" form="email" icon="email" type="email" width="100%"/></div>
                            <div className="row"><FrameInputText name="Utilizador" form="username" icon="account_circle" type="name" width="100%"/></div>
                            <div className="row"><FrameInputText name="Senha" icon="lock" form="password" type="password" width="100%"/></div>
                            <div className="row"><FrameCheckbox id="termos_comprimisso" form="termos_comprimisso" value="Eu aceito os termos de acordo e serviço"/> </div>
                            <div className="row"><FrameFormSubmit button="Criar conta"/></div>
                            <div className="row"><FrameLabelLink url="/login" label="cancelar" fontFamily="Montserrat" fontWeight="bold" class="col-sm btn align-self-end" marginTop="0px" fontSize="15px"/></div>
                            <div className="row"><FrameLabel label="tedic.mz" class="col-sm text-center" fontFamily="Padauk" fontWeight="normal" marginTop="0px" fontSize="12px"/></div>
                            
                        
                    </FormGroup>
                    
                </Form>
            </Row>
        </Container>
    );
}
export default Signup;