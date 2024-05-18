

/*========== Mixitup Filter ==========*/
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    }
});


/* Active work */

const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));


/*========== Testimonials Swiper  ==========*/
var testiSwiper = new Swiper(".testimonial__container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


/*========== Contact Form ==========*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if(
    contactName.value === '' || 
    contactEmail.value === '' || 
    Message.value === ''
  ) 
    {
      // add and remove color 
      contactMessage.classList.remove('color-light');
      contactMessage.classList.add('color-dark');

      //show message
      contactMessage.textContent = 'Write all the input fields';
    } else {
      //serviceID - templateID - #form - publickey
      emailjs
        .sendForm(
        'service_8zf4uar', 
        'template_jjqzstb',
        '#contact-form',
        '7bSAmSL4a_v5xfnVZ'
        )
      .then(() => {
        // show message and add color
        contactMessage.classList.add('color-light');
        contactMessage.textContent = 'Message sent ✅';

        //remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
      },
      (error) => {
        alert('OOPs! SOMETHING WHENT WRONG', error);
      }
    );
    // clear the form
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';

  }
};

contactForm.addEventListener('submit', sendEmail);

/*========== Scroll to the top ==========*/
  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

