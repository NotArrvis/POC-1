let flexdirectin = ["row","row-reverse","column","column-reverse"]
let justifyContentIn = ["flex-start","flex-end", "center", "space-between", "space-around", "space-evenly"]
let alignItensIn = ["flex-start", "flex-end","center", "baseline", "stretch"]

const conteudoTAG = document.querySelector('#dive');


// botoes do flexdirect
const buttonrow = document.querySelector('#botao-row');
const buttonrowrev = document.querySelector('#botao-rowrev');
const buttoncolumn = document.querySelector('#botao-column');
const buttoncolumnrev = document.querySelector('#botao-columnrev');

// botoes do justify content
const bflexStart = document.querySelector('#bflexStart');
const bflexEnd = document.querySelector('#bflexEnd');
const bjustifyCenter = document.querySelector('#bjustifyCenter');
const bspaceBetween = document.querySelector('#bspaceBetween');
const bspaceAround = document.querySelector('#bspaceAround');
const bspaceEvenly = document.querySelector('#bspaceEvenly');

// botoes do align items

const AlignButtonfs = document.querySelector('#AlignButtonfs');
const AlignButtonfe = document.querySelector('#AlignButtonfe');
const AlignButtonCenter = document.querySelector('#AlignButtonCenter');
const AlignButtonBaseline = document.querySelector('#AlignButtonBaseline');
const AlignButtonStretch = document.querySelector('#AlignButtonStretch');


    // evento dos botoes flexdirection

buttonrow.addEventListener('click', () => 
    {
    conteudoTAG.style.flexDirection = flexdirectin[0]
});

buttonrowrev.addEventListener('click', () => 
    {
    conteudoTAG.style.flexDirection = flexdirectin[1]
});

buttoncolumn.addEventListener('click', () => 
    {
    conteudoTAG.style.flexDirection = flexdirectin[2]
});

buttoncolumnrev.addEventListener('click', () => 
    {
    conteudoTAG.style.flexDirection = flexdirectin[3]
});

    // evento dos botoes do justify content

bflexStart.addEventListener('click', () => 
    {
    conteudoTAG.style.justifyContent = justifyContentIn[0]
});

bflexEnd.addEventListener('click', () => 
    {
    conteudoTAG.style.justifyContent = justifyContentIn[1]
});

bjustifyCenter.addEventListener('click', () => 
    {
    conteudoTAG.style.justifyContent = justifyContentIn[2]
});

bspaceBetween.addEventListener('click', () => 
    {
    conteudoTAG.style.justifyContent = justifyContentIn[3]
});

bspaceAround.addEventListener('click', () => 
    {
    conteudoTAG.style.justifyContent = justifyContentIn[4]
});

bspaceEvenly.addEventListener('click', () => 
    {
    conteudoTAG.style.justifyContent = justifyContentIn[5]
});

// evento dos botoes do align items

AlignButtonfs.addEventListener('click', () => 
    {
    conteudoTAG.style.alignItems = alignItensIn[0]
});

AlignButtonfe.addEventListener('click', () => 
    {
    conteudoTAG.style.alignItems = alignItensIn[1]
});

AlignButtonCenter.addEventListener('click', () => 
    {
    conteudoTAG.style.alignItems = alignItensIn[2]
});

AlignButtonBaseline.addEventListener('click', () => 
    {
    conteudoTAG.style.alignItems = alignItensIn[3]
});

AlignButtonStretch.addEventListener('click', () => 
    {
    conteudoTAG.style.alignItems = alignItensIn[4]
});