import React, { useState } from "react";
import {
  Globalpage,
  Cardpage,
  Cardlogin,
  Imageconstructor,
  Textinfo,
  Titlelog,
  Formlog,
  Labelog,
  Buttonlog,
  Inputlog,
  FormGrouplog,
  Divbutton,
  H3,
  DivBtn,
  Divregister,
} from "../../assets/styles/auth/authstyled";

import constructor from "../../assets/img/constructor.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth";
import api from "../../services/api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeForm(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  const authLogin = (user) => {
    return (dispatch) => {
      api
        .post("/login", user)
        .then((res) => {
          if (res.data && res.status === 200) {
            localStorage.setItem("token", res.data.token);
            dispatch(login());

            navigate("/preloader");
            console.log(res.data)
          } else {
            console.log(res)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  function submitForm(e) {
    e.preventDefault();

    dispatch(authLogin(form));

    setForm({ email: "", password: "" });
  }

  function handleClickregister() {
    navigate("/register");
  }

  function handleClickLogin() {
    navigate("/PreLoader");
  }

  return (
    <>
      <Globalpage>
        <Cardpage>
          <Cardlogin>
            <Titlelog>LOGIN</Titlelog>
            <Formlog inline>
              <H3>Email</H3>
              <FormGrouplog floating>
                <Inputlog
                  style={{ borderRadius: "15px", height: "50px" }}
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={changeForm}
                  value={form.email}
                />
                <Labelog for="exampleEmail">Email</Labelog>
              </FormGrouplog>{" "}
              <H3>Senha</H3>
              <FormGrouplog floating>
                <Inputlog
                  style={{ borderRadius: "15px", height: "20%" }}
                  onChange={changeForm}
                  name="password"
                  placeholder="Senha"
                  type="password"
                  value={form.password}
                />
                <Labelog for="examplePassword">Password</Labelog>
              </FormGrouplog>{" "}
              <DivBtn>
                <button>Esqueceu sua senha?</button>
              </DivBtn>
              <Divbutton>
                <Buttonlog
                  style={{
                    background: "#2166C1",
                    color: "white",
                    borderColor: "#2166C1",
                    borderRadius: "15px",
                    height: "55px",
                    fontSize: "20px",
                    fontFamily: "Roboto",
                  }}
                  onClick={(e) =>{submitForm(e)}}
                >
                  LOGIN
                </Buttonlog>
              </Divbutton>
              <Divregister>
                <h2>Ainda não tem cadastro? </h2>
                <button onClick={handleClickregister}>Registre-se aqui.</button>
              </Divregister>
            </Formlog>
          </Cardlogin>
          <Textinfo>
            <h2>
              Alugue equipamentos, máquinas e ferramentas para o seu trabalho
            </h2>
          </Textinfo>
          <Imageconstructor>
            <img src={constructor} alt="constructor" />
          </Imageconstructor>
        </Cardpage>
      </Globalpage>
    </>
  );
}

export default Login;
