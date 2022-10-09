# DDrop

Una app para hacer un drop en el UI de archivos de formato JPG,JS,JSON o PDF. Puedes loguearte a través de Google y subir o descargar archivos de Drive.

## Visuals

Mira el proyecto [aquí](https://talent-digital.vercel.app/)

## Usage

Para utilizar esta app sigue los siguientes pasos

1. Clona el proyecto
2. En la consola en el root del proyecto ejecuta el comando`npm i`

**Nota: Necesitas un token generado por Google para utilizar la funcionalidad de Drive. Sigue los pasos a continuación para obtenerla**

3. Dirígete a [Google developer Playground](https://developers.google.com/oauthplayground/)
4. Busca la API llamada **Drive API v3** , selecciona el primer link y clickea en el botón **Authorize APIs**
5. Elige la cuenta de Google que gestionará este api y luego clickea en el botón **Exchange authorization code for tokens**
6. En la sección de Request/Response, busca el objeto con clave "access_token" y copia el valor de esta clave.
7. En el componente **DriveButton** ve al método "handleOpenPicker" y debajo del comentario reemplaza el original por el que acabas de obtener de Google Playground

## Tecnologías implementadas

- [React](https://es.reactjs.org/).
- [React-Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
- [FireBase](https://firebase.google.com/)
- [Google Drive API](https://developers.google.com/drive/api)
- [React Google Drive Picker](https://www.npmjs.com/package/react-google-picker)
- [React Dropzone](https://www.npmjs.com/package/react-dropzone)
- [Context API](https://es.reactjs.org/docs/context.html)

### Arquitectura

Dado a la poca complejidad de la app, se han dividido las carpetas en las siguientes subcarpetas:
`📦src ┣ 📂assets ┃ ┣ 📜pexels-cottonbro-5083396.jpg ┃ ┣ 📜pexels-karolina-grabowska-4977484.jpg ┃ ┗ 📜pexels-mizuno-k-12899121.jpg ┣ 📂components ┃ ┣ 📂driveButton ┃ ┃ ┗ 📜DriveButton.js ┃ ┣ 📂dropper ┃ ┃ ┗ 📜Dropper.js ┃ ┣ 📂header ┃ ┃ ┗ 📜Header.js ┃ ┣ 📂login ┃ ┃ ┗ 📜Login.js ┃ ┣ 📂modal-dropper ┃ ┃ ┗ 📜Modal.js ┃ ┣ 📂protectedRoute ┃ ┃ ┗ 📜ProtectedRoute.js ┃ ┗ 📂register ┃ ┃ ┗ 📜Register.js ┣ 📂context ┃ ┣ 📜AuthContext.js ┃ ┣ 📜FilesContext.js ┃ ┗ 📜filesReducer.js ┣ 📂firebase ┃ ┗ 📜firebase.config.js ┣ 📂pages ┃ ┗ 📂home ┃ ┃ ┗ 📜Home.js ┣ 📂routes ┃ ┗ 📜routes.js ┣ 📜App.js ┣ 📜config.js ┣ 📜fileTypes.js ┣ 📜global.css ┣ 📜index.css ┣ 📜index.js ┣ 📜reportWebVitals.js ┗ 📜setupTests.js`

### Author

[adaldin](https://github.com/adaldin)
