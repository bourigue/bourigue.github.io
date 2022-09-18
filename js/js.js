window.addEventListener("load",()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(()=>{

        document.querySelector(".page-loader").style.display="none"
    },600)




})
//--------------- toggele navbar-------------
const navToggler=document.querySelector(".nav-toggler")

navToggler.addEventListener("click",(e)=>{
    hideSection(); 
    toggleNabbar();
    document.body.classList.toggle("hide-scrolling");

})
function hideSection(){
     document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNabbar(){
    document.querySelector(".header").classList.toggle("active");
}

/*---------------------- active section ------------------*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("link-item")&& e.target.hash!==""){
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide")
        if(e.target.classList.contains("nav-item")){
            toggleNabbar()
            document.body.classList.add("hide-scrolling");
            
        }else{
            hideSection()

        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide")
            document.querySelector(".overlay").classList.remove("active");

        },200)
    }
})


/*------------------- About tab --------------------*/
const tabContainer=document.querySelector(".about-tabs"),
aboutSection=document.querySelector(".about-section");
tabContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("tab-item")&& !e.target.classList.contains("active")){
        tabContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target=e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

    }
})
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
      toggelPortfolioPopup();
      document.querySelector(".portfolio-popup").scrollTo(0,0);
      portfolioItemDetails(e.target.parentElement);
    }
})
function toggelPortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
    
}
document.querySelector(".pp-close").addEventListener("click",toggelPortfolioPopup);
 // hidde popup when clicking outside of it
 document.querySelector(".pp-inner").addEventListener("click",(e)=>{
 if(e.target.classList.contains("pp-inner")){
    toggelPortfolioPopup();
 }

 }); 
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src=
    portfolioItem.querySelector(".portfolio-item-thumbnail img ").src;
   // document.body.classList.toggle("hide-scrolling");
   // document.querySelector(".main").classList.toggle("fade-out");
   document.querySelector(".pp-header h3").innerHTML=
   portfolioItem.querySelector(".portfolio-item-title").innerHTML

   document.querySelector(".pp-body").innerHTML=
   portfolioItem.querySelector(".portfolio-item-detail").innerHTML
}

