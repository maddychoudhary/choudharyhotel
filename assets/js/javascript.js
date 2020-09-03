//preloader-start;
let loader=document.querySelector(".preloader")
function loading(){
	loader.style.display="none";
}
//preloader-end;

//navigation-start;
let bar=document.getElementById("fas fa-bars");
let time=document.getElementById("fas fa-times");
let mobile_slider=document.getElementById("mobile_slider");

function showBar(){
	bar.style.display="none";
	time.style.display="block";
	mobile_slider.style.display="block";
}

function showTime(){
	bar.style.display="block";
	time.style.display="none";
	mobile_slider.style.display="none";
}

bar.addEventListener("click",showBar);
time.addEventListener("click",showTime);
//navigation-end;

//banner-start;
let slider=document.querySelector(".sliders").children;
let prevSlide=document.querySelector(".prev");
let nextSlide=document.querySelector(".next");
let indicator=document.querySelector(".indicate")
let index=0;


function prevSlider(){
	if(index==0){
		index=slider.length-1;
	}else{
		index--;
	}
	for(let i=0; i<slider.length; i++){
		slider[i].classList.remove("active");
	}
	slider[index].classList.add("active");
	updateCircleIndicate();
}




function nextSlider(){
	if(index==slider.length-1){
		index=0;
	}else{
		index++;
	}
	for(let i=0; i<slider.length; i++){
		slider[i].classList.remove("active");
	}
	slider[index].classList.add("active");
	updateCircleIndicate();
}


setInterval(autoSlider,4000);
function autoSlider(){
	if(index==slider.length-1){
		index=0;
	}else{
		index++;
	}
	for(let i=0; i<slider.length; i++){
		slider[i].classList.remove("active");
	}
	slider[index].classList.add("active");
	updateCircleIndicate();
}


function circleIndicate(){
	for(i=0; i<slider.length; i++){
     var newIndicateElement=document.createElement("div");
     var newIndicateText=document.createTextNode(i+1);
     newIndicateElement.appendChild(newIndicateText);
     if(i==0){
     	newIndicateElement.className="active";
     }
    indicator.appendChild(newIndicateElement);

 }
    
}
circleIndicate();





function updateCircleIndicate(){
	for(let i=0; i<slider.length; i++){
		indicator.children[i].classList.remove("active");
	}
	indicator.children[index].classList.add("active");
}


prevSlide.addEventListener("click",prevSlider);
nextSlide.addEventListener("click",nextSlider);
//banner-end;

//gallery-section-start;
let navi=document.querySelector(".gallery_navigation").children;
let all=document.getElementById("all_room");
let double=document.getElementById("double_room");
let premium=document.getElementById("premium_room");
let deluxe=document.getElementById("deluxe_room");
let family=document.getElementById("family_room");

let allGallery=document.getElementById("gallery_all_rooms");
let doubleGallery=document.getElementById("gallery_double_rooms");
let premiumGallery=document.getElementById("gallery_premium_rooms");
let deluxeGallery=document.getElementById("gallery_deluxe_rooms");
let familyGallery=document.getElementById("gallery_family_rooms");

function allRoom(){
    allGallery.style.display="block";
    doubleGallery.style.display="none";
    premiumGallery.style.display="none";
    deluxeGallery.style.display="none";
    familyGallery.style.display="none";

      let index=0;
    for(let i=0; i<navi.length; i++){
    	navi[i].classList.remove("active");
    }
    navi[index].classList.add("active");
}

function doubleRoom(){
	allGallery.style.display="none";
    doubleGallery.style.display="block";
    premiumGallery.style.display="none";
    deluxeGallery.style.display="none";
    familyGallery.style.display="none";
    let index=1;
    for(let i=0; i<navi.length; i++){
    	navi[i].classList.remove("active");
    }
    navi[index].classList.add("active");

}

function premiumRoom(){
	allGallery.style.display="none";
    doubleGallery.style.display="none";
    premiumGallery.style.display="block";
    deluxeGallery.style.display="none";
    familyGallery.style.display="none";

      let index=2;
    for(let i=0; i<navi.length; i++){
    	navi[i].classList.remove("active");
    }
    navi[index].classList.add("active");
}

function deluxeRoom(){
	allGallery.style.display="none";
    doubleGallery.style.display="none";
    premiumGallery.style.display="none";
    deluxeGallery.style.display="block";
    familyGallery.style.display="none";

      let index=3;
    for(let i=0; i<navi.length; i++){
    	navi[i].classList.remove("active");
    }
    navi[index].classList.add("active");
}

function familyRoom(){
	allGallery.style.display="none";
    doubleGallery.style.display="none";
    premiumGallery.style.display="none";
    deluxeGallery.style.display="none";
    familyGallery.style.display="block";

      let index=4;
    for(let i=0; i<navi.length; i++){
    	navi[i].classList.remove("active");
    }
    navi[index].classList.add("active");
}

all.addEventListener("click",allRoom);
double.addEventListener("click",doubleRoom);
premium.addEventListener("click",premiumRoom);
deluxe.addEventListener("click",deluxeRoom);
family.addEventListener("click",familyRoom);
//gallery-section-end;


//blog-section-start;
let blogSlider=document.querySelector(".customer_container").children;
let blogPrev=document.querySelector(".blog_prev");
let blogNext=document.querySelector(".blog_next");
let blogIndicater=document.querySelector(".blog_indicater");
let blogIndex=0;

setInterval(blogAuto,2500);

function blogAuto(){
    if(blogIndex>=blogSlider.length-1){
        blogIndex=0;
    }else{
        blogIndex++;
    }
    for(i=0; i<blogSlider.length; i++){
        blogSlider[i].classList.remove("active");
    }
    blogSlider[blogIndex].classList.add("active");

     updateBlogCircle();
}


function prevBlogSlide(){
   if(blogIndex==0){
      blogIndex=blogSlider.length-1
   }else{
    blogIndex--;
   }
   for(let i=0; i<blogSlider.length; i++){
    blogSlider[i].classList.remove("active");
   }
   blogSlider[blogIndex].classList.add("active");

    updateBlogCircle();
}


function nextBlogSlide(){
    if(blogIndex==blogSlider.length-1){
        blogIndex=0;
    }else{
        blogIndex++;
    }
    for(let i=0; i<blogSlider.length; i++){
        blogSlider[i].classList.remove("active");
    }
    blogSlider[blogIndex].classList.add("active");

    updateBlogCircle();
}


function blogCircle(){
    for(let i=0; i<blogSlider.length; i++){
     let newBlogElement=document.createElement("div");
     if(i==0){
        newBlogElement.className="active"
     }
     blogIndicater.appendChild(newBlogElement);
    }
}
blogCircle();

function updateBlogCircle(){
    for(let i=0; i<blogSlider.length; i++){
        blogIndicater.children[i].classList.remove("active");
    }
    blogIndicater.children[blogIndex].classList.add("active");
}

blogPrev.addEventListener("click",prevBlogSlide);
blogNext.addEventListener("click",nextBlogSlide);
//blog-section-end;

//footer-form-section-start;
function formValidate(){
  //username validation;
  let name=document.getElementById("user_name").value;
  let name_check=/^[A-Za-z. ]{4,30}$/;
  if(name_check.test(name)){
    document.getElementById("name_error").innerHTML="";
  }else{
    document.getElementById("name_error").innerHTML="**user name is invalid !";
    return false;
  }

  //email validation;
  let email=document.getElementById("user_email").value;
  let email_check=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if(email_check.test(email)){
    document.getElementById("email_error").innerHTML="";
  }else{
    document.getElementById("email_error").innerHTML="** please fill the valid email id !";
    return false;
  }

  //phone number validation;
  let phone=document.getElementById("user_phone").value;
  let phone_check=/^\d{10}$/;
  if(phone_check.test(phone)){
    document.getElementById("phone_error").innerHTML="";
  }else{
    document.getElementById("phone_error").innerHTML="** please fill the valid phone number !";
    return false;
  }


  //password validation;
  let password=document.getElementById("user_password").value;
  let password_check=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if(password_check.test(password)){
    document.getElementById("password_error").innerHTML="";
  }else{
    document.getElementById("password_error").innerHTML="** incorrect password !";
    return false;
  }


  //confirm password validation;
  let confirm_password=document.getElementById("user_canfirm_password").value;
  if(confirm_password.match(password)){
    document.getElementById("canfirm_password_error").innerHTML="";
  }else{
    document.getElementById("canfirm_password_error").innerHTML="** don't match password !";
    return false;
  }

}


//footer-form-section-end;