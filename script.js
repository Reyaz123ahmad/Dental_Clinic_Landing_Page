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



// ===== CUSTOMIZATION PANEL CODE ===== //
document.addEventListener('DOMContentLoaded', function() {
    // Initialize customization panel
    const customizeBtn = document.getElementById('customizeBtn');
    const closePanel = document.getElementById('closePanel');
    const panel = document.getElementById('customizationPanel');
    
    if (customizeBtn && panel) {
        customizeBtn.addEventListener('click', function() {
            panel.classList.add('active');
        });
    }
    
    if (closePanel) {
        closePanel.addEventListener('click', function() {
            panel.classList.remove('active');
        });
    }
    
    // Section mapping
    const sections = {
        'header': document.querySelector('.header'),
        'hero': document.querySelector('.hero-section'),
        'welcome': document.querySelector('.mini-hero-section'),
        'patient': document.querySelector('.patient'),
        'footer': document.querySelector('.footer-section'),
        'committed':document.querySelector('.committed'),
        'schedule': document.querySelector('.schedule-section'),
        'schedulecontent':document.querySelector('.schedule-content'),
        'pic':document.querySelector('.pic-section'),
        'off':document.querySelector('.off-section'),
        'offcontent':document.querySelector('.off-content'),
        'story':document.querySelector('.story-section'),
        'query':document.querySelector('.query-section'),
        'contact':document.querySelector('.contact-parent'),
        'contactsection':document.querySelector('.contact-section'),
        'form':document.querySelector('.form-parent'),
        'formsection':document.querySelector('.form-section')
    };
    
    const selector = document.getElementById('sectionSelector');
    let currentSection = 'header';
    
    if (selector) {
        selector.addEventListener('change', function() {
            currentSection = this.value;
        });
    }
    
    // Font options
    document.querySelectorAll('.font-option').forEach(option => {
        option.addEventListener('click', function() {
            const font = this.getAttribute('data-font');
            if (sections[currentSection]) {
                sections[currentSection].style.fontFamily = font;
            }
        });
    });
    
    // Color options
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            if (sections[currentSection]) {
                sections[currentSection].style.color = color;
                const textElements=sections[currentSection].querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,a');
                textElements.forEach(el=>{
                    el.style.color=color;
                })
            }
        });
    });
    
    // Reset button
    const resetBtn = document.getElementById('resetStyles');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (sections[currentSection]) {
                sections[currentSection].style.fontFamily = '';
                sections[currentSection].style.color = '';
            }
        });
    }
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (panel && !panel.contains(e.target) && e.target !== customizeBtn) {
            panel.classList.remove('active');
        }
    });



    // Add this with your other event listeners in the customization panel code

// Background color change
document.querySelectorAll('.bg-color-option').forEach(option => {
    option.addEventListener('click', function() {
      const bgColor = this.getAttribute('data-bgcolor');
      if (sections[currentSection]) {
        sections[currentSection].style.backgroundColor = bgColor;
        
        // Special case for header to maintain transparency on scroll
        if (currentSection === 'header') {
          sections[currentSection].dataset.originalBg = bgColor;
        }
      }
    });
  });
  
  
  
  // Modify your scroll event for header to preserve custom background
  const nav = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      nav.style.backgroundColor = nav.dataset.originalBg || 'lightseagreen';
    } else {
      nav.style.backgroundColor = nav.dataset.originalBg || 'transparent';
    }
  });
  
});