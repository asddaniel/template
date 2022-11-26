function toggle_nav(etat){
    if(etat=='off'){
        document.querySelector('.nav-bar').classList.remove('inactive')
    }else{
        document.querySelector('.nav-bar').classList.add('inactive')
    }
    
}



const observer = new IntersectionObserver((entries)=>{
    
    for(const entry of entries){
        if(entry.target.classList.contains('indicator')){
            
            if(entry.isIntersecting){
                toggle_nav('off');
            }else{
                toggle_nav('on')
            }
        }
        //console.log(entry.isIntersecting)
        //document.querySelector('.nav-bar').classList.toggle('inactive')
    }
})


observer.observe(document.querySelector('.indicator'));

const observer1 = new IntersectionObserver((entries)=>{
    
    for(const entry of entries){
        
            
            if(entry.isIntersecting){
                entry.target.classList.add('apparaitre');
                // console.log(entry.target)
            }
        
        console.log(entry.isIntersecting)
        //document.querySelector('.nav-bar').classList.toggle('inactive')
    }
}, {
    threshold: 0.3
})
observer1.observe(document.querySelector("#skills"))
observer1.observe(document.querySelector("#promos"))
observer1.observe(document.querySelector("#event"))
observer1.observe(document.querySelector("#tarif"))