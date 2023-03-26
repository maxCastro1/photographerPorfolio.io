
const get = element => document.getElementById(element)
const navLinks = document.getElementsByClassName("nav-links")
const rightNav = document.getElementsByClassName("right-nav-bar")
const navButton = get("menu-button")
const exitButton = get("exit-button")
const nav = get("nav")
const nextButton = get("btn-next")
const previousButton = get("btn-previous")
const body = get("body")
const titles = get("title")
const par = get("paragraph")
const images = ["3","4","5","6","7","8","9","10","11","12","13","14","15","16"]
const names = ["amber romenia",
"Lykos Maryse",
"Hero Robin",
"ashton bingham",
"bill wegener",
"chester wade",
"eberhard grossgasteiger",
"james x", 
"jessica felicio",
"justin veenema",
"jyotirmoy gupta",
"mahesh hrishna",
"noah buscher",
"stefan stefancik"]
const stories = ["Your people lived on the edges ofcivilization, and you learned the methods of survival from your family.",
                "You were chosen to study at a secluded monastery. There, you were taught the fundamental techniques required to eventually master a tradition.",
               "You were accused of Extortion. You committed the crime or helped do so, but nonetheless the authorities found you not guilty.",
               "Your people lived on the edges ofcivilization, and you learned the methods of survival from your family.",
               "Your people lived on the edges ofcivilization, and you learned the methods of survival from your family.",
               "Your people lived on the edges ofcivilization, ",
               "you learned the methods of survival from your family.",
               "Your people lived on the edges ofcivilization, and you learned the methods of survival from your family.",
               "Your people lived on the edges ofcivilization",
               "Your people lived on the edges ofcivilization, and you learned the methods of survival from your family.",
               "you learned the methods of survival from your family.",
               "you learned the methods of survival from your family.",
               "Your people lived on the edges ofcivilization, and you learned the methods of survival from your family.",
               "Your people lived on the edges ofcivilization"
            ]
let curentImage = 0;
let navPosition = false;

nextButton.onclick = () =>{ 

    clearInterval(interval)
    if(curentImage === images.length-1){
        curentImage = 0
        body.style.backgroundImage=`url(images/${images[curentImage]}.jpg)`
        titles.innerHTML=names[curentImage]
        par.innerHTML=stories[curentImage]
    }

    else if(images.length > curentImage){
            curentImage+=1
            console.log(curentImage)
            body.style.backgroundImage=`url(images/${images[curentImage]}.jpg)`
            titles.innerHTML=names[curentImage]
            par.innerHTML=stories[curentImage]
      
      
    }
       
}
previousButton.onclick = () =>{ 
    clearInterval(interval)
    if(curentImage !== 0){ 
        curentImage-=1
        if(curentImage === 0){
            body.style.backgroundImage=`url(images/${images[curentImage]}.jpg)` 
            titles.innerHTML=names[curentImage]
            par.innerHTML=stories[curentImage]

        }
        else{
            body.style.backgroundImage=`url(images/${images[curentImage]}.jpg)` 
            titles.innerHTML=names[curentImage]
            par.innerHTML=stories[curentImage]
        }
       
    
    }
    else if(curentImage === 0){
        curentImage = images.length-1
        body.style.backgroundImage=`url(images/${images[curentImage]}.jpg)`
        titles.innerHTML=names[curentImage]
        par.innerHTML=stories[curentImage]
    }
    
}
const interval = setInterval(function (){ 
    if(curentImage === images.length){
         curentImage = 0
         body.style.backgroundImage=`url(images/${images[curentImage]}.jpg)`
         titles.innerHTML=names[curentImage]
         par.innerHTML=stories[curentImage]
    }
    else{
        if(images.length > curentImage){
            if(curentImage === 0){
                curentImage+=1
                body.style.backgroundImage=`url(images/${images[curentImage]}.jpg)`
                titles.innerHTML=names[curentImage]
                par.innerHTML=stories[curentImage]
            }
            else{
                body.style.backgroundImage=`url(images/${images[curentImage]}.jpg)`
                titles.innerHTML=names[curentImage]
                par.innerHTML=stories[curentImage]
                curentImage+=1
            }
          
          
        }
    }
   
       
}, 15000);

navButton.onclick = () => {
    nav.classList.add('open-nav');
    nav.classList.add('fade');
    console.log("clicked")
    exitButton.style.display="block"
    navButton.style.display="none"
    rightNav[0].style.justifyContent = "flex-start"
    navLinks[0].style.marginTop="7rem"
    rightNav[0].style.alignItems="left"
    for(let i = 0 ; i < 2 ; i++){
        navLinks[i].style.display="flex"
        console.log(navLinks[i])
    }
    navPosition = true;
   
}
exitButton.onclick = () => {
  
    nav.classList.remove('open-nav');
    exitButton.style.display="none"
    navButton.style.display="block"
    for(let i = 0 ; i < 2 ; i++){
        navLinks[i].style.display="none"
        console.log(navLinks[i])
    }
    rightNav[0].style.justifyContent = "flex-end"
    navPosition = false;
}
window.onresize = () =>{
    console.log(screen.width)
    if(navPosition && screen.width  > 720 ){
            nav.classList.remove('open-nav');
            exitButton.style.display="none"
            navButton.style.display="none"
            navLinks[0].style.marginTop="unset"
            rightNav[0].style.justifyContent = "flex-end"
    }
   
    }
