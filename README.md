# Appointments

Este proyecto de momento es solo para poner en practica lo aprendido hasta el momento, se estan utilizando las siguientes librerías:

- @hookform/resolvers
- @nextui-org/react
- @tanstack/react-query
- @tanstack/react-table
- @types/node
- @types/react-dom
- framer-motion
- next
- react-hook-form
- tailwindcss
- typescript
- zod

Estas librerías las estamos usando con React y TypeScript

## Instalación

Siga estos pasos para configurar y ejecutar el proyecto en su entorno local:

1.  Clona el repositorio desde GitHub: \*Esto funciona en macOS y windows

        ```bash
        git clone https://github.com/tuusuario/tuproyecto.git
        cd tuproyecto

        ```

2.  Instala las dependencias del proyecto utilizando PNPM:

    - pnpm install

3.  Configura Visual Studio Code (VS Code) para aplicar las reglas de ESLint y Prettier automáticamente al guardar los archivos. Abre tu proyecto en VS Code y sigue estos pasos:

    - Crea un archivo llamado .vscode/settings.json si aún no existe.
    - Agrega las siguientes configuraciones al archivo settings.json:

      ```json
      {
        "editor.codeActionsOnSave": {
          "source.organizeImports": true,
          "source.fixAll.eslint": true,
        },
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "[typescript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
            "source.organizeImports": true
          }
        }
      }
      ```
    Estas configuraciones permitirán que VS Code formatee automáticamente tu código y organice las importaciones al guardar los archivos.

4.  Ahora estás listo para ejecutar tu proyecto localmente. Utiliza el siguiente comando para iniciar tu aplicación Next.js:
    ```bash
        pnpm run dev
    ```

Tu aplicación debería estar disponible en http://localhost:3000.

⚠️⚠️
Antes de empezar a codear debes crear una nueva rama a partir de la rama dev, esto con el fin de crear un espacio seguro de desarrollo y no afectes a los demás
⚠️⚠️

¡Listo! Tu proyecto debería estar configurado y listo para funcionar en tu entorno local con todas las configuraciones necesarias para ESLint, Prettier y Visual Studio Code.

Si encuentras algún problema durante la instalación o ejecución del proyecto, asegúrate de verificar las dependencias y las configuraciones mencionadas anteriormente, además asegurate de que las extensiones esten actualizadas en especial la de prettier.

Happy Coding!!
