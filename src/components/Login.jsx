import React from 'react';



class Login extends React.Component {
  render() {
    return (

    <div className="login-body">
        <div class="login-box">
            <h2>Iniciar Sesion</h2>
            <form action="">
                <div class="user-box">
                <input type="text" placeholder="Usuario" />
                    <label for="">Usuario</label>
                </div>
                <div class="user-box">
                <input type="password" placeholder="Contraseña" />
                    <label for="">Contraseña</label>
                </div>
                <button href="">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Login
                </button>
            </form>
        </div>
    </div>


      
    );
  }
}

export default Login;