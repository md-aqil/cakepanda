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