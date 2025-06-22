document.addEventListener('DOMContentLoaded',function(){
    const galleryItems=document.querySelectorAll(".gallery-item");
    const lightbox=document.querySelector(".lightbox");
    const lighboxImage=document.getElementById("lightbox-image");
    const closeBtn=document.getElementById("close-btn");
    //open lightbox when clicking a gallery item
    galleryItems.forEach(item=>{
        item.addEventListener("click",function(){
            const imgSrc=this.src.replace('-thumbnail','');
            lighboxImage.src=imgSrc;
            lightbox.style.display="flex";

        });
    });
    //close lightbox when clicking close button
    closeBtn.addEventListener("click",()=>{
        lightbox.style.display="none";
    });
    lightbox.addEventListener("click",(e)=>{
        if(e.target===lightbox){
            lightbox.style.display="none";
        }
    });

});