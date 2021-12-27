# react-test-front

Instalacion de paquetes:

```bash
npm install
```

Una vez instalados los paquetes, ejecutar la siguiente instrucción
```bash
npm run dev
```

Para realizar las pruebas, puede ejecutar
```bash
npm test
```

La instrucción previamente mencionada, ya está configurada para ser ejecutada con Mocha.

## ¿En que consiste la aplicación?

El API espera un valor que es enviado por el front-end, el cual, en el caso que sea un valor valido, el endpoint respondera con:
```bash
{
  "text": "radar",
  "palindrome": true
}
```

En el caso que no haya introducido un valor en la caja de texto, el API respondera con un JSON con el formato:
```bash
{
  "error": "No text",
  "palindrome": false
}
```

## Frameworks y paquetes utilizados.
- NodeJs 12
- ExpressJs
- Mocha
- Chai
- SuperTest
