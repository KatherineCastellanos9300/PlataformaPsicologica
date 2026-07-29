const indicadores = [
    "Invierte letras, sílabas y/o palabras.",
    "Confunde el orden de las letras dentro de las palabras.",
    "Confunde especialmente letras con similitud (d/b, u/n).",
    "Omite letras en una palabra.",
    "Sustituye una palabra por otra que empieza por la misma letra.",
    "Tiene dificultades para conectar letras y sonidos.",
    "Le cuesta pronunciar palabras, invierte o sustituye sílabas.",
    "Al leer rectifica, vacila, silabea y/o pierde la línea.",
    "No domina todas las correspondencias entre letras y sonidos.",
    "Confunde derecha e izquierda.",
    "Escribe en espejo.",
    "Dificultad para aprender secuencias (días, meses, estaciones).",
    "Le cuesta planificar su tiempo y tarda más de lo esperado.",
    "Su coordinación motriz es pobre.",
    "Evita leer."
];


const contenedor = document.getElementById("preguntas");


if (contenedor) {

    for (let i = 0; i < indicadores.length; i++) {

        contenedor.innerHTML +=
            "<div class='pregunta'>" +

            "<p><strong>" + (i + 1) + ".</strong> " +
            indicadores[i] +
            "</p>" +

            "<label>" +
            "<input type='radio' name='pregunta" + i + "' value='SI'> SÍ" +
            "</label>" +

            "<label>" +
            "<input type='radio' name='pregunta" + i + "' value='NO'> NO" +
            "</label>" +

            "<label>" +
            "<input type='radio' name='pregunta" + i + "' value='SE'> SE" +
            "</label>" +

            "</div>";
    }

}