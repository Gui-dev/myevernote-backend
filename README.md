<h1 align="center">
   MyEvernote API
</h1>

# MyEvernote
MyEvernote is an app to write down your ideas anytime

## Technologies used
  - [Node](https://nodejs.org/en)
  - [Express](https://expressjs.com/pt-br)
  - [Prisma](https://www.prisma.io)
  - [MongoDB Atlas](https://www.mongodb.com/pt-br)

## Requirements

You need to install both [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com) or npm to run this project.

## Public Routes
```bash
  # Create User
  # METHOD POST
  /users/register

  # required fields
  {
    "name": "Bruce Wayne",
    "email": "bruce@email.com",
    "password": "123456"
  }

  # return
  {
    "id": "6270ccd6d2760e1b1a9c491c",
    "name": "Bruce Wayne",
    "email": "bruce@email.com",
    "password": "$2b$10$SPINGnAC0E2NjwsN5Tc25OiQEKKi6rBeMq16N9Ek.PIjELhLwvkhu",
    "created_at": "2022-05-03T06:33:58.995Z",
    "updated_at": "2022-05-03T06:33:58.994Z"
  }
```

```bash
  # Login
  #METHOD POST
  /users/login

  # required fields
  {
    "email": "bruce@email.com",
    "password": "123456"
  }

  # return
  {
    "user": {
      "id": "6270ccd6d2760e1b1a9c491c",
      "name": "Bruce Wayne",
      "email": "bruce@email.com",
      "created_at": "2022-05-03T06:33:58.995Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzBjY2Q2ZDI3NjBlMWIxYTljNDkxYyIsImlhdCI6MTY1NTE4ODUwNSwiZXhwIjoxNjU1NzkzMzA1fQ.tXOMop-Vsv5XleY6wGi3OBp0zVKfphFnUSRk9z3gO7g"
  }
```

## Private Routes

```bash
  # Create Note
  # METHOD POST
  /notes

  # required fields
  {
    "title": "Meu super titulo principal vai aqui",
    "body": "Meu conteudo bem feito vai aqui"
  }

  # return
  {
    "id": "627a0577f04a5a48699e12ca",
    "title": "Meu super titulo principal vai aqui",
    "body": "Meu conteudo bem feito vai aqui",
    "created_at": "2022-05-10T06:25:59.486Z",
    "author": {
      "id": "6270ccd6d2760e1b1a9c491c",
      "name": "Bruce Wayne",
      "email": "bruce@email.com",
      "created_at": "2022-05-03T06:33:58.995Z"
    }
  }
```

```bash
  # List Single Note
  # METHOD GET
  /notes/:id

  # return
  {
	"id": "627a0577f04a5a48699e12ca",
	"title": "Meu super titulo principal vai aqui",
	"body": "<h1>Outro titulo va aqui</h1>\n <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n  Perspiciatis omnis fugit minus. Exercitationem labore, ex aut\n  doloremque voluptatem quae facere reiciendis perspiciatis blanditiis nobis?\n        Asperiores labore natus provident mollitia dolorem!\n      </p>\n      <h2>Outro subtitulo vai aqui</h2>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Perspiciatis omnis fugit minus. Exercitationem labore, ex aut\n        doloremque voluptatem quae facere reiciendis perspiciatis blanditiis nobis?\n        Asperiores labore natus provident mollitia dolorem!\n      </p><img src=\"https://i.pinimg.com/originals/4f/3f/be/4f3fbec10df43b58a99a02c92517a726.jpg\" alt=\"\" />",
	"created_at": "2022-05-10T06:25:59.486Z",
	"author": {
		"id": "6270ccd6d2760e1b1a9c491c",
		"name": "Bruce Wayne ",
		"email": "bruce@email.com",
		"created_at": "2022-05-03T06:33:58.995Z"
	}
}
```

```bash
  # List all Note
  # METHOD GET
  /notes

  # return an array
  [
    {
      "id": "6276051e87b17498d3f8131f",
      "title": "Meu segundo titulo principal",
      "body": "Meu segundo texto bem feito",
      "created_at": "2022-05-07T05:35:26.672Z",
      "author": {
        "id": "6270ccd6d2760e1b1a9c491c",
        "name": "Bruce Wayne",
        "email": "bruce@email.com",
        "created_at": "2022-05-03T06:33:58.995Z"
      }
    }
  ]
```

```bash
  # Update Note
  # METHOD PUT
  /notes/:id

  # required fields
  {
    "title": "Titulo atualizado",
    "body": "Conteudo atualizado"
  }

  # return
  {
    "id": "6274c41963e88bf6e6d37695",
    "title": "Titulo atualizado",
    "body": "Conteudo atualizado",
    "created_at": "2022-05-06T06:45:45.717Z",
    "author": {
      "id": "6270ccd6d2760e1b1a9c491c",
      "name": "Bruce Wayne",
      "email": "bruce@email.com",
      "created_at": "2022-05-03T06:33:58.995Z"
    }
  }
```

```bash
  # Delete Note
  # METHOD DELETE
  /notes/:id

  # return
  code status 204
```

```bash
  # Serach Note by Word
  # METHOD GET
  /notes/search

  # query
  /notes/search?query=palavra

  # return an array
  [
    {
      "id": "6276051e87b17498d3f8131f",
      "title": "Meu segundo titulo principal",
      "body": "Meu segundo texto bem feito",
      "created_at": "2022-05-07T05:35:26.672Z",
      "author": {
        "id": "6270ccd6d2760e1b1a9c491c",
        "name": "Bruce Wayne",
        "email": "bruce@email.com",
        "created_at": "2022-05-03T06:33:58.995Z"
      }
    }
  ]
```

```bash
  # Update User
  #METHOD PUT
  /users/edit

  # required fields
  {
    "name": "Bruce Wayne"
    "email": "bruce@email.com",
  }

  # return
  {
    "id": "6270ccd6d2760e1b1a9c491c",
    "name": "Bruce Wayne",
    "email": "bruce@email.com",
    "created_at": "2022-05-03T06:33:58.995Z"
  }
```


```bash
  # Update Password
  #METHOD PUT
  /users/reset_password

  # required fields
  {
    "password": "123456"
  }

  # return
  {
    "id": "6270ccd6d2760e1b1a9c491c",
    "name": "Bruce Wayne",
    "email": "bruce@email.com",
    "created_at": "2022-05-03T06:33:58.995Z"
  }
```

## How to use it

```bash
  # Install the dependencies
  $ yarn install
  # Run the web server
  $ yarn dev
```

The app will be available for access on your browser at (http://localhost:3000)
