## exercício 3
### item a

```ts
export function performAttack(attacker: Character, defender: Character) {
    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
} 
```

### item b

```ts
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if(!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}
```

### item c

A diferença entre as funções é que na segunda foi feita uma inversão de dependencias, passando a função validateInputCharacter como parâmetro da função, dessa forma se torna possível realizar um teste unitário da função performAttack.

## Exercício 4
### item a

O mock será da função validateChacacter, pois ela é a dependência da função performAttack. Assim podemos testar a  performAttack de forma isolada, garantindo que o teste seja especifico apenas para a função que testamos.
