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



var swiper = new Swiper('.swiper-loop', {
  loop: true,
  autoplay: {
    delay: 1,
  },
  freeMode: true,
  speed: 5000,
  slidesPerView: "auto",
  spaceBetween: 60,
  breakpoints: {
    1400: {
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: true,
     },
     320: {
        slidesPerView: 1,
        spaceBetween: 20,
     },
   }
   
});

$(".swiper-loop").hover(function () {
  (this).swiper.autoplay.stop();
}, function () {
  (this).swiper.autoplay.start();
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
      dayMonth = "03/20/",
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

    // Display two-digit format with a colon after days
    document.getElementById("days").innerText = String(days).padStart(2, "0") + " :";
    document.getElementById("hours").innerText = String(hours).padStart(2, "0") + " :";
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0") + " :";
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

   
  }, 0);
})();



$(document).ready(function () {
  // Initialize the Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If "whitelist-container" is in the viewport, start the animation
        animateOdometer();
        observer.unobserve(entry.target); // Stop observing once triggered
      }
    });
  });

  // Target the "whitelist-container" element
  const whitelistContainer = document.querySelector('.whitelist-container');
  observer.observe(whitelistContainer);

  // Function to animate the odometer
  function animateOdometer() {
    var odometer = new Odometer({ 
      el: $('.odometer')[0], 
      value: 993, 
      theme: 'minimal',
      duration: 5000
    });
    odometer.render();

    // Set the desired value
    $('.odometer').text(993);
  }
});



function hideMarquee() {
  document.querySelector('.stripbar').style.display = 'none';
}

function copyToClipboard() {
  // Create a temporary input element
  var tempInput = document.createElement("input");
  // Assign the Ethereum address to its value
  tempInput.value = "0xE13288c36f5a792d95e1091bA603959d82085B2b";
  // Append it to the DOM
  document.body.appendChild(tempInput);
  // Select the text in the input
  tempInput.select();
  // Copy the selected text
  document.execCommand("copy");
  // Remove the temporary input
  document.body.removeChild(tempInput);
  // Provide some visual feedback (optional)
  alert("Address copied to clipboard: 0xE13288c36f5a792d95e1091bA603959d82085B2b");
}



// JavaScript to shake the element every 40 seconds
function shakeElement() {
  var element = document.querySelector('.element');
  element.classList.add('shake-effect');
  setTimeout(function() {
    element.classList.remove('shake-effect');
  }, 500); // Duration of the shake animation
}

// Call shakeElement initially
shakeElement();

// Call shakeElement every 40 seconds
setInterval(shakeElement, 4000); // 40 seconds
