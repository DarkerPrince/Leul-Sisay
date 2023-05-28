
   const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach(entry=>{
        console.log("Here one entery ", entry);
       if(entry.isIntersecting){
        entry.target.classList.add('show');
       }else{
        entry.target.classList.remove('show');
       }
    })
   });
  

   const hiddenElements  = document.querySelectorAll('.hidden');
   hiddenElements.forEach(el=>observer.observe(el))
