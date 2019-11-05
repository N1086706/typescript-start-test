class Animal {          //我是老爸(我懶得用語法糖)
    name: string;          //名字設定為字串
    age: number;          //年齡設定為數字
    constructor(n: string, a: number) {          //我設定我的輸入值(名字:字串,年齡:數字)
        this.name = n;          //這是名字=名字
        this.age = a;          //這是年齡=年齡
    }
    eat(){
        console.log("我是",this.name,",我",this.age,"歲，我很會吃飯")
    }
}

class Bird extends Animal{          //我繼承老爸DNA(我用語法糖)
    constructor(name:string,age:number){          //我設定我的輸入值(名字:字串,年齡:數字)
        super(name,age)
    }
    fly(){          //我自己的飛()
        console.log("我是",this.name,",我",this.age,"歲，我很會飛")
    }
    eat(){
        super.eat();          //呼叫老爸的吃()
        /*console.log('我複寫了我老爸的');*/          //我自己的吃()
    }
}
let bird1 = new Bird('九官鳥',24);          //我的鳥園新增鳥兒
let Animal1 = new Animal('老虎',1);          //動物園多一隻老虎baby

bird1.eat()
Animal1.eat()