# Define con tus palabras los siguientes conceptos y para qué sirven en React: propiedades, estados, webhooks, JSX y cuál es el ciclo de vida de un componente.

## Propiedades

las propiedades son la forma en la que se pasan parámetros entre componentes en React.

## Estados

Un estado es un almacén de datos mutable que tiene un componente y que, por tanto, es autónomo entre componentes, es decir, un componente no puede acceder directamente al estado de otro componente.

## Webhooks

Un webhook es una retrollamada HTTP, una solicitud HTTP POST que interviene cuando ocurre algo.

## JSX

Es una extensión de Javascript que sirve como preprocesador para transformar el código a Jabascript.

## Ciclo de vida de un componente

El ciclo de vida de un componente en React es el montaje, actualización y desmontaje del componente. Cada uno de estos estados del ciclo de vida tiene varias metodos que se ejecutan durante cada estado.

- En el montaje, se genera el componente y se incluye en el DOM. componentWillMount y componentDidMount se ejecutan durante el montaje.
- La actualización se produce cuando el componente ya está generado y se está actualizando. ComponentWillUpdate y componentDidUpdate se ejecutan durante la actualización.
- El desmontaje se produce cuando el componente se elimina del DOM. componentWillUnmount se ejecutan durante el desmontaje.

# ¿Tienes experiencia creando un proyecto web desde cero (A) utilizando tu propio servidor (B) utilizando servicios en la nube como AWS o Firebase? En caso afirmativo describe brevemente el entorno que has utilizado (tipo de servidor, servicios instalados/utilizados, lenguajes, bases de datos, etc)

No he lanzado ningún proyecto de 0 a producción, aunque he creado un par de aplicaciones usando NodeJS.
Ambas aplicaciones están realizadas con Typescript y usan base de datos Postgress. Una de ellas está realizada con express y la otra con GraphQL y Apollo Server para el backend y Apollo Client para el frontend.
El frontend de ambas está preparado para lanzarle en Vercel ya que usamos NextJS como framework React.

# Te encargan construir una API siguiendo el estándar RESTful, utilizando JSON para el intercambio de datos que permita crear, modificar, eliminar y acceder a los datos de un usuario. Describe las rutas, los métodos (GET, POST, ...), los códigos de estado (2xx, 3xx, 4xx, etc) y el JSON que se enviaría y recibiría como respuesta en cada caso.

## GET /user/:id

Este endpoint solo recibe el id por la URL y devuelve un objeto con los datos del usuario:

```json
GET /user/1
{
  "id": 1,
  "nombre": "pepito",
  "apellido": "grillo",
  "usuario": "pepgrill",
  etc...
}
```

El código de estado sería un 200 en caso de que la petición sea satisfactoria y un 404 en caso de que no.

## PUT /user

Este endpoint recibe todos los datos necesarios para crear un usuario a través del body y devuelve un objecto JSON con el id y los datos:

```json
PUT /user
// Enviado
body: {
  "nombre": "pepito",
  "apellido": "grillo",
  "usuario": "pepgrill",
  etc...
}

// Recibido
{
  "id": 1,
  "nombre": "pepito",
  "apellido": "grillo",
  "usuario": "pepgrill",
  etc...
}
```

El código de estado sería un 201 en caso de que la petición sea satisfactoria y un 500 o 503 en caso de que no pueda crear el usuario dependiendo del error, y a poder ser mandaría el error que hay para no poder crearlo.

## PATCH /user/:id

Este endpoint recibe los datos que se quieren modificar a través del body y el id por parametro y envía un objeto JSON del usuario completo modificado:

```json
PATCH /user/1
// Enviado
body: {
  "usuario": "pepgrillo",
}

// Recibido
{
  "id": 1,
  "nombre": "pepito",
  "apellido": "grillo",
  "usuario": "pepgrillo",
  etc...
}
```

El código de estado sería un 200 en caso de que la petición sea satisfactoria y un 404 en caso de que el id solicitado no exista o un 500 o 503 en caso de que haya un error en el backend, y a poder ser mandaría el error que hay para no poder modificarlo.

## DELETE /user/:id

Este endpoint recibe el parametro id por la URL y devuelve el código de estado 200 en caso de que la petición sea satisfactoria y un 404 en caso de que el id solicitado no exista o un 500 o 503 en caso de que haya un error en el backend, y a poder ser mandaría el error que hay para no poder eliminarlo.

# Imagina que tienes que optimizar el tiempo de carga de una web que utiliza ReactJS que tiene cierto contenido estático y cierto contenido dinámico. ¿Qué estrategias de mejora del tiempo de carga y de rendimiento se te ocurren? ¿Dónde irías a mirar o que implementarías para intentar reducir estos tiempos?

Lo primero que revisaría es la posibilidad de utilizar generación de páginas estaticas en el backend para el contenido estático, usando quizá incremental static regeneration si este contenido puede variar con el tiempo pero seguir teniendo datos estaticos.

Para la parte dinamica, usaría server side rendering para servir la página web de una forma más rápida y hydration en el cliente para servir datos que cambien durante la ejecución de la app. Este proceso de server side rendering se podría generar de varias maneras según el tiempo de carga de los datos y de dónde estén almancenados esos datos.
Un ejemplo sería realizando un primer renderizado con los datos en el backend sirviendo ya la página lista y despues hacer rehydration en caso de que sea necesario.
Otro ejemplo sería tener una página generada de forma estatica con el diseño de la app pero sin datos y hacer hydration en el frontend sustituyendo los placeholders por los datos reales.

# Imagina que tienes que posicionar una página web en lo más alto de los diferentes motores de búsqueda. ¿Qué acciones llevarías a cabo para conseguirlo?

Una de las acciones que llevaría a cabo es intentar tener server side rendering para la mayoría de las páginas, ya que esto ayudaría a los buscadores a indexar las páginas más fácilmente ya que al revisarlas recibirian un HTML directmanete con todos los datos necesarios.

Tambien intentaria que la página tuviera una puntuación de lighthouse lo más alta posible, cumpliendo con los [core web vitals](https://web.dev/vitals/)
