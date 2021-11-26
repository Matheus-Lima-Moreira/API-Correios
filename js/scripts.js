$(
   function(){


 $('#buscar').click(
    function(){

      
        var dados;
        dados={cep:$('#cep').val()};
        
        $.post('apiCorreio.php',dados, function(retornaDadosCep){
        
      
       resultado = retornaDadosCep.split(",");
       logradouro=resultado[0].trim();
       complemento=resultado[1];
       bairro=resultado[2];
       localidade=resultado[3];
       uf=resultado[4];
       
       $('#logradouro').val(logradouro);
       $('#complemento').val(complemento);
       $('#bairro').val(bairro);
       $('#localidade').val(localidade);
       $('#uf').val(uf);
      
      

           
        });

      }

               
      
  );//fim do click no #buscar


   
  }//fim da funcao anonima principal

   	
 );
 