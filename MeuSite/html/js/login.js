function Nova()
            {
                var nome = document.getElementById("nome").value;
                var senha = document.getElementById("senha").value;
                if(nome != "" && senha!=""){    
                    if(nome == "Cleberton" && senha == "ton2911"){
                        location.href="index.html"
                    }else{
                        if(nome == "Cleberton"){
                            if(senha=="ton2911"){

                            }else{
                                alert(" Senha incorreta")
                            }
                        }else{
                            if(senha == "ton2911"){
                                alert("login incorreto")
                            }else{

                                alert(" login e senha incorretos")
                            }
                        }
                        
                    }
            }
}
        function mouseoverPass(obj) {
            var obj = document.getElementById('senha');
            obj.type = "text";
          }
          function mouseoutPass(obj) {
            var obj = document.getElementById('senha');
            obj.type = "password";
          }
              
        function Voltar(){
            window.history.back()
        }
        function mouseoverPass2(obj) {
            var obj2 = document.getElementById('confirmar_senha');
            obj2.type = "text";
          }
        function mouseoutPass2(obj) {
            var obj2 = document.getElementById('confirmar_senha');
            obj2.type = "password";
          }


       
      