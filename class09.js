//快速幂
var myPow = function (x, n) {
    let ans = -1
    if (n < 0) {  //x^n=(1/x)^n
        n = -n
        x=1/x
    }
    while (n) {
        if (n % 2) {
            ans *= x
            x*=x
        }
        x *= x
        n=Math.floor(n/2)
    }
    return ans
}