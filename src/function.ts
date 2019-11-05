let b = 'hhteahterhtaiehtjreiofhjiuehgu'          //字串
let key = 'h'          //搜尋字元
let ans = 0          //由0開始計算

let a = function () {          
    for (let i = 0; i < b.length; i++) {          //(起始值,條件判斷,成立後果) 
        console.log(b.charAt(i))          //列出所有字串
        if (b.charAt(i) === key) {          //如果字串等於key
            ans += 1          //由0開始加1
        }
    }
}

a()
console.log("我的答案:" ,ans);
