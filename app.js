// const x=document.querySelectorAll('.mainprogram')
const x=document.querySelector('.input_1')
const y=document.querySelector('.input_2')
const z=document.querySelector('.input_3')

const result=document.querySelector('.result')
result.addEventListener("click",(event)=>{
    let b
    let l
    let h
    const alpha=6378245
    const beta=6356863
    const pi=180
    const mathGrad=(180 / Math.PI)
    const ebselent=Math.sqrt(1-((beta*beta)/(alpha*alpha)))
// ---------вычисляется вспомогательная величина---------------------------
    const d=Math.sqrt(Math.pow(Number(x.value),2)+Math.pow(Number(y.value),2))
    console.log('it d '+d)
    // --------анализируется значение d
    if (d===0){
        b=(pi*Number(z.value))/(2*Math.abs(Number(z.value)))
        l=0
        h=(Number(z.value)*Math.sin(b)-alpha*Math.sqrt(1-Math.pow(ebselent,2))*(1/2)*(1-Math.cos(2*b)*mathGrad))
        event.target.classList.add('decision')
        document.querySelector('.decision').innerHTML='B: '+b.toFixed(2)+' L:'+l.toFixed(2)+' H:'+h.toFixed(2)
    }else if(d>0){
        // если д больше нуля
        console.log(Number(y.value)+'its y')
        console.log(d+'its d')
        const lAlpha=Math.asin(Number(y.value)/d)*mathGrad
        console.log('its lalalalal'+lAlpha)
            if(Number(x.value)>0&&Number(y.value)>0) {
                l = lAlpha
            }else if(Number(x.value)<0&&Number(y.value)>0){
                l=pi-lAlpha
            }else if(Number(x.value)<0&&Number(y.value)<0){
                l=pi+lAlpha
                console.log('jjjkjkjkjkj---'+l)
            }else if(Number(x.value)>0&&Number(y.value)<0){
                l=2*pi-lAlpha
                if (l>360){
                    let lol=l
                    l=lol-360
                }
            }
            // анализируется значение z
            console.log('it s l ' +l)
            if (Number(z.value)===0){
                b=0
                h=d-alpha
                event.target.classList.add('decision')
                document.querySelector('.decision').innerHTML='L: '+l+'<br>B: '+b+'<br>H:'+h
            }else if(Number(z.value)!==0) {
                let e=0.00001
                let r=Math.sqrt(Math.pow(Number(x.value),2)+Math.pow(Number(y.value),2)+Math.pow(Number(z.value),2))
                let c=Math.asin(Number(z.value)/r)*mathGrad
                let p=(Math.pow(ebselent,2)*alpha)/(2*r)

                let s1=0
                let bSecond=c+s1
                let sTwo=Math.asin((p*Math.sin(2*bSecond)*mathGrad)/Math.sqrt(1-Math.pow(ebselent,2))*((1-Math.cos(bSecond)*mathGrad/2)))*mathGrad
                console.log("andrey")
                // if (Math.abs(sTwo-s1)<e){
                    b=Math.abs(bSecond)
                    h=Math.abs(d*Math.cos(b)*mathGrad+Number(z.value)*Math.sin(b)*mathGrad-alpha*Math.sqrt(1-Math.pow(ebselent,2)*(1-Math.cos(b)*mathGrad/2)))/10000
                    console.log('наш аш это '+h)
                    console.log('наш б это '+b)
                // }
                event.target.classList.add('decision')
                document.querySelector('.decision').innerHTML='L: '+l+'<br>B: '+b+'<br>H:'+h
            }
            // event.target.classList.add('decision')
            // document.querySelector('.decision').innerHTML='B: '+b.toFixed(2)+' L:'+l.toFixed(2)+' H:'+h.toFixed(2)
            // console.log(Number(x.value)+Number(y.value)+Number(z.value))
        }
    // }else if (Number(z.value===0)){
    //     b=0
    //     h=d-alpha
    //     event.target.classList.add('decision')
    //     document.querySelector('.decision').innerHTML='B: '+b.toFixed(2)+' L:'+l.toFixed(2)+' H:'+h.toFixed(2)
    // }else {
    //     console.log('andrey it s gey')
    // }

    console.log(Number(x.value)+Number(y.value)+Number(z.value))
})
