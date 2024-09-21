document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
        // Parte 1: ¡Hola Mundo!
        {
            question: "¿Cuál es la sintaxis correcta para imprimir \"¡Hola Mundo!\" en Java?",
            a: "echo \"¡Hola Mundo!\"",
            b: "System.out.println(\"¡Hola Mundo!\");",
            c: "Console.log(\"¡Hola Mundo!\");",
            d: "print(\"¡Hola Mundo!\")",
            correct: "b",
        },
        {
            question: "¿Qué función en Java se usa para imprimir texto sin salto de línea?",
            a: "System.out.println()",
            b: "System.out.print()",
            c: "System.out.printf()",
            d: "System.print()",
            correct: "b",
        },
        {
            question: "¿Cuál es el resultado de System.out.println(\"Java\\tProgramación\");?",
            a: "Java Programación",
            b: "Java    Programación",
            c: "Java Programación",
            d: "JavaProgramación",
            correct: "b",
        },
        // Parte 2: Variables
        {
            question: "¿Qué tipo de variable se usa para almacenar números decimales?",
            a: "int",
            b: "char",
            c: "double",
            d: "String",
            correct: "c",
        },
        {
            question: "¿Cuál de las siguientes líneas declara correctamente una variable entera en Java?",
            a: "int numero = 10.5;",
            b: "int numero = \"10\";",
            c: "int numero = 10;",
            d: "double numero = 10;",
            correct: "c",
        },
        {
            question: "¿Qué tipo de variable es adecuado para almacenar una sola letra?",
            a: "char",
            b: "String",
            c: "int",
            d: "boolean",
            correct: "a",
        },
        // Parte 3: Operadores Aritméticos
        {
            question: "¿Cuál es el operador para la multiplicación en Java?",
            a: "x",
            b: "*",
            c: "/",
            d: "+",
            correct: "b",
        },
        {
            question: "¿Qué valor se asigna a resultado en la expresión int resultado = 10 % 3;?",
            a: "1",
            b: "3",
            c: "10",
            d: "0",
            correct: "a",
        },
        {
            question: "¿Qué hace el operador ++ en Java?",
            a: "Suma 2 a la variable.",
            b: "Incrementa la variable en 1.",
            c: "Resta 1 a la variable.",
            d: "Duplica el valor de la variable.",
            correct: "b",
        },
        // Parte 4: Sentencias Condicionales
        {
            question: "¿Cuál es la sintaxis correcta para una estructura condicional if en Java?",
            a: "if (condicion) {}",
            b: "if condicion {}",
            c: "if {condicion}",
            d: "if: condicion {}",
            correct: "a",
        },
        {
            question: "¿Qué operador se utiliza para comprobar si dos variables son iguales en una condición?",
            a: "=",
            b: "==",
            c: "!=",
            d: "equals()",
            correct: "b",
        },
        {
            question: "¿Cuál es la salida del siguiente código?\nint x = 10;\nif (x > 5) {\n System.out.println(\"Mayor que 5\");\n} else {\n System.out.println(\"Menor o igual a 5\");\n}",
            a: "Menor o igual a 5",
            b: "Mayor que 5",
            c: "Error",
            d: "No se imprime nada",
            correct: "b",
        },
        // Parte 5: Bucles
        {
            question: "¿Qué tipo de bucle repite su ejecución al menos una vez?",
            a: "for",
            b: "do-while",
            c: "while",
            d: "for-each",
            correct: "b",
        },
        {
            question: "¿Cuál es la estructura correcta de un bucle for en Java?",
            a: "for (inicio, condición, incremento) {}",
            b: "for (inicio; condición; incremento) {}",
            c: "for (inicio; incremento; condición) {}",
            d: "for inicio; condición; incremento {}",
            correct: "b",
        },
        {
            question: "¿Cuántas veces se ejecuta este bucle?\nfor (int i = 0; i < 5; i++) {\n System.out.println(i);\n}",
            a: "4 veces",
            b: "5 veces",
            c: "6 veces",
            d: "3 veces",
            correct: "b",
        },
        // Parte 6: Arrays
        {
            question: "¿Cómo se declara correctamente un array de enteros en Java?",
            a: "int[] arr = new int[5];",
            b: "int arr = new int[];",
            c: "int arr[] = new int(5);",
            d: "int arr[5] = new int;",
            correct: "a",
        },
        {
            question: "¿Cuál es el índice del primer elemento en un array en Java?",
            a: "0",
            b: "1",
            c: "-1",
            d: "Depende del array",
            correct: "a",
        },
        {
            question: "¿Cómo se accede al tercer elemento de un array llamado numeros?",
            a: "numeros[2]",
            b: "numeros[3]",
            c: "numeros(2)",
            d: "numeros[1]",
            correct: "a",
        },
        // Parte 7: Funciones
        {
            question: "¿Cuál es la sintaxis correcta para declarar una función que no devuelve nada?",
            a: "void nombreFuncion() {}",
            b: "int nombreFuncion() {}",
            c: "void nombreFuncion {}",
            d: "nombreFuncion() {}",
            correct: "a",
        },
        {
            question: "¿Qué palabra clave se usa para retornar un valor desde una función?",
            a: "exit",
            b: "stop",
            c: "return",
            d: "break",
            correct: "c",
        },
        {
            question: "¿Cuál es el valor de retorno del siguiente método?\npublic int sumar(int a, int b) {\n return a + b;\n}",
            a: "No retorna nada",
            b: "a",
            c: "b",
            d: "a + b",
            correct: "d",
        },
        // Parte 8: Programación Orientada a Objetos
        {
            question: "¿Cómo se crea una nueva instancia de una clase en Java?",
            a: "Class objeto = new Class();",
            b: "Class objeto = new Class;",
            c: "Class objeto();",
            d: "Class objeto = Class();",
            correct: "a",
        },
        {
            question: "¿Qué palabra clave se usa para declarar un atributo que pertenece a la clase en lugar de a una instancia?",
            a: "static",
            b: "private",
            c: "public",
            d: "class",
            correct: "a",
        },
        {
            question: "¿Qué método se utiliza para acceder a un atributo privado de una clase?",
            a: "getter",
            b: "setter",
            c: "static",
            d: "public",
            correct: "a",
        },
    ];

    const quizForm = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    const nameInput = document.getElementById("name");

    function loadQuiz() {
        const quizQuestions = quizData
            .map((q, index) => {
                return `
                    <div class="question" id="question-${index}">
                        ${q.question}
                    </div>
                    <ul class="options">
                        <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                        <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                        <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                        <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
                    </ul>
                `;
            })
            .join("");
        quizForm.innerHTML = quizQuestions;
    }

    function submitQuiz() {
        const name = nameInput.value;

        if (!name) {
            alert('Por favor, introduce tu nombre.');
            return;
        }

        const answers = quizData.map((_, index) => {
            return document.querySelector(`input[name="question${index}"]:checked`)?.value || "No respondida";
        });

        let score = 0;
        let resultsHTML = "";
        let emailBody = `Nombre: ${name}\n\nResultados del test:\n\n`;

        answers.forEach((answer, index) => {
            if (answer === quizData[index].correct) {
                score++;
                resultsHTML += `<p><b>Pregunta ${index + 1}: correcta.</b></p>`;
                emailBody += `Pregunta ${index + 1}: Correcta.\n`;
            } else {
                resultsHTML += `<p><b>Pregunta ${index + 1}: incorrecta. La respuesta correcta era '${quizData[index].correct}'.</b></p>`;
                emailBody += `Pregunta ${index + 1}: Incorrecta. Respuesta correcta: ${quizData[index].correct}\n`;
            }
        });

        const finalScore = (score / quizData.length) * 10;
        resultsHTML = `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

        resultDiv.innerHTML = resultsHTML;

        // Enviar correo usando Formspree
        const formData = new FormData();
        formData.append('name', name);
        formData.append('message', emailBody);

        fetch('https://formspree.io/f/xldrkjyd', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Respuestas enviadas correctamente por correo.');
            } else {
                alert('Hubo un problema al enviar el correo. Intenta de nuevo.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el correo.');
        });
    }

    window.submitQuiz = submitQuiz;
    loadQuiz();
});