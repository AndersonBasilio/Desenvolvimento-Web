function inverteString(palavra){
   var string = palavra;
   var quantCaracter = string.length;
   var stringInvertida = ''

   for(contador = quantCaracter - 1; contador >= 0; contador--){
      stringInvertida += string[contador]
   }

   console.log(stringInvertida)

}

inverteString('Helena')
