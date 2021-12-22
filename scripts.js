const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];

const fontSize = 18

//Pegando elemento canvas

const c = document.getElementById("matrix")

//definindo canvas como tamanho máximo da tela

c.height = window.innerHeight;
c.width = window.innerWidth;

//definindo o seu contexto

const ctx = c.getContext("2d")

//definindo quantas colunas serão necessárias pelo tamanho da tela e fonte

const columns = c.width / fontSize;

// criando vetor para cada gorta, sempre iniciando da posiçã y=1

const drops = new Array(Math.floor(columns)).fill(1)


function desenhar(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,c.width,c.height)

    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px Arial`;

    for (let i = 0; i<drops.length; i++){
        //pegando uma letra aleatoria do vetor
        const text = letters[Math.floor(Math.random() * letters.length)]

        //escrevendo na tela
        ctx.fillText(text, i * fontSize, drops[i] *fontSize)

        //mvendo no eixo y
        drops[i]++

        if(drops[i]*fontSize>c.height && Math.random() > 0.95){
            drops[i] = 0;
        }
    }

    //chamada recursiva parar animar quadro a quadro
    window.requestAnimationFrame(desenhar)
}

desenhar()


