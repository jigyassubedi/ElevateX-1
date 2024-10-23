
// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// sticky navbar
$(window).scroll(function() {
    // Sticky navbar on scroll
    if (this.scrollY > 20) {
        $('.container-fluid').addClass("sticky");
    } else {
        $('.container-fluid').removeClass("sticky");
    }
    // Scroll-up button show/hide
    if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
    } else {
        $('.scroll-up-btn').removeClass("show");
    }
    
});
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    $('html').css("scrollBehavior", "auto");
});

// Typing text animation
$(document).ready(function() {
var typed = new Typed(".typing", {
    strings: ["ElevateX Academy"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
});


// Function to open the menu
function openNav() {
    document.getElementById("myNav").classList.add("menu_width");
    // Add event listener to close the menu when clicking outside
    document.addEventListener('click', closeMenuOnClickOutside);
}

// Function to close the menu
function closeNav() {
    document.getElementById("myNav").classList.remove("menu_width");
    // Remove the event listener after the menu is closed
    document.removeEventListener('click', closeMenuOnClickOutside);
}

// Function to close menu when clicking outside of it
function closeMenuOnClickOutside(event) {
    const menu = document.getElementById("myNav");
    if (!menu.contains(event.target) && !event.target.closest('.custom_menu-btn')) {
        closeNav();
    }
}

// Close the menu before navigating to another page
document.querySelectorAll('.overlay a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Close the menu
      closeNav();
  
      // Redirect after a short delay to allow menu closing animation to play
      setTimeout(() => {
        window.location.href = this.getAttribute('href'); // Navigate to the link
      }, 0); // Adjust the delay as needed to match your closing animation duration
    });
  });
  
 // Alphabet input: Only alphabets allowed
 const alphabetInput = document.getElementById('alphabetInput');
 alphabetInput.addEventListener('input', function() {
     this.value = this.value.replace(/[^a-z A-Z]/g, ''); // Remove non-alphabet characters
 });

 // Number input validation
 const numberInput = document.getElementById('numberInput');
 const errorText = document.getElementById('errorText');
 numberInput.addEventListener('input', function() {
     const value = this.value;
     const maxLength = parseInt(this.getAttribute('maxlength'));
     const minLength = 10;

     // Max length check
     if (value.length > maxLength) {
         this.value = value.slice(0, maxLength);
         errorText.textContent = 'Maximum 10 digits allowed !!!';
     } else if (value.length < minLength) {
         errorText.textContent = 'Minimum 10 digits required !!!';
     } else {
         errorText.textContent = '';
     }
 });

 // Email validation
 const emailInput = document.getElementById('emailInput');
 const emailValidationMessage = document.getElementById('emailValidationMessage');
 emailInput.addEventListener('input', function() {
     const email = this.value;
     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

     if (emailPattern.test(email)) {
         emailValidationMessage.textContent = '';
     } else {
         emailValidationMessage.textContent = 'Enter a valid email address !!!';
     }
 });

 //Toggle button 
 function toggleDetails(detailId, moreBtnId, lessBtnId) {
    const details = document.getElementById(detailId);
    const moreButton = document.getElementById(moreBtnId);
    const lessButton = document.getElementById(lessBtnId);

    // Check if the details are currently visible
    const isVisible = details.style.display === "block";

    // Toggle visibility of the details
    details.style.display = isVisible ? "none" : "block";

    // Toggle visibility of the buttons
    moreButton.style.display = isVisible ? "block" : "none";
    lessButton.style.display = isVisible ? "none" : "block";
}

// Initialize EmailJS
    (function() {
        emailjs.init("YQQQb2kW_E2VnhVLi");
    })();

    // Send email
    function sendMail(event) {
        event.preventDefault();

        const name = document.getElementById("alphabetInput").value;
        const email = document.getElementById("emailInput").value;
        const number = document.getElementById("numberInput").value;
        const subject = document.getElementById("subject").value;
        const message = document.querySelector("textarea").value;

        if (!name || !email || !number || !subject || !message) {
            alert("All fields are required.");
            return;
        }

        const maxLength = parseInt(numberInput.getAttribute('maxlength'));
        const minLength = 10;

        if (number.length < minLength || number.length > maxLength) {
            errorText.textContent = 'Number must be between 10 and ' + maxLength + ' digits!';
            return;
        }

        const templateParams = {
            alphabetInput: name,
            emailInput: email,
            numberInput: number,
            subject: subject,
            message: message
        };

        emailjs.send("service_izhlikr", "template_h8604xt", templateParams)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
            }, function(error) {
                console.error("FAILED...", error);
                alert("Message failed to send. Please try again.");
            });

        document.querySelector("form").reset();
    }

    document.getElementById("sendButton").addEventListener("click", sendMail);

    // Clean up the URL to remove unwanted elements like # and index.html
function cleanUpUrl() {
    const currentPath = window.location.pathname;
    
    // Create a new path by removing unwanted parts
    let newPath = currentPath.replace(/\/?(index|data|web)\.html/, "/").replace(/#.*$/, ""); // Removes the index.html, data.html, and any hash
    
    // Update the history state only if the cleaned path is different
    if (currentPath !== newPath) {
        window.history.replaceState(null, null, newPath);
    }
}

// Call the cleanup function on page load
document.addEventListener("DOMContentLoaded", cleanUpUrl);


window.onload = function() {
    // Show the banner when the page loads
    const bannerModal = document.getElementById('bannerModal');
    const closeBtn = document.getElementById('closeBtn');
    const overlay = document.getElementById('overlay');
    const enrollBtn = document.querySelector('.enroll-btn'); // Select the Enroll Now button

    bannerModal.style.display = 'block';
    overlay.style.display = 'block';

    // Close the banner when the close button is clicked
    closeBtn.onclick = function() {
        bannerModal.style.display = 'none';
        overlay.style.display = 'none';
    };

    // Close the banner and scroll to the contact section when Enroll Now is clicked
    enrollBtn.onclick = function(event) {
        event.preventDefault(); // Prevent the default anchor action
        bannerModal.style.display = 'none';
        overlay.style.display = 'none';

        // Scroll to the contact section
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Close the banner if user clicks outside of the banner
    overlay.onclick = function() {
        bannerModal.style.display = 'none';
        overlay.style.display = 'none';
    };
};

//Id sync smoothly and visible with title
document.addEventListener('DOMContentLoaded', function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the navbar height

    // Attach click event to all links with data-scroll="true"
    document.querySelectorAll('a[data-scroll="true"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href').substring(1); // Get the section ID
        const targetElement = document.getElementById(targetId); // Find the section

        if (targetElement) {
          // Calculate the scroll position with the offset
          const targetPosition = targetElement.offsetTop - navbarHeight;

          // Smooth scroll to the position
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });

  //loading animation
  window.onload = function () {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;

    // Simulate the progress of loading
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);  // Stop once complete
            document.getElementById("loader").style.display = "none"; // Hide loader
            document.getElementById("content").style.display = "block"; // Show content
        } else {
            width += 1;  // Increase progress bar width
            progressBar.style.width = width + '%';  // Update the progress bar's width
        }
    }, 30);  // Speed of loading
};

