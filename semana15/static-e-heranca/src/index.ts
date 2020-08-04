import { User } from "./User"


// 1 a) caso a nova instancia esteja tipada de acordo com a classe, ou sem tipo não daria pra acessar a propriedade password pois ela é privada, e além disso a classe User não possui nenhum método que retorne o password

// 1 b) Uma vez apenas.

const user1: User = new User(String(Date.now() * Math.random()), "email@email.com", "João", "senha_super_segura")

