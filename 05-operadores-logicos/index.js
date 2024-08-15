/*
== ---igual--- a==b --- verdadeiro se a for igual a b
=== ---idêntico--- a===b --- verdadeiro se a for idêntico a b
!= ---diferente--- a!=b --- verdadeiro se o a for diferente de b
!== ---não idêntico--- a!==b --- verdadeiro se o a não for idêntico a b
< ---menor que--- a < b --- verdadeiro quando a for menor que b
<= ---menor igual que--- a <= b --- verdadeiro quando a for menor ou igual a b
> ---maior que--- a > b --- verdadeiro quando a for maior que b
>= ---maior igual que--- a >= b --- verdadeiro quando a for maior ou igual a b
*/ 

/*
const a = 3
const b = 10

console.log(a >= b)
*/

//AND

const a = 2
const b = 2

console.log(a === b && a <= b)
// V e V = V (true)

console.log(a === b && a < b)
// V e F = F (false)

console.log(a > b && a === b)
// F e V = F (false)

console.log(a > b && a < b)
// F e F = F (false))


//OR

console.log(a === b || a <= b)
// V e V = V (true)

console.log(a === b || a < b)
// V e F = F (false)

console.log(a > b || a === b)
// F e V = V (true)

console.log(a > b || a < b)
// F e F = F (false)

//NOT

console.log(a === b)

console.log(!(a === b))
