import Image from 'react-bootstrap/Image'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './css/index.css';
import './css/bootstrap.css'
import './css/google-fonts.css'

const Banner = () => {
    return(
      <Container className="mt-5">
        <Row className="align-items-center justify-content-center">
          <h1 className="montserrat" style={{position:'absolute', top: '6rem'}}>Organize &agrave;s tuas <br/><strong>ideias</strong></h1>
          <Button style={{position:'relative', top: '12rem'}}>Come&ccedil;ar agora</Button>
          <Image src="./img/todolist-home-banner.png" fluid/>
        </Row>
        
      </Container>
    );
  }
  const AboutUs = (props) => {
    return(
      <Container id="about-us">
        <Row>
          <Col>
            <Image src="./img/tedic_.png" style={{width:"416px"}}/>
          </Col>
          <Col>
            <Container className="d-inline align-middle">
              <Row><h5 className="montserrat">DE UMA IDEIA PARA<br/>UMA <strong>INICIATIVA</strong></h5></Row>
              <Row className="montserrat">To-do List , aplicativo de registro de ativadades, tarefas de um utilizador. 
                Este faz parte do portfolio dos softwares desenvolvidos pela TEDIC, que opera no 
                ramo de T&eacute;cnologias de Informa&ccedil;&atilde;o desde 2018. Participa, 
                desde ent&atilde;o, no desenvolvimento de ferramentas digitais, para apoiar 
                empresas e singulares simplificando suas opera&ccedil;&otilde;es coitidianas.</Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
  const ContactUs = () => {
    return(
      <footer>
        <Container id="contact-us">
          <Row>
            <Container>
            <h4>Endere&ccedil;o</h4>
            <Container style={{lineHeight:"0.5rem"}}>
              <p>Rua General Fernando Matavel &mdash; Q.49 &mdash; cs.247</p>
              <p>Maputo, Mo&ccedil;ambique</p>
            </Container>
            
            <h4>Contacto</h4>
            <Container>
              <pre>
                +258 879 073 069 <br/>
                +258 849 213 956
              </pre>
            </Container>
            <h4>Redes socias</h4>
            <Container>
              <pre>
                <a href="https://www.instagram.com/tedic.mz"><span className="material-icons">facebook</span></a>
                <a href="https://www.facebook.com/tedic.co.mz"><span className="material-icons">instagram</span></a>
              </pre>
            </Container>
  
            </Container>
            
          </Row>
        </Container>
      </footer>
    );
  }
  
  const Home = () => {
    return (
      <Container className="justify-content-center align-items-center">
        <Banner />
        <AboutUs />
        <ContactUs />
      </Container>
    );
  }


export default Home;