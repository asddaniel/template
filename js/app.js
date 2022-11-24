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
        console.log(entry.isIntersecting)
        //document.querySelector('.nav-bar').classList.toggle('inactive')
    }
})


observer.observe(document.querySelector('.indicator'));