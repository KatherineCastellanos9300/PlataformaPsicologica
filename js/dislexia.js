const indicadores = [

"Invierte letras, sílabas y/o palabras.",

"Confunde el orden de las letras dentro de las palabras.",

"Confunde especialmente las letras que tienen una similitud (d/b, u/n).",

"Omite letras en una palabra.",

"Sustituye una palabra por otra que empieza por la misma letra.",

"Tiene dificultades para conectar letras y sonidos.",

"Le cuesta pronunciar palabras, invierte o sustituye sílabas.",

"Al leer rectifica, vacila, silabea y/o pierde la línea.",

"No suele dominar todas las correspondencias entre letras y sonidos.",

"Confunde derecha e izquierda.",

"Escribe en espejo.",

"Dificultad para aprender secuencias (días de la semana, meses del año, estaciones).",

"Le cuesta planificar su tiempo y se tarda más de lo esperado.",

"Su coordinación motriz es pobre.",

"Evita leer."

];



let preguntas = document.getElementById("preguntas");


indicadores.forEach((indicador, index)=>{


preguntas.innerHTML += `

<div class="pregunta">

<p>
<strong>${index + 1}.</strong> ${indicador}
</p>


<label>
<input type="radio" name="pregunta${index}" value="SI">
SÍ
</label>


<label>
<input type="radio" name="pregunta${index}" value="NO">
NO
</label>


<label>
<input type="radio" name="pregunta${index}" value="SE">
SE
</label>


</div>

`;

});