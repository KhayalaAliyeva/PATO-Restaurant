window.addEventListener("scroll",()=>{
   if (window.scrollY >= 50) {
      document.querySelector(".menu-header").classList.add("menu-header-scroll");
        // document.querySelector(".navigation-item").classList.add(".navigation-item-scroll");
        document.querySelector(".logo").innerHTML=`
        <a href="index.html"><img  src="./assets/image/logo2.png.webp" alt="logo-2"></a>
       `;
      
  } else {
   document.querySelector(".menu-header").classList.remove("menu-header-scroll");
    //    document.querySelector(".navigation-item").classList.remove(".navigation-item-scroll");
       document.querySelector(".logo").innerHTML=`
       <a href="index.html"><img  src="./assets/image/logo-1.webp" alt="logo-1"></a>
       `
  }
  if(window.scrollY >=150){
    document.querySelector("#myBtn").classList.add("flex");
  }
  else{
    document.querySelector("#myBtn").classList.remove("flex");
  }
});
// back-to-top
document.querySelector("#myBtn").addEventListener("click",()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }); 
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
});
// show sidebar-menu
document.querySelector("#show-sidebar").addEventListener("click",()=>{
  document.querySelector(".sidebar").classList.add("active-sidebar");
});
// remove sidebar-menu
window.addEventListener("mousedown",(e)=>{
  if(e.target == document.querySelector(".sidebar")){
    document.querySelector(".sidebar").classList.remove("active-sidebar");
  }
});

document.querySelector(".close-btn").addEventListener("click",()=>{
  document.querySelector(".sidebar").classList.remove("active-sidebar");
});

// swiper
const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
     clickable: true,
   },
    
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
  
   on: {
    slideChange: function () {
      // console.log("change")
      console.log(this.activeIndex);
      // addAnimation();
      let introduction=document.querySelector("#introduction-swiper")
      let introductionSlide1= introduction.querySelector(".slide1");
      let introductionSlide2= introduction.querySelector(".slide2");
      let introductionSlide3= introduction.querySelector(".slide3");

      let event=document.querySelector("#event");
      let eventSlide1=event.querySelector("#slide1");
      let eventSlide2=event.querySelector("#slide2");
      let eventSlide3=event.querySelector("#slide3");


      let review=document.querySelector("#review");
      let reviewSlides=review.querySelectorAll(".slide");
      let reviewImg=review.querySelectorAll("figure");
      let reviewContent=review.querySelectorAll(".content-review");
  
      if(this.activeIndex == 1|| this.activeIndex == 4){
        
        introductionSlide3.classList.remove("slide3animation");
        introductionSlide1.classList.add("slide1animation");
        // introductionSlide3.classList.remove("slide3animation");

        eventSlide1.classList.add("event1-animation");
        eventSlide3.classList.remove("event3-animation");
      
      }
      if(this.activeIndex == 2){
        
        introductionSlide1.classList.remove("slide1animation");
        introductionSlide2.classList.add("slide2animation");

        eventSlide2.classList.add("event2-animation");
        eventSlide1.classList.remove("event1-animation");
      }
      if(this.activeIndex == 3){
        
        introductionSlide2.classList.remove("slide2animation");
        introductionSlide3.classList.add("slide3animation");

        eventSlide3.classList.add("event3-animation");
        eventSlide2.classList.remove("event2-animation");
      }
      reviewImg[this.activeIndex].classList.add("review-img-animation");
      reviewContent[this.activeIndex].classList.add("review-content-animation")
      
  
      
    },
  },
   
 });
//  const introduction=document.querySelector("#introduction-swiper")
// const introductionSlide1= introduction.querySelector(".slide1");
// const introductionSlide2= introduction.querySelector(".slide2");
// const introductionSlide3= introduction.querySelector(".slide3");
      
//  function addAnimation(){
//   if(swiper.activeIndex===1|| swiper.activeIndex==4){
//     introductionSlide1.classList.add("slide1animation");
//     introductionSlide2.classList.remove("slide2animation");
//     introductionSlide3.classList.remove("slide3animation");

