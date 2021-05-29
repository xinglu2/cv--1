let demo = document.querySelector("#demo")
let style = document.querySelector("#style")

let string = `
/*大家好
*我叫翠花
*我想给大家展示一下我的前端水平
*现在，我要让字体变成我最爱的红色
*/
body{
    color: red;
}
/*接下来
*我要给大家花一副画
那就是我最爱的----
八卦图
首先我需要一个div
*/
#div1{
    width: 200px;
    height: 200px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
/*然后我就要把它变成圆*/
#div1{
    border-radius: 50%;
    border: none;
}
/*之后让我把它做成黑白的阴阳两极吧*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 49%, rgba(0,0,0,1) 100%);
}
/*然后
*我要给它添加两个魔法轮子
*/
#div1::before{
    display: block;
    border-radius: 50%;  
    width: 100px;
    height: 100px;   
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
}
#div1::after{
    display: block;
    border-radius: 50%;
    width: 100px;
    height: 100px;   
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000000;
}
/*接下来
*就要形成八卦图的阵眼了
*/
#div1::before{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
`
let string2 = ""
let n = 0
let step = () =>{
    setTimeout(()=>{
        if(string[n] === "\n"){
            string2 += "<br>"
        }else if(string[n] === " "){
            string2 += "&nbsp"
        }else{
            string2 += string[n]
        }
        demo.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,9999);
        demo.scrollTo(0,9999);
        if(n<string.length-1){
            n+=1
            step()
        }
    },50)
}
step()