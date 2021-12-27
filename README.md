
# react-test-front

Instalacion de paquetes: 

```bash
npm install
```

Una vez instalados los paquetes, ejecutar la siguiente instrucción
```bash
npm run dev
```

La instrucción previamente mencionada, ya está configurada para ser ejecutada con webpack.

## ¿En que consiste la aplicación?

Una vez introducido un valor o cadena en la caja de texto, puedes darle enter al mismo o clickear el botón Search para buscar resultado en el API, el cual, en el caso que haya un texto a evaluar, el API retornará un resultado en formato JSON de la siguiente manera: 
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
A nivel visual, el resultado se presentará al usuario de forma mas amigable.

## Frameworks y paquetes utilizados.
- NodeJS 12
- Webpack
- Bootstrap
- React
- Redux