//   }
//   if(swiper.activeIndex===2){
//     introductionSlide2.classList.add("slide2animation");
//     introductionSlide1.classList.remove("slide1animation");
//     introductionSlide3.classList.remove("slide3animation");
//   }
//   if(swiper.activeIndex===3){
//     introductionSlide3.classList.add("slide3animation");
//     introductionSlide2.classList.remove("slide2animation");
//     introductionSlide1.classList.remove("slide1animation");
//   }

//  }

//  swiper-item animations

// const introduction=document.querySelector("#introduction-swiper")
      // const introductionSlide1= introduction.querySelector(".slide1");
      // const introductionSlide2= introduction.querySelector(".slide2");
      // const introductionSlide3= introduction.querySelector(".slide3");
      // introductionSlide1.classList.add("slide1animation");
      // introductionSlide2.classList.add("slide2animation");
      // introductionSlide3.classList.add("slide3animation");
      // document.querySelector("#intro-slide1").classList.add("slide1animation");








//video
document.querySelector(".play-btn").addEventListener("click",()=>{
  document.querySelector("#play-video").classList.add("show");
})
document.querySelector("#close-video").addEventListener("click",()=>{
  document.querySelector("#play-video").classList.remove("show");
})

// upcoming events
  function countdown(deadline){
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = deadline - now;
    if (distance < 0) {
      // let finish=`

      // `
    }
    else{
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      return{
        days,
        hours,
        minutes,
        seconds,
      }
    }
    
  };
  function showCountdown(){
    let date1= new Date("Nov 21, 2022 20:00:0").getTime();
    let countdownInfo=`
      <li>
        <span class="days number">${countdown(date1).days}</span> 
        <span class="time">days</span>
      </li>
        <li>
          <span class="hours number">${countdown(date1).hours}</span>
          <span class="time">Hours</span>
      </li>
        <li>
          <span class="minutes number">${countdown(date1).minutes}</span>
          <span class="time">Minutes</span>
      </li>
        <li>
          <span class="seconds number">${countdown(date1).seconds}</span>
          <span class="time">Seconds</span>
      </li>
      `;
      return countdownInfo;

  }
  setInterval(()=>{
    document.querySelector("#countdown1").innerHTML=showCountdown();
    document.querySelector("#countdown2").innerHTML=showCountdown();
    document.querySelector("#countDown3").innerHTML=showCountdown();

  },1000)



 
  // gallery-sidebar
  const gallerySidebar=document.querySelectorAll(".item-gallery-sidebar");
  const showPhotoSidebar=document.querySelector(".show-photo-sidebar");
  const closeIconSidebar=showPhotoSidebar.querySelector(".close-icon");
  const previewImgSidebar=showPhotoSidebar.querySelector(".preview-img");
  const currentImgSidebar=showPhotoSidebar.querySelector(".current-img");
  const totalImgSidebar=showPhotoSidebar.querySelector(".total-img");

    for(let i=0; i < gallerySidebar.length; i++){
      totalImgSidebar.textContent=gallerySidebar.length;
      let newIndex = i;
      let clickImgIndex;
      gallerySidebar[i].addEventListener("click",()=>{
        clickImgIndex=newIndex;
        console.log(i);
        showPhotoSidebar.classList.add("show-photo-active-sidebar");
        function preview(){
          currentImgSidebar.textContent=newIndex+1;
          let selectedImgUrl=gallerySidebar[newIndex].querySelector("img").src;
          previewImgSidebar.src=selectedImgUrl;
          // console.log(selectedImgUrl);
        };
        const prevBtn=showPhotoSidebar.querySelector(".prev");
        // console.log(showPhoto.querySelector(".prev"));
        const nextBtn=showPhotoSidebar.querySelector(".next");
        if(newIndex==0){
          prevBtn.style.display="none";
        }
        if(newIndex >= gallery.length-1){
          nextBtn.style.display="none";
        }
        prevBtn.addEventListener("click",()=>{
          newIndex--;
          if(newIndex==0){
            preview();
            prevBtn.style.display="none";
          }else{
            preview();
            nextBtn.style.display="block";
          }
        });
        nextBtn.addEventListener("click",()=>{
          newIndex++;
          if(newIndex >= gallery.length-1){
            preview();
            nextBtn.style.display="none";
          }else{
            preview();
            prevBtn.style.display="block";
          }
        });
        
        preview();
        closeIconSidebar.addEventListener("click",()=>{
          newIndex=clickImgIndex;
          prevBtn.style.display="block";
          nextBtn.style.display="block";
          showPhotoSidebar.classList.remove("show-photo-active-sidebar");
        });
    });
  };
  

   ///gallery-footer
  // const footerGallery=document.querySelector("#gallery-footer");
  const gallery=document.querySelectorAll(".item-gallery-footer");
  const showPhoto=document.querySelector(".show-photo");
  const closeIcon=showPhoto.querySelector(".close-icon");
  const previewImg=showPhoto.querySelector(".preview-img");
  const currentImg=showPhoto.querySelector(".current-img");
  const totalImg=showPhoto.querySelector(".total-img");


  for(let i=0; i < gallery.length; i++){
      totalImg.textContent=gallery.length;
      let newIndex = i;
      let clickImgIndex;
      gallery[i].addEventListener("click",()=>{
        clickImgIndex=newIndex;
        console.log(i);
        showPhoto.classList.add("show-photo-active");
        function preview(){
          currentImg.textContent=newIndex+1;
          let selectedImgUrl=gallery[newIndex].querySelector("img").src;
          previewImg.src=selectedImgUrl;
          // console.log(selectedImgUrl);
        };
        const prevBtn=showPhoto.querySelector(".prev");
        // console.log(showPhoto.querySelector(".prev"));
        const nextBtn=showPhoto.querySelector(".next");
        if(newIndex==0){
          prevBtn.style.display="none";
        }
        if(newIndex >= gallery.length-1){
          nextBtn.style.display="none";
        }
        prevBtn.addEventListener("click",()=>{
          newIndex--;
          if(newIndex==0){
            preview();
            prevBtn.style.display="none";
          }else{
            preview();
            nextBtn.style.display="block";
          }
        });
        nextBtn.addEventListener("click",()=>{
          newIndex++;
          if(newIndex >= gallery.length-1){
            preview();
            nextBtn.style.display="none";
          }else{
            preview();
            prevBtn.style.display="block";
          }
        });
        
        preview();
        closeIcon.addEventListener("click",()=>{
          newIndex=clickImgIndex;
          prevBtn.style.display="block";
          nextBtn.style.display="block";
          showPhoto.classList.remove("show-photo-active");
        });
    });
  };


  // reservation
  const baseUrl = "http://localhost:9000";
  document.querySelector("#reserve-Btn").addEventListener("click",()=>{
    let date= document.querySelector("#date").value.trim();
    let time= document.querySelector("#time").value.trim();
    let people= document.querySelector("#people").value.trim();
    let name= document.querySelector("#name").value.trim();
    let phone= document.querySelector("#phone").value.trim();
    let email= document.querySelector("#email").value.trim();
    let reservationData;
    if(date=="" ||time =="" ||people==""||name==""||phone==""||email==""){
      swal({
        // title: "Good job!",
        text: "You don't add all information",
        icon: "warning",
        button: "Ok",
      });
    }else{
    reservationData={
        date:date,
        time:time,
        people:people,
        name:name,
        phone:phone,
        email:email,
      }
      swal({
        title: "Are you sure?",
        text: "Are you sure all information is true?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((create) => {
        if (create) {
          fetch(`${baseUrl}/create-data`,{
                method:"Post",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(reservationData),
              })
              .then((response) => response.json())
              .then((json) => console.log(json));
          swal("Poof! You have successfully made a reservation", {
            icon: "success",
          });
        } else {
          swal("Please try again to make a reservation");
        }
      });
      
    }
    document.querySelector("#date").value="";
    document.querySelector("#time").value="";
    document.querySelector("#people").value="";
    document.querySelector("#name").value="";
    document.querySelector("#phone").value="";
    document.querySelector("#email").value="";
    
  })
 
  
