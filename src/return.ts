let qaz = (a: string, b: string): number => {
    let ans = 0;
    for (let i = 0; i < a.length; i++) {
        console.log(a.charAt(i))
        if (a.charAt(i) === b) {
            ans += 1
        }
    }
    return ans;
}
let c = qaz('hreutuihteruthuhhytaeuyhhuiy5rtr', 'h');
console.log("我的答案:",c); 