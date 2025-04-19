# create-pug-app-base 📦

**create-pug-app-base** es un generador de proyectos que crea una estructura base para una aplicación Node.js usando **Express** y **Pug**. Este paquete te permite iniciar un nuevo proyecto de forma rápida y personalizada, generando una estructura completa con rutas, vistas y recursos estáticos.

## Características

- **Generador CLI**: Crea la estructura base de un proyecto Express con Pug.
- **Configuración dinámica**: Al ejecutar el comando, se te solicitará información (nombre del proyecto, descripción, versión y autor) para personalizar el `package.json` del nuevo proyecto.
- **Estructura modular**: El proyecto generado incluye:
  - `app.js`: Punto de entrada del servidor.
  - `/routes`: Para definir las rutas de la aplicación.
  - `/controllers`: Logia de la rutas
  - `/views`: Plantillas Pug para renderizar las páginas.
  - `/public`: Carpeta para archivos estáticos (CSS, JavaScript, imágenes).

## Instalación 🚀

Para usar **create-pug-app-base**, puedes ejecutarlo directamente con `npx` sin necesidad de instalarlo globalmente:

```bash
npx create-pug-app-base nombre-del-proyecto
```

Si deseas instalarlo globalmente (opcional):

```bash
npm install -g create-pug-app-base
(adicional:
npm uninstall -g create-pug-app-base -> desintalar y poder intalar una vercion nueva
npm list -g create-pug-app-base -> ver la vercion
)

```

Y luego podrás usar el comando:

```bash
create-pug-app-base nombre-del-proyecto
```

## Uso 📦

1. Generar un nuevo proyecto (comando):
   ```sh
   npx create-pug-app-base name-de-la-app
   Se te preguntará( no son obligatorios):
      Nombre del proyecto,Descripción,Versión,Autor
   ```
2. Instalación de dependencias 🛠?
   ```sh
   Una vez generado el proyecto, el generador instalará automáticamente las dependencias (como express y pug). Si en algún momento necesitas reinstalarlas, entra al directorio del proyecto y ejecuta: npm install
   ```
3. Ejecutar el proyecto 🛠 ?
   ```sh
   En el directorio del proyecto generado, inicia el servidor con:npm start o npm run dev (ejecutado con nodemon)
   Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.
   ```

## Nota:

En caso de que se clonen el github solo tiene que ir mira la parte del USO, y en el mismo directorio se te crea la carpeta con el nombre del proyecto, depues la podes mover de lugar, el chiste es usar npx o instalarlo de manera global .
Subi el proyecto por si alguno quiere modificarlo y subir su propio paquete, aunque la parte de subirlo a npm se los dejo de tarea.

## 👨‍ Autor

mpirizdutra
GitHub: https://github.com/mpirizdutra89/
Email: mpirizdutra@gmail.com
