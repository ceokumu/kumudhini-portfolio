//Loader 
window.addEventListener("load",function loader(){
    document.querySelector("#preloader").style.display="none";
})

//NAV SECTION
let navLinks=document.getElementById("nav-links");
let hamburger=document.getElementById("hamburger");
let showingLinks=false;
hamburger.addEventListener("click",()=>{
    showingLinks= !showingLinks;
    if(showingLinks){
        navLinks.classList.toggle('show-links')
        hamburger.innerHTML="<span class='line1'></span><span class='line2'></span>";
        hamburger.classList.toggle("cross");
    }
    else{
        navLinks.classList.remove('show-links');
        hamburger.innerHTML="<span></span><span></span><span></span>";
        hamburger.classList.remove('cross');
    }
    
});
//HERO SECTION
let h2=document.getElementById("job")
let jobText="Front-End Web Developer"
let i=0;
function type(){
    if(i<jobText.length){
        h2.textContent+=jobText.charAt(i)
        i++;
        setTimeout(type,100)
    }

    else{
        h2.style.border="none";
        setTimeout(()=>{
            h2.style.borderRight="0.3rem solid white";
            h2.textContent="";
            i=0;
            type();
        },2000);
    }
    
}
type();
//Object for scroll animation
let aboutItem=document.getElementById("about-container");
 let projectItem=document.querySelector("#projects-wrapper");
 let serviceSection=document.getElementById("services");
 let blog=document.querySelector(".blog-details");
let scrollObject={
     first:{
        
        class:'show',
        item:aboutItem
     },
     second:{
        
        class:'show2',
        item:projectItem
     },
     third:{
        class:'show3',
        item:serviceSection
     },
     forth:{
        class:'show4',
        item:blog
     }
}

for(let eachkeys of Object.keys(scrollObject)){
    let current=scrollObject[eachkeys];
      let observer=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add(current.class);
            }
            else{
                entry.target.classList.remove(current.class);
            }
        });
    },{
        threshold:0.2
    });
    observer.observe(current.item);
}

//Balls Animation
let ballOne=document.querySelector(".ball-one");
let ballTwo=document.querySelector(".ball-two");
let positionA=Math.round(Math.random())*1;
let positionB=Math.round(Math.random())*1;
    let direction=1;
   let speed=1.5;
   function moveballs(){
    
    positionA+=direction;
    if(positionA >=200 || positionA <=0){
        direction*= -1;
    };
    positionB+=direction;
    if(positionB >=200 || positionB <=0){
        direction*= -1;
    };
    ballOne.style.bottom=positionA+"vh";
    ballTwo.style.bottom=positionB+"vh";
    requestAnimationFrame(moveballs);
}
moveballs();
//Services animation
let serviceTitle=document.querySelectorAll(".service-title");
serviceTitle.forEach(titles=>{
    titles.addEventListener("click",function showDetails(){
        let details=titles.nextElementSibling;
        details.style.display=details.style.display==="block"?"none":"block";
        if(details.style.display==="block"){
           serviceTitle.forEach(titles=>{
            titles.style.opacity="0.5";
           });
            details.style.opacity="1";
            details.classList.add("popup");
            details.previousElementSibling.style.opacity="1";
            let balls=document.querySelectorAll(".balls");
            balls.forEach(ball=>{
                ball.style.opacity="0.3";
            })
        }
        else{
            serviceTitle.forEach(titles=>{
                titles.style.opacity="1";
                details.classList.add("popup");
               });
        }
    });
    
});



