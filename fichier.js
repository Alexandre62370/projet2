function validateForm()
         {

             var name = document.forms["myForm"]["name"];
             if (name.value == ""){
                 document.getElementById('errorname').innerHTML="  Veuillez entrez un nom valide";
                 name.focus();
                 return false;
             }else{
                    document.getElementById('errorname').innerHTML="";
             }

             var first_name = document.forms["myForm"]["first_name"];
             if (first_name.value == ""){
                 document.getElementById('errorfirst_name').innerHTML="  Veuillez entrez un prénom valide";
                 first_name.focus();
                 return false;
             }else{
                 document.getElementById('errorfirst_name').innerHTML="";
             }

            var email = document.forms["myForm"]["email"];
             if (email.value.indexOf("@",0)<0){
                 document.getElementById('erroremail').innerHTML="  Veuillez entrez une adresse mail valide";
                 email.focus();
                 return false;
             }else{
                 document.getElementById('erroremail').innerHTML="";
             }

             var civil = document.forms["myForm"]["civil"];
             if (civil.value == ""){
                 document.getElementById('errorcivil').innerHTML="  Veuillez choisir une civilité";
                 civil.focus();
                 return false;
             }else{
                 document.getElementById('errorecivil').innerHTML="";
             }

         }