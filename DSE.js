const star=document.querySelectorAll('.z');
star.forEach((e)=>{
            e.addEventListener('mouseover',s=>{
                s.target.classList.add('fa-2x');
            });
             e.addEventListener('mouseout',s=>{
                s.target.classList.remove('fa-2x');
            });
});