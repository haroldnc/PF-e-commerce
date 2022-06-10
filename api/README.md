# Rutas Habilitadas
En la implementación del back tenemos las siguientes rutas habilitadas:

[Ruta roles](#ruta-roles)<br>
[Ruta user](#ruta-user)<br>
[Ruta auth](#ruta-auth)<br>
[Ruta workers](#ruta-workers)<br>
[Ruta categories](#ruta-categories)<br>
[Ruta services](#ruta-services)<br>
[Ruta posts](#ruta-posts)

## Ruta roles

#### `GET --> /roles`

Al hacer una petición `GET` a `/roles` se obtiene un array con los roles existentes y los respectivos campos asociados `_id` y `name`
```json
[
   {
      "_id":"628eefd607fe8bf42fb6a5f5",
      "name":"user"
   },
   {
      "_id":"628ef02007fe8bf42fb6a5f8",
      "name":"worker"
   },
   {
      "_id":"628ef02d07fe8bf42fb6a5fa",
      "name":"admin"
   },
   {
      "_id":"62926ea8ce08d4db1c3d9e03",
      "name":"unverified"
   }
]
```

## Ruta user

#### `GET --> /user`

Al hacer una petición `GET` a `/user` se obtiene objeto que continen un array con la información personal de los 10 primeros usuarios existentes con el siguiente formato:
```json
{
   "ok":true,
   "users": [
      {
         "username":"fran",
         "firstName":"fran",
         "lastName":"gimenez",
         "email":"correo@algo.com",
         "image":"https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634126519_319188_1634129698_noticia_normal.jpg",
         "user_role": {
            "_id":"628ef02007fe8bf42fb6a5f8",
            "name":"worker"
         },
         "dni":"987478382",
         "phone":"004836638",
         "punctuation":0,
         "confirm_email":false,
         "uid":"6292a98a9eea6ea8eb75c1d2"
      },
      {
         "username":"arg152",
         "firstName":"madime",
         "lastName":"Rodrigez",
         "email":"madime-1997@hotmail.com",
         "image":"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
         "user_role": {
            "_id":"628eefd607fe8bf42fb6a5f5",
            "name":"user"
         },
         "punctuation":0,
         "confirm_email":false,
         "uid":"6292af169773bdccbc01e6e6"
      }
   ],
   "total":2,
   "end":10,
   "countPages":1
}
```
Aquí `total` se refiere a la cantidad de datos retornados, `end` el máximo de datos que se podrían obtener que son `10` por defecto y `countPages` es el número de páginas (paginación de usuarios) que se tendrían en total en base a `10` por página.

#### `GET --> /user?page=2&limit=7`

Nos permite obtener un objeto con un array que tiene los primeros `limit` (en el ejemplo `7`) usuarios de la página `page` (en el ejemplo `15`). Esto funciona de la siguiente manera: Si la base de datos tiene `100` usuarios y hacemos la petición con `limit=7` lo que haría es dividir los `100` registros en grupos de `7` y cada uno sería una página, es decir, `page=1 --> {user1, user2, ..., user7}`, `page=2 --> {user8, user9, ..., user14}` y así hasta la página `page=14 --> {user92, user93, ..., user98}` y `page=15 --> {user99, user100}`, entonces al establecer el parámetro página (`page=15`) sólo retornaría los usuarios de esa página específica con la siguiente estructura:
```json
{
   "ok":true,
   "users": [
      {
         "username":"fran",
         "firstName":"fran",
         "lastName":"gimenez",
         "email":"correo@algo.com",
         "image":"https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634126519_319188_1634129698_noticia_normal.jpg",
         "user_role": {
            "_id":"628ef02007fe8bf42fb6a5f8",
            "name":"worker"
         },
         "dni":"987478382",
         "phone":"004836638",
         "punctuation":0,
         "confirm_email":false,
         "uid":"6292a98a9eea6ea8eb75c1d2"
      },
      {
         "username":"arg152",
         "firstName":"madime",
         "lastName":"Rodrigez",
         "email":"madime-1997@hotmail.com",
         "image":"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
         "user_role": {
            "_id":"628eefd607fe8bf42fb6a5f5",
            "name":"user"
         },
         "punctuation":0,
         "confirm_email":false,
         "uid":"6292af169773bdccbc01e6e6"
      }
   ],
   "total":2,
   "end":10,
   "countPages":15
}
```

#### `GET --> /user/:id`

Permite obtener un usuario específico por el `id`. Por ejemplo, `/user/6292af169773bdccbc01e6e6` con el siguiente esquema:
```json
{
   "username":"arg152",
   "lastName":"Rodrigez",
   "email":"madime-1997@hotmail.com",
   "image":"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
   "user_role":"628eefd607fe8bf42fb6a5f5",
   "punctuation":0,
   "confirm_email":false,
   "firstName":"madime",
   "uid":"6292af169773bdccbc01e6e6"
}
```

#### `POST --> /user`

Permite crear un nuevo usuario haciendo las validaciones. Los parámetros serán enviados por `body` con la siguiente estructura:
```json
{
   "username": "nombredeusuario",
   "firstName": "nombre",
   "lastName": "apellido",
   "email": "algo@correo.com",
   "password": "contraseña",
   "image": "url foto",
   "user_role": "id del rol",
   "dni": "numero de dni",
   "phone": "telefono",
   "web": "http://www.miweb.com"
}
```
Si el usuario se creó con éxito deben recibir el siguiente resultado:
```json
{
   "ok": true,
   "msg": "User created"
}
```

#### `PUT --> /user/:id`

Permite actualizar la información personal de un usuario pasada por el `id`. Los parámetros son opcionales (enviar sólo los que serán modificados) y serán enviados por `body` con la siguiente estructura:
```json
{
   "username": "nuevo sobrenombre",
   "firstName": "nombre",
   "lastName": "apellido",
   "image": "url foto",
   "user_role": "id del rol",
   "dni": "numero de dni",
   "phone": "telefono",
   "web": "http://www.miweb.com"
}
```

#### `DELETE --> /user/:id`

Permite eliminar un usuario especificado por `id`.

Si el servicio se eliminó con éxito deben recibir los datos del usuario borrado como `json`

## Ruta auth

#### `POST --> /auth`

Permite autenticar o validar el usuario que quiere loguearse. Por el momento lo hace con el `googleID`. Los parámetros serán enviados por `body` con la siguiente estructura:
```json
{
   "tokenId": "ID de google",
   "givenName": "Nombre (opcional, sirve para el primer loggin con google)",
   "familyName": "Apellidos (opcional, sirve para el primer loggin con google y generar su cuenta)"
}
```
Si el usuario se autenticó con éxito deben recibir el siguiente resultado:
```json
{
   "ok": true,
   "usuario": "los datos del usuario"
}
```

## Ruta workers

#### `GET --> /workers`

Permite obtener un array de trabajadores con la siguiente estructura:
```json
[
   {
      "languages":[],
      "skills":[],
      "_id":"62927183a8415ffb1bf2a4c1",
      "title":"Full Stack Developer",
      "aboutMe":"Soy un joven estusiasta y autodidacta, con ganas de superarse...",
      "textInfo":"Mi información....",
      "pricePerHour":10,
      "p_image":"https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png",
      "userId": {
         "punctuation":0,
         "firstName":"Harold",
         "lastName":"Navarro",
         "email":"harold.mth95@gmail.com",
         "image":"https://i.pinimg.com/564x/84/aa/0d/84aa0dadd6cbd869bf40397a1a59e4cb.jpg",
         "user_role":"628ef02007fe8bf42fb6a5f8",
         "uid":"62926fb4a8415ffb1bf2a4bc"
      },
      "dni":"987478382",
      "phone":"004836638",
      "score": 0,
      "linkedin": "",
      "web": "",
      "subscribed": false,
      "subscription_type": {
         "_id": "3763sdvyuqw8387hsdghj",
         "name": "Standard"
      },
      "workExperience":[],
      "certifications":[]
   },
   {
      "languages":[],
      "skills":[],
      "_id":"6292a98a9eea6ea8eb75c1d4",
      "title":"Full Stack Developer",
      "aboutMe":"Algo sobre mi",
      "textInfo":"mas informacion",
      "pricePerHour":100,
      "p_image":"https://cdn-media-1.freecodecamp.org/images/1*Aq7TXpuzXp8lTX0Dhxw_DQ.png",
      "userId":{
         "lastName":"gimenez",
         "email":"correo@algo.com",
         "image":"https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634126519_319188_1634129698_noticia_normal.jpg",
         "user_role":"628ef02007fe8bf42fb6a5f8",
         "punctuation":0,
         "firstName":"fran",
         "uid":"6292a98a9eea6ea8eb75c1d2"
      },
      "dni":"987478382",
      "phone":"004836638",
      "score": 0,
      "linkedin": "",
      "web": "",
      "subscribed": false,
      "subscription_type": {
         "_id": "3763sdvyuqw8387hsdghj",
         "name": "Standard"
      },
      "workExperience":[],
      "certifications":[]
   }
]
```

#### `GET --> /workers?title=web`

Permite obtener un array de trabajadores con `title` como parte de su título profesional con la siguiente estructura:
```json
[
   {
      "languages":[],
      "skills":[],
      "_id":"6292a98a9eea6ea8eb75c1d4",
      "title":"Full Stack Web Developer",
      "aboutMe":"Algo sobre mi",
      "textInfo":"mas informacion",
      "pricePerHour":100,
      "p_image":"https://cdn-media-1.freecodecamp.org/images/1*Aq7TXpuzXp8lTX0Dhxw_DQ.png",
      "userId":{
         "lastName":"gimenez",
         "email":"correo@algo.com",
         "image":"https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634126519_319188_1634129698_noticia_normal.jpg",
         "user_role":"628ef02007fe8bf42fb6a5f8",
         "punctuation":0,
         "firstName":"fran",
         "uid":"6292a98a9eea6ea8eb75c1d2"
      },
      "dni":"987478382",
      "phone":"004836638",
      "score": 0,
      "linkedin": "",
      "web": "",
      "subscribed": false,
      "subscription_type": {
         "_id": "3763sdvyuqw8387hsdghj",
         "name": "Standard"
      },
      "workExperience":[],
      "certifications":[]
   }
]
```

#### `GET --> /workers/:id`

Permite obtener un trabajador por `id` con la siguiente estructura:
```json
{
   "languages":[],
   "skills":[],
   "_id":"6292a98a9eea6ea8eb75c1d4",
   "title":"Full Stack Developer",
   "aboutMe":"Algo sobre mi",
   "textInfo":"mas informacion",
   "pricePerHour":100,
   "p_image":"https://cdn-media-1.freecodecamp.org/images/1*Aq7TXpuzXp8lTX0Dhxw_DQ.png",
   "userId":{
      "lastName":"gimenez",
      "email":"correo@algo.com",
      "image":"https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634126519_319188_1634129698_noticia_normal.jpg",
      "user_role":"628ef02007fe8bf42fb6a5f8",
      "punctuation":0,
      "firstName":"fran",
      "uid":"6292a98a9eea6ea8eb75c1d2"
   },
   "dni":"987478382",
   "phone":"004836638",
   "score": 0,
   "linkedin": "",
   "web": "",
   "subscribed": false,
   "subscription_type": {
      "_id": "3763sdvyuqw8387hsdghj",
      "name": "Standard"
   },
   "workExperience":[],
   "certifications":[]
}
```

#### `GET --> /workers/subscriptions/:name`

Permite obtener un array de trabajadores suscritos al plan `name`:
```json
[
   {
      "languages":[],
      "skills":[],
      "_id":"6292a98a9eea6ea8eb75c1d4",
      "title":"Full Stack Web Developer",
      "aboutMe":"Algo sobre mi",
      "textInfo":"mas informacion",
      "pricePerHour":100,
      "p_image":"https://cdn-media-1.freecodecamp.org/images/1*Aq7TXpuzXp8lTX0Dhxw_DQ.png",
      "userId":{
         "lastName":"gimenez",
         "email":"correo@algo.com",
         "image":"https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634126519_319188_1634129698_noticia_normal.jpg",
         "user_role":"628ef02007fe8bf42fb6a5f8",
         "punctuation":0,
         "firstName":"fran",
         "uid":"6292a98a9eea6ea8eb75c1d2"
      },
      "dni":"987478382",
      "phone":"004836638",
      "score": 0,
      "linkedin": "",
      "web": "",
      "subscribed": false,
      "subscription_type": {
         "_id": "3763sdvyuqw8387hsdghj",
         "name": "Standard"
      },
      "workExperience":[],
      "certifications":[]
   },
   {
      "languages":[],
      "skills":[],
      "_id":"6292a98a9eea6ea8eb75c1d4",
      "title":"Full Stack Web Developer",
      "aboutMe":"Algo sobre mi",
      "textInfo":"mas informacion",
      "pricePerHour":100,
      "p_image":"https://cdn-media-1.freecodecamp.org/images/1*Aq7TXpuzXp8lTX0Dhxw_DQ.png",
      "userId":{
         "lastName":"gimenez",
         "email":"correo@algo.com",
         "image":"https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634126519_319188_1634129698_noticia_normal.jpg",
         "user_role":"628ef02007fe8bf42fb6a5f8",
         "punctuation":0,
         "firstName":"fran",
         "uid":"6292a98a9eea6ea8eb75c1d2"
      },
      "dni":"987478382",
      "phone":"004836638",
      "score": 0,
      "linkedin": "",
      "web": "",
      "subscribed": false,
      "subscription_type": {
         "_id": "3763sdvyuqw8387hsdghj",
         "name": "Standard"
      },
      "workExperience":[],
      "certifications":[]
   }
]
```

#### `PUT --> /workers/:id`

Permite modificar los datos laborales de un trabajador por `id`. Lo datos deben pasarse por `body` (todos son opcionales):
```json
{
   "languages":[],
   "skills":[],
   "_id":"6292a98a9eea6ea8eb75c1d4",
   "title":"Full Stack Developer",
   "aboutMe":"Algo sobre mi",
   "textInfo":"mas informacion",
   "pricePerHour":100,
   "p_image":"https://cdn-media-1.freecodecamp.org/images/1*Aq7TXpuzXp8lTX0Dhxw_DQ.png",
   "workExperience":[],
   "certifications":[],
   "dni":"987478382",
   "phone":"004836638",
   "score": 0,
   "linkedin": "",
   "web": "",
   "subscribed": false,
   "subscription_type": "3763sdvyuqw8387hsdghj",
}
```


## Ruta categories

#### `GET --> /categories`

Al hacer una petición `GET` a `/categories` se obtiene un array con las categorias existentes con el siguiente esquema:
```json
[
   {
      "_id":"62927771a8415ffb1bf2a4c3",
      "name":"Artes gráficas y diseño",
      "img":"https://i.postimg.cc/hGw8nzZn/artes.png",
      "phrase":"",
      "services": [
         {
            "_id":"62929cfa3758d5ae01a198ce",
            "name":"Logo e identidad de marca",
            "img":""
         },
         {
            "_id":"62929cfa3758d5ae01a198cf",
            "name":"Diseño de aplicaciones y sitios web",
            "img":""
         },
         {
            "_id":"62929cfa3758d5ae01a198d0",
            "name":"Arte e ilustraciones",
            "img":""
         }
      ]
   },
   {
      "_id":"629277aaa8415ffb1bf2a4c4",
      "name":"Marketing digital",
      "img":"https://i.postimg.cc/4d75HbHn/marketing.png",
      "phrase":"",
      "services": [
         {
            "_id":"62929d733758d5ae01a198dc",
            "name":"Posicionamiento en buscadores",
            "img":""
         },
         {
            "_id":"62929d733758d5ae01a198dd",
            "name":"Redes sociales",
            "img":""
         }
      ]
   }
]
```

#### `GET --> /categories?name=artes`

Permite obtener un array con las categorias existentes que tengan `name` en su nombre con el siguiente esquema:
```json
[
   {
      "_id":"62927771a8415ffb1bf2a4c3",
      "name":"Artes gráficas y diseño",
      "img":"https://i.postimg.cc/hGw8nzZn/artes.png",
      "phrase":"",
      "services": [
         {
            "_id":"62929cfa3758d5ae01a198ce",
            "name":"Logo e identidad de marca",
            "img":""
         },
         {
            "_id":"62929cfa3758d5ae01a198cf",
            "name":"Diseño de aplicaciones y sitios web",
            "img":""
         },
         {
            "_id":"62929cfa3758d5ae01a198d0",
            "name":"Arte e ilustraciones",
            "img":""
         }
      ]
   }
]
```

#### `GET --> /categories/:id`

Permite obtener una categoría específica por el `id`. Por ejemplo, `/categories/629277aaa8415ffb1bf2a4c4` con el siguiente esquema:
```json
{
   "_id":"629277aaa8415ffb1bf2a4c4",
   "name":"Marketing digital",
   "img":"https://i.postimg.cc/4d75HbHn/marketing.png",
   "phrase":"",
   "services": [
      {
         "_id":"62929d733758d5ae01a198dc",
         "name":"Posicionamiento en buscadores",
         "img":""
      },
      {
         "_id":"62929d733758d5ae01a198dd",
         "name":"Redes sociales",
         "img":""
      }
   ]
}
```

#### `POST --> /categories`

Permite crear una nueva categoría. Los parámetros serán enviados por `body` con la siguiente estructura:
```json
{
   "name": "Nombre de la categoría",
   "img": "url de la imagen asociada a la categoría",
   "phrase": "Alguna frase asociada a la categoría"
}
```
Si la categoría se creó con éxito deben recibir el siguiente resultado:
```json
{
   "msg": "Category created successfully"
}
```

#### `PUT --> /categories/:id`

Permite actualizar la información de una categoría pasada por el `id`. Los parámetros son opcionales (enviar sólo los que serán modificados) y serán enviados por `body` con la siguiente estructura:
```json
{
   "name": "nuevo nombre",
   "img": "nueva url",
   "phrase": "nueva frase"
}
```
Si la categoría se actualizó con éxito deben recibir el siguiente resultado:
```json
{
   "msg": "Category updated successfully"
}
```

#### `DELETE --> /categories/:id`

Permite eliminar una categoría especificada por `id`, también se eliminarán todos sus servicios asociados.

Si la categoría se eliminó con éxito deben recibir el siguiente resultado:
```json
{
   "msg": "Category deleted successfully"
}
```

## Ruta services

#### `GET --> /services`

Al hacer una petición `GET` a `/services` se obtiene un array con los servicios existentes con el siguiente formato:
```json
[
   {
      "_id":"62929cfa3758d5ae01a198ce",
      "name":"Logo e identidad de marca",
      "img":"",
      "category": {
         "name":"Artes gráficas y diseño"
      }
   },
   {
      "_id":"62929d733758d5ae01a198de",
      "name":"Publicidad online",
      "img":"",
      "category": {
         "name":"Marketing digital"
      }
   }
]
```

#### `GET --> /services?name=online`

Permite obtener un array con los servicios existentes que tengan `name` en su nombre con el siguiente esquema:
```json
[
   {
      "_id":"62929d733758d5ae01a198de",
      "name":"Publicidad online",
      "img":"",
      "category": {
         "name":"Marketing digital"
      }
   }
]
```

#### `GET --> /services/:id`

Permite obtener un servicio específico por el `id`. Por ejemplo, `/services/62929cfa3758d5ae01a198ce` con el siguiente esquema:
```json
{
   "_id":"62929cfa3758d5ae01a198ce",
   "name":"Logo e identidad de marca",
   "img":"",
   "category": {
      "name":"Artes gráficas y diseño"
   }
}
```

#### `POST --> /services`

Permite crear un nuevo servicio asociado a una categoría. Los parámetros serán enviados por `body` con la siguiente estructura:
```json
{
   "name": "Nombre del servicio",
   "img": "url de la imagen asociada al servicio (opcional)",
   "category": "ID de la categoria (62929d733758d5ae01a198dc)"
}
```
Si el servicio se creó con éxito deben recibir el siguiente resultado:
```json
{
   "msg": "Service created successfully"
}
```

#### `PUT --> /services/:id`

Permite actualizar la información de un servicio pasada por el `id`. Los parámetros son opcionales (enviar sólo los que serán modificados) y serán enviados por `body` con la siguiente estructura:
```json
{
   "name": "nuevo nombre",
   "img": "nueva url",
   "category": "id de la categoria a la que se cambiará"
}
```
Si el servicio se actualizó con éxito deben recibir el siguiente resultado:
```json
{
   "msg": "Service updated successfully"
}
```

#### `DELETE --> /services/:id`

Permite eliminar un servicio especificado por `id`.

Si el servicio se eliminó con éxito deben recibir el siguiente resultado:
```json
{
   "msg": "Service deleted successfully"
}
```

## Ruta posts

#### `GET --> /posts`

Al hacer una petición `GET` a `/posts` se obtiene un array con las publicaciones existentes con el siguiente formato:
```json
[
   {
      "id":"62963d3011cb25260d8fc628",
      "title":"Fotografo",
      "description":"Tomando fotografia",
      "price":100,
      "user":"62926fb4a8415ffb1bf2a4bc",
      "service":"62929cfa3758d5ae01a198cf",
      "score":0,
      "img":""
   },
   {
      "id":"629a61151c4eece6e397630e",
      "title":"Front end",
      "description":"hago paginas",
      "price":100,
      "user":"62926dd33625d29449bc17a4",
      "service":"62929cfa3758d5ae01a198cf",
      "score":0,
      "img":""
   },
   {
      "id":"629a84413f8d0083d6ec08d5",
      "title":"Logo e identidad de marca",
      "description":"Diseños profesionales en el mismo día de tu pedido y acordes a tu presupuesto. ",
      "price":100,
      "user":"62926fb4a8415ffb1bf2a4bc",
      "service":"62929cfa3758d5ae01a198cf",
      "score":0,
      "img":"https://s3.amazonaws.com/www-inside-design/uploads/2019/11/Designer-Confidential-1080x1080-Instagram-810x810.png"
   }
]
```

#### `GET --> /posts?title=og`

Retorna un array de las publicaciones que tienen `title` en su título con el siguiente formato:
```json
[
   {
      "id":"62963d3011cb25260d8fc628",
      "title":"Fotografo",
      "description":"Tomando fotografia",
      "price":100,
      "user":"62926fb4a8415ffb1bf2a4bc",
      "service":"62929cfa3758d5ae01a198cf",
      "score":0,
      "img":""
   },
   {
      "id":"629a84413f8d0083d6ec08d5",
      "title":"Logo e identidad de marca",
      "description":"Diseños profesionales en el mismo día de tu pedido y acordes a tu presupuesto. ",
      "price":100,
      "user":"62926fb4a8415ffb1bf2a4bc",
      "service":"62929cfa3758d5ae01a198cf",
      "score":0,
      "img":"https://s3.amazonaws.com/www-inside-design/uploads/2019/11/Designer-Confidential-1080x1080-Instagram-810x810.png"
   }
]
```

#### `GET --> /posts/:id`

Permite obtener una publicación específica por el `id`. Por ejemplo, `/posts/629a856a3f8d0083d6ec08dc` con el siguiente esquema:
```json
{
   "_id":"629a856a3f8d0083d6ec08dc",
   "title":"Diseño de aplicaciones y sitios web",
   "description":"Diseños profesionales en el mismo día de tu pedido y acordes a tu presupuesto. ",
   "price":200,
   "user":"62950e52471fa510d2a2f906",
   "service":"62929cfa3758d5ae01a198cf",
   "img":"https://s3.amazonaws.com/www-inside-design/uploads/2019/11/Designer-Confidential-1080x1080-Instagram-810x810.png",
   "score":0
}
```

#### `GET --> /posts/service/:id`

Permite obtener todas las publicaciones de un servicio especificado por su `id`. Por ejemplo, `/posts/service/62929cfa3758d5ae01a198cf` con el siguiente esquema:
```json
[
   {
      "_id":"62963d3011cb25260d8fc628",
      "title":"Fotografo",
      "description":"Tomando fotografia",
      "price":100,
      "user":{
         "_id":"62926fb4a8415ffb1bf2a4bc",
         "firstName":"Harold",
         "lastName":"Navarro"
      },
      "service":{
         "_id":"62929cfa3758d5ae01a198cf",
         "name":"Diseño de aplicaciones y sitios web"
      },
      "img":"",
      "score":0
   },
   {
      "_id":"629a61151c4eece6e397630e",
      "title":"Front end",
      "description":"hago paginas",
      "price":100,
      "user":{
         "_id":"62926dd33625d29449bc17a4",
         "firstName":"Alejandro",
         "lastName":"Cardenas"
      },
      "service":{
         "_id":"62929cfa3758d5ae01a198cf",
         "name":"Diseño de aplicaciones y sitios web"
      },
      "img":"",
      "score":0
   }
]
```

#### `POST --> /posts`

Permite crear una nueva publicación asociada a un usuario y servicio. Los parámetros serán enviados por `body` con la siguiente estructura:
```json
{
   "title": "titulo del post",
   "description": "alguna descripción",
   "img": "url de la imagen",
   "score": 0,
   "service": "Id del servicio asociado",
   "user": "Id del user asociado",
   "price": 1000
}
```

#### `PUT --> /posts/:id`

Permite actualizar una publicación pasada por el `id`. Los parámetros son opcionales (enviar sólo los que serán modificados) y serán enviados por `body` con la siguiente estructura:
```json
{
   "title": "titulo del post",
   "description": "alguna descripción",
   "img": "url de la imagen",
   "score": 0,
   "service": "Id del servicio asociado",
   "price": 1000
}
```

#### `DELETE --> /posts/:id`

Permite eliminar una publicación especificada por `id`.

Si la publicación se eliminó con éxito deben recibir el siguiente resultado:
```json
{
   "msg": "the post was deleted"
}
```

## Ruta subscriptions

#### `GET --> /subscriptions`

Al hacer una petición `GET` a `/subscriptions` se obtiene un array con los tipos de planes existentes con el siguiente formato:
```json
[
   {
      "_id":"62963d3011cb25260d8fc628",
      "name":"Standard",
      "priceId":"price_12324erewtrewr"
   },
   {
      "_id":"629a61151c4eece6e397630e",
      "name":"Premium",
      "priceId":"price_sadhhgjb1243dhgds"
   }
]
```

#### `GET --> /posts?title=og`

Retorna un array de las publicaciones que tienen `title` en su título con el siguiente formato:
```json
[
   {
      "id":"62963d3011cb25260d8fc628",
      "title":"Fotografo",
      "description":"Tomando fotografia",
      "price":100,
      "user":"62926fb4a8415ffb1bf2a4bc",
      "service":"62929cfa3758d5ae01a198cf",
      "score":0,
      "img":""
   },
   {
      "id":"629a84413f8d0083d6ec08d5",
      "title":"Logo e identidad de marca",
      "description":"Diseños profesionales en el mismo día de tu pedido y acordes a tu presupuesto. ",
      "price":100,
      "user":"62926fb4a8415ffb1bf2a4bc",
      "service":"62929cfa3758d5ae01a198cf",
      "score":0,
      "img":"https://s3.amazonaws.com/www-inside-design/uploads/2019/11/Designer-Confidential-1080x1080-Instagram-810x810.png"
   }
]
```

#### `GET --> /posts/:id`

Permite obtener una publicación específica por el `id`. Por ejemplo, `/posts/629a856a3f8d0083d6ec08dc` con el siguiente esquema:
```json
{
   "_id":"629a856a3f8d0083d6ec08dc",
   "title":"Diseño de aplicaciones y sitios web",
   "description":"Diseños profesionales en el mismo día de tu pedido y acordes a tu presupuesto. ",
   "price":200,
   "user":"62950e52471fa510d2a2f906",
   "service":"62929cfa3758d5ae01a198cf",
   "img":"https://s3.amazonaws.com/www-inside-design/uploads/2019/11/Designer-Confidential-1080x1080-Instagram-810x810.png",
   "score":0
}
```

#### `GET --> /posts/service/:id`

Permite obtener todas las publicaciones de un servicio especificado por su `id`. Por ejemplo, `/posts/service/62929cfa3758d5ae01a198cf` con el siguiente esquema:
```json
[
   {
      "_id":"62963d3011cb25260d8fc628",
      "title":"Fotografo",
      "description":"Tomando fotografia",
      "price":100,
      "user":{
         "_id":"62926fb4a8415ffb1bf2a4bc",
         "firstName":"Harold",
         "lastName":"Navarro"
      },
      "service":{
         "_id":"62929cfa3758d5ae01a198cf",
         "name":"Diseño de aplicaciones y sitios web"
      },
      "img":"",
      "score":0
   },
   {
      "_id":"629a61151c4eece6e397630e",
      "title":"Front end",
      "description":"hago paginas",
      "price":100,
      "user":{
         "_id":"62926dd33625d29449bc17a4",
         "firstName":"Alejandro",
         "lastName":"Cardenas"
      },
      "service":{
         "_id":"62929cfa3758d5ae01a198cf",
         "name":"Diseño de aplicaciones y sitios web"
      },
      "img":"",
      "score":0
   }
]
```

#### `POST --> /posts`

Permite crear una nueva publicación asociada a un usuario y servicio. Los parámetros serán enviados por `body` con la siguiente estructura:
```json
{
   "title": "titulo del post",
   "description": "alguna descripción",
   "img": "url de la imagen",
   "score": 0,
   "service": "Id del servicio asociado",
   "user": "Id del user asociado",
   "price": 1000
}
```

#### `PUT --> /posts/:id`

Permite actualizar una publicación pasada por el `id`. Los parámetros son opcionales (enviar sólo los que serán modificados) y serán enviados por `body` con la siguiente estructura:
```json
{
   "title": "titulo del post",
   "description": "alguna descripción",
   "img": "url de la imagen",
   "score": 0,
   "service": "Id del servicio asociado",
   "price": 1000
}
```

#### `DELETE --> /posts/:id`

Permite eliminar una publicación especificada por `id`.

Si la publicación se eliminó con éxito deben recibir el siguiente resultado:
```json
{
   "msg": "the post was deleted"
}
```