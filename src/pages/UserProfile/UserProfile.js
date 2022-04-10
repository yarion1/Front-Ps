import React from "react";
import NavbarPage from "../../components/Navbar/index"
import ReactDOM from "react-dom";
import { useNavigate} from 'react-router-dom'
import style, {
    Cardprincipal,
    Cardsecundario,
    Cardterciario
} from '../../assets/styles/UserProfile/styleduserprofile'

function UserProfile (props) {
    
    return (
        <Card></Card>
        
    );

};

function Card () {
    return(
        <Cardprincipal>
            <img src="https://i.pinimg.com/originals/25/89/9c/25899cf2a79fbc31d2bd043ea86e6e70.jpg" className="imagemuser"></img>
            <Cardsecundario>
                <h1>Olá, Monika!</h1>
                <br/>
                <Cardterciario>
                    <h4>Nome:</h4>
                    <p>Monika Aktsuki Maya</p>
                </Cardterciario>
                <Cardterciario>
                    <h4>Email:</h4>
                    <p>lilmonika@gmail.com</p>
                </Cardterciario>
                <Cardterciario>
                    <h4>Senha:</h4>
                    <p>delet*****</p>
                </Cardterciario>
            </Cardsecundario>
        </Cardprincipal>
    );
}

export default UserProfile;