# Ejecutar Proyecto
Para iniciar el proyecto, ejecuta el siguiente comando:

```sh
yarn start
```

## Configuración de Rutas en `package.json`
Dependiendo del uso del proyecto, es importante modificar la propiedad `main` en el archivo `package.json`:

- Para ejecutar el proyecto:
  ```json
  "main": "index.ts"
  ```
  Esta configuración permitirá que el proyecto se renderice correctamente.

- Para compilar o empaquetar los componentes:
  ```json
  "main": "dist/index.js"
  ```
  **Importante:** Esta ruta es exclusiva para el empaquetado de la librería. Si intentas ejecutar el proyecto con esta configuración, se generará un error.

## Comandos Útiles

### Empaquetar o Compilar Componentes
```sh
yarn build
```

### Publicar la Librería
```sh
npm publish
```

### Instalar la Librería en un Proyecto Externo
```sh
yarn add  native_craft_ui
```

### Actualizar la Versión de la Librería en un Proyecto Externo
```sh
yarn add  native_craft_ui@latest
```

## Cambio de Versión en Cada Empaquetado
Cada vez que se compile la librería, es necesario actualizar la versión en el archivo `package.json`.

- **Versión actual:**
  ```json
  "version": "1.0.2"
  ```
- **Versión modificada:**
  ```json
  "version": "1.0.3"
  ```
  
Luego de actualizar la versión, compila nuevamente con:
```sh
yarn build
```

