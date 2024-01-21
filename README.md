# MidPlace

MidPlace es una aplicación móvil construida con React Native, centrada en proporcionar una experiencia de usuario fluida y funcionalidades ricas para explorar y interactuar con lugares y eventos. El proyecto sigue los principios de DDD (Domain-Driven Design) y SOLID para garantizar un código mantenible y escalable.

## Características

1. Navegación intuitiva con React Navigation v7.
2. Autenticación de usuario robusta.
3. Onboarding interactivo para nuevos usuarios.
4. Diseño adaptable y tematización con Gluestack UI.
5. Estado global manejado con Redux Toolkit.
6. Almacenamiento seguro y local con AsyncStorage.

## Empezando

1. Pre-requisitos
2. Node.js v14 o superior.
3. Expo CLI.
4. Emulador Android/iOS o dispositivo físico.

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/wilodev/midplace-demo.git

cd midplace-demo
```

2. Instala las dependencias:

```bash
bun install
```

3. Inicia el servidor de desarrollo:

```bash
bun run ios
o
bun run android
```
4. Abre el proyecto en un emulador o dispositivo físico.

### Estructura del Proyecto

Descripción breve de la estructura de directorios clave:

```bash
/src
  /assets          # Recursos estáticos (imágenes, fuentes, etc.)
  /components      # Componentes de UI reutilizables
  /features        # Módulos de la aplicación divididos por funcionalidad
  /navigation      # Configuración de la navegación
  /services        # Servicios externos (APIs, almacenamiento, etc.)
  /state           # Gestión del estado global (Redux, Context API)
  /utils           # Funciones de utilidad y constantes
```

## Licencia

Este proyecto está licenciado bajo la Licencia MidPlace (bajo pago es un proyecto privado).

### Contacto

Wilson Pérez - @wilodev - [wilsonperez.developer@gmail.com](wilsonperez.developer@gmail.com) -  [wperez@cintanegra.net](wperez@cintanegra.net)
