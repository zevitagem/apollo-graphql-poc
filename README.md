```
mutation ExamplePQuery {
  addHuman(
    human : {
      name: "josé",
      active: true,
      email: "josevictor.teste@gmail.com",
      createdAt: "2022-08-13 10:33:55",
      role: JUNIOR
    }
  ) {
        code
        mensagem
        human {
          id
          name
          email
        }
  }
}
```

```
query ExamplePQuery {
  humans {
    __typename
    id
    name
    email
     ... on Developer {
        role {
          type
          id
        }
      }
    ... on User {
        active
        createdAt
      }
  }
}
```

```
query ExamplePQuery {
  human (id: 2) {
    name
  }
}
```
