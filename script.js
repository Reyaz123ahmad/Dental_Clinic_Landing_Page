document.getElementById("about").addEventListener("click",function(){
    document.querySelector(".mini-hero-section").scrollIntoView({behavior:'smooth'});
});

document.getElementById("service").addEventListener("click",function(){
    document.querySelector(".schedule-section").scrollIntoView({behavior:'smooth'});
})

document.getElementById("reviews").addEventListener("click",function(){
    document.querySelector(".story-section").scrollIntoView({behavior:'smooth'});
})
     
document.getElementById("contact").addEventListener("click",function(){
    document.querySelector(".query-section").scrollIntoView({behavior:'smooth'});
})
     




document.querySelector(".call").addEventListener("click",function(){
           
    window.location.href='tel:(147) 870-7040'
});


const nav=document.querySelector('.header');
window.addEventListener('scroll',function(){
   if(window.scrollY>0){
    nav.style.backgroundColor='lightseagreen'
   }
   else{
     nav.style.backgroundColor='transparent'
   }
})




const map=document.querySelector(".map-btn");
    map.addEventListener('click',function(){
        console.log('he')
           
    window.location.href='https://www.google.com/maps'
    });



const address=document.querySelector('#query');
    address.addEventListener('click',function(){
        window.location.href='https://www.google.com/maps'
    })


const demo=document.querySelector('#address');
    demo.addEventListener('click',function(){
        window.location.href='https://www.google.com/maps'
    })


document.querySelector(".mobile").addEventListener("click",function(){
           
    window.location.href='tel:+(888) 695-9859'
    });



document.querySelector(".email").addEventListener("click",function(){
           
    window.location.href='mailto:info@example.com'
    

})



document.querySelector("#face").addEventListener("click",function(){
           
    window.location.href='https://www.facebook.com/share/14zuYxywui/?mibextid=qi2Omg'
});



document.querySelector("#twitter").addEventListener("click",function(){
           
    window.location.href='https://www.twitter.com'
});

document.querySelector("#insta").addEventListener("click",function(){
           
    window.location.href='https://www.instagram.com'
});
document.querySelector("#google").addEventListener("click",function(){
           
    window.location.href='https://www.google.com'
});


document.querySelector(".query-btn").addEventListener("click",function(){
           
    window.location.href='https://maps.app.goo.gl/ygxncq4J1V5cHkvb7'
});
