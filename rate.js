const userrate=document.querySelectorAll("i.stars");
let cur=0,sum=1,cnt=0;
db.collection('currentRating').get().then((snapshot)=>{
    sum=snapshot.docs[0].data().rating;
    cnt=snapshot.docs[0].data().count;
}).catch(err=>{
    console.log(err);
});
userrate.forEach(ele=>{
    ele.addEventListener("click",e=>{
        cur=e.target.id;
        e.target.style.color="red";
        cnt++;
        return;
    });
});
cur=cur/20;













