const Application = PIXI.Application;

const app = new PIXI.Application
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

const textureBack = PIXI.Texture.from('../img/back.png');
const textureBook = PIXI.Texture.from('../img/book_stand.png');
const texturePlant = PIXI.Texture.from('../img/plant.png');
const stairs = PIXI.Texture.from('../img/old_stair.png');
const textureSecondPlant = PIXI.Texture.from('../img/dec_1.png');
const textureThirdPlant = PIXI.Texture.from('../img/plant2.png');
const textureSofa = PIXI.Texture.from('../img/sofa.png');
const textureTable = PIXI.Texture.from('../img/table.png');
const textureGlobe = PIXI.Texture.from('../img/globe.png');
const man = PIXI.Texture.from('../img/Austin.png');
const install = PIXI.Texture.from('../img/btn.png');
const textureLogo = PIXI.Texture.from('../img/logo.png');
const textureHammer = PIXI.Texture.from('../img/icon_hammer.png');
const textureCircle1 = PIXI.Texture.from('../img/choosed.png');
const textureCircle = PIXI.Texture.from('../img/circle.png');
const textureOk = PIXI.Texture.from('../img/ok.png');
const textureShade = PIXI.Texture.from('../img/Layer3.png');
const textureAd = PIXI.Texture.from('../img/Layer2.png');

const container = new PIXI.Container();
app.stage.addChild(container);

const background = new PIXI.Sprite(textureBack);
background.anchor.set();
container.addChild(background);

const book = new PIXI.Sprite(textureBook);
book.x = 880;
book.y = 0;
container.addChild(book);

const plant = new PIXI.Sprite(texturePlant);
plant.x = 1100;
plant.y = 140;
container.addChild(plant);
container.setChildIndex(plant,1)

const plant3 = new PIXI.Sprite(textureThirdPlant);
plant3.x = 450;
plant3.y = 0;
container.addChild(plant3);

const oldStairs = new PIXI.Sprite(stairs);
oldStairs.x = window.innerWidth/2+150;
oldStairs.y = 20;
container.addChild(oldStairs);
container.setChildIndex(oldStairs,2)

const sofa = new PIXI.Sprite(textureSofa);
sofa.x = 120;
sofa.y = 320;
container.addChild(sofa);

const table = new PIXI.Sprite(textureTable);
table.x = 200;
table.y = 170;
container.addChild(table);

const globe = new PIXI.Sprite(textureGlobe);
globe.x = 80;
globe.y = 90;
container.addChild(globe);

const Austin = new PIXI.Sprite(man);
Austin.x = window.innerWidth/2;
Austin.y = 110;
container.addChild(Austin);

const installBtn = new PIXI.Sprite(install);
installBtn.x = window.innerWidth/2+20;
installBtn.y = window.innerHeight - 100;
installBtn.interactive = true;
installBtn.anchor.set(0.5);
installBtn.on('mousedown', (event) => {
   window.location.href = 'https://apps.apple.com/ru/app/homescapes/id1195621598'
});
app.stage.addChild(installBtn);

let scale = 1;
let increase = -0.0013;

app.ticker.add((delta) => {
    scale += increase;
    if(scale < 0.93){
        scale = 0.93;
        increase *= -1;
    }else if (scale > 1) {
        scale = 1;
        increase *= -1;
    }
    installBtn.scale.set(scale);  
})

let timerIdLogo = setInterval(function() { 
    const logo = new PIXI.Sprite(textureLogo);
    logo.x = 20;
    logo.y = 20;
    app.stage.addChild(logo);
}, 2500);

const hammer = new PIXI.Sprite(textureHammer);
hammer.x = 1080;
hammer.y = 225;
hammer.interactive = true;

let options = new PIXI.Container();
let stairsContainer = new PIXI.Container();
let choiseContainer = new PIXI.Container();
function damn(){
    for (let i=0; i<3; i++) {
        
        let option = new PIXI.Sprite(textureCircle);
        option.x = 805+130*i;
        option.y = 7;
        option.interactive = true;
        option.on('mousedown', (event) => { 
            option.texture = textureCircle1
            option.x = 805+130*i;
            option.y = 7;
            let ok = new PIXI.Sprite(textureOk);
            ok.x = 796+130*i;
            ok.y = 140;
            ok.interactive = true;
            for(let j=0;j<3;j++){
                if(j !=i){
                    if(choiseContainer.children.length>=1){
                       choiseContainer.removeChildAt(0) 
                    }
                    options.getChildAt(j).texture = textureCircle 
                    options.getChildAt(j).x = 805+130*j;
                    options.getChildAt(j).y = 10;
                }
            }        
            if(stairsContainer.children.length>=1){
                stairsContainer.removeChildAt(0)
                const textureStairsNew = PIXI.Texture.from(`../img/new_stair_0${i+1}.png`);
                const newStairs = new PIXI.Sprite(textureStairsNew);
                newStairs.alpha = 0.09;
                newStairs.x = window.innerWidth/2+202;
                newStairs.y = 0;
                oldStairs.alpha = 0;
                stairsContainer.addChild(newStairs);
                container.addChild(stairsContainer)
                container.setChildIndex(stairsContainer,3) 
                gameLoop()
                function gameLoop(delta) {
                    requestAnimationFrame(gameLoop);
                    if(newStairs.y==20){
                        return
                    }
                    else{
                      newStairs.y += 2;  
                      newStairs.alpha += 0.09;
                    }
                }
            }else{
                const textureStairsNew = PIXI.Texture.from(`../img/new_stair_0${i+1}.png`);
                const newStairs = new PIXI.Sprite(textureStairsNew);
                newStairs.alpha = 0.09;
                newStairs.x = window.innerWidth/2+202;
                newStairs.y = 0;
                oldStairs.alpha = 0;
                stairsContainer.addChild(newStairs);
                container.addChild(stairsContainer)
                container.setChildIndex(stairsContainer,3)
                gameLoop()
                function gameLoop(delta) {
                    requestAnimationFrame(gameLoop);
                    if(newStairs.y==20){
                        return
                    }
                    else{
                      newStairs.y += 2;  
                      newStairs.alpha += 0.09;
                    }
                }
            }           
            ok.on('mousedown', (event)=>{
                const shade = new PIXI.Sprite(textureShade);
                container.addChild(shade);   
                const ad = new PIXI.Sprite(textureAd);  
                ad.x = window.innerWidth/4+60;
                ad.y = window.innerHeight/4-100;
                container.addChild(ad)        
            })
            choiseContainer.addChild(ok)
            container.addChild(choiseContainer);
        });
        
        options.addChild(option);     
    }
    let stairs = new PIXI.Container();
    for(let i=0; i<3; i++){
        const textureStairsOptions = PIXI.Texture.from(`../img/0${i+1}.png`);
        const stairsOpt = new PIXI.Sprite(textureStairsOptions);
        if(i==2){
            stairsOpt.x = 830+128*i;
            stairsOpt.y = 27;
        }else{
            stairsOpt.x = 830+128*i;
            stairsOpt.y = 5;    
        }
        
        stairsOpt.interactive = true;
        stairs.addChild(stairsOpt);
    }
    container.addChild(options);
    container.addChild(stairs);
}

let timerIdHammer = setTimeout(function() {
    container.addChild(hammer);
}, 3000)

hammer.on('mousedown', (event) => {
    container.removeChild(hammer)
    damn()
});

const plant2 = new PIXI.Sprite(textureSecondPlant);
plant2.x = 1100;
plant2.y = 438;
container.addChild(plant2);
container.setChildIndex(plant2,4)