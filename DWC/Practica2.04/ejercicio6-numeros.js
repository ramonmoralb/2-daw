function comprobarCapicua(n) {

}
var n = 780
let sn = n.toString().split('').reverse()
let s = n.toString().split('')
const boo = sn.map((e, i) => e === s[i]);


console.log(boo)