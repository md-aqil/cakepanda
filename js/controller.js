// $(function() {
	

// 	$('.exp-section div').addClass('default');
	
// 		$('.exp-section div').on('click', function() {
	
// 	  	var e = $('.exp-section > div');
// 			if(e.hasClass('expand')){
// 				 e.removeClass('expand');
// 			 	$(this).addClass('expand');
// 			} else { $(this).addClass('expand'); }
// 		})
// })

$(function() {
    $('.exp-section div').addClass('default');

    $('.exp-section div').hover(
        function() {
            $('.exp-section > div').removeClass('expand');
            $(this).addClass('expand');
        },
        function() {
            // This function is triggered when the mouse leaves the element
            // If you want any specific behavior on hover out, you can add it here
        }
    );
});


$('.faq-heading').click(function () {
  
  $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});


$(document).ready(function() {
  // Smooth scroll to section
  $('nav a.page').on('click', function(e) {
      e.preventDefault();
      var targetSection = $($(this).attr('href'));
      $('html, body').animate({
          scrollTop: targetSection.offset().top
      }, 1000); // Adjust the animation speed (in milliseconds) as needed
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const memes = document.querySelectorAll('.meme');

  function animateMeme(element) {
    gsap.to(element, {
      x: Math.random() * (window.innerWidth + element.clientWidth) - element.clientWidth,
      y: Math.random() * (window.innerHeight + element.clientHeight) - element.clientHeight,
      opacity: Math.random(),
      rotation: 30, // Adjust the rotation to a smaller angle
      duration: 10, // Make the entire animation slower (5 times)
      // repeat: -1,
      yoyo:true,
      onComplete: function() {
        gsap.set(element, { opacity: 0, rotation: 0 });

        gsap.to(element, {
          x: Math.random() * (window.innerWidth + element.clientWidth) - element.clientWidth,
          y: Math.random() * (window.innerHeight + element.clientHeight) - element.clientHeight,
          opacity: 1,
          rotation: 30, // Adjust the rotation for the appearance
          duration: 7, // Make the appearance slower (5 times)
          onComplete: function() {
            animateMeme(element);
          }
        });
      }
    });
  }

  memes.forEach(animateMeme);
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});




// particle effect 


const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

const imageUrls = ['./public/leaf.png', './public/leaf-b.png'];

class Particle {
  constructor(x, y, imageUrl) {
	this.x = x;
	this.y = y;
	this.image = new Image();
	this.image.src = imageUrl;
	this.size = 30; // Adjust the size as needed
	this.speedX = Math.random() * 3 - 1.5; // Adjust the speed as needed
	this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
	this.x += this.speedX;
	this.y += this.speedY;
	this.size -= 0.1; // Adjust the size decrease rate as needed
  }

  draw() {
	ctx.drawImage(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }
}

const particles = [];

function createParticle(e) {
  const xPos = e.clientX;
  const yPos = e.clientY;
  const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  const particle = new Particle(xPos, yPos, imageUrl);
  particles.push(particle);
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
	particles[i].update();
	particles[i].draw();

	if (particles[i].size <= 0.2) {
	  particles.splice(i, 1);
	  i--;
	}
  }

  requestAnimationFrame(animateParticles);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

document.addEventListener("mousemove", createParticle);
window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateParticles();


gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Initial setup
  const sections = document.querySelectorAll(".content-section");

  // GSAP timeline
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".cake-film",
      endTrigger: ".capa-section",
      start: "13% 10%", // Start when the top of the trigger is 10% from the top
      end: "bottom 50%", // End when the bottom of the trigger is 30% from the top
      scrub: 1,
      // markers: true,
    },
  });

  // Add animations to the timeline
  timeline.to(".panda1-box", {
    y: "100%", // Move the object along the y-axis to the center of the viewport
   
  });

  // Additional animation to move the panda1-box to the .capa-section
  timeline.to(".panda1-box", {
    y: "130%", // Move the object along the y-axis to the bottom of the viewport
   
  });
});


(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "01/26/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime();
  const x = setInterval(function() {    
    const now = new Date().getTime(),
          distance = countDown - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / day),
          hours = Math.floor((distance % day) / hour),
          minutes = Math.floor((distance % hour) / minute),
          seconds = Math.floor((distance % minute) / second);

    // Display two-digit format
    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

    // Do something later when the date is reached
    if (distance < 0) {
      document.getElementById("countdown").style.display = "none";
      document.getElementById("headline").innerText = "It's my birthday!";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
  }, 0);
})();



var odometer = new Odometer({ 
  el: $('.odometer')[0], 
  value: 1000, 
  theme: 'minimal',
  duration: 3000
});
odometer.render();

$('.odometer').text(995);