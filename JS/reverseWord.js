let str = 'This is a sunny day'
let revStr = ''
function reverse(str) {
    for (let i = str.length; i >= 0; i--) {
        revStr = revStr + str.charAt(i);
    }
}
reverse(str);
console.log(revStr)
