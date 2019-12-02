<template>
    <div>
        <body class="hold-transition login-page">
            <div class="login-box">
                <div class="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <!-- /.login-logo -->
                <div class="card">
                    <div class="card-body login-card-body">
                        <p class="login-box-msg">Iniciar Sesión</p>

                        
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Correo" v-model="email" >
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Contraseña" v-model="password" >
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <div class="icheck-primary">
                                        <input type="checkbox" id="remember" vs-model="remember_me">
                                        <label for="remember">Recuerdame
                                        </label>
                                    </div>
                                </div>
                                <!-- /.col -->
                                <div class="col-4">
                                     <vs-button  class="btn btn-primary btn-block"  >Login</vs-button>
                                    <!--<button @click="submit()"  >Entrar</button>-->
                                </div>
                                <!-- /.col -->
                            </div>
                      
                    </div>
                </div>
            </div>
        </body>
    </div>

</template>


<script>

//import apiAuth from '@/api/auth/index';

// export default {
export default {
    data() {
        return {
            email: 'jonathan@cuotto.com',
            password: '123454',
            remember_me: false,
        }
    },
    mounted() {
        console.log("en mounted de login");
        console.log(this.email);
    },
    computed: {

        /* Función que valida los campos requeridos un formulario */
        validateForm() {
            return !this.errors.any() && this.email != '' && this.password != '';
        },

    },
    methods: {
  
        /* Función que realiza el logueo de un usuario */
        login() {
            
                const user= {
                    email:      this.email,
                    password:   this.password }

                console.log(user)

        }
    }
}