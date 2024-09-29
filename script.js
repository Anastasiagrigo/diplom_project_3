
// trailer
document.getElementById('playButton').addEventListener('click', function() { //selects the HTML element with the ID playButton + attaches an event listener/when the button is clicked, the function defined within the event listener will execute
    const video = document.getElementById('trailerVideo'); //This selects the video element with the ID 
    const subtitle = document.getElementById('trailerSubtitle');
    const buttonText = document.getElementById('buttonText');

    if (video.paused) { //checks if the video is currently paused
        video.play(); //if the video is paused, it starts playing the video.
        subtitle.style.display = 'none'; //Hides the subtitle
        buttonText.textContent = 'PAUSE'; //Changes the text of the button to "PAUSE" (it was play before)
    } else {
        video.pause();
        subtitle.style.display = 'none'; // Hides the subtitle/ if want to be seen = block
        buttonText.textContent = 'RESUME'; ////Changes the text of the button to "RESUME"
    }
});


//modal

const modal = document.querySelector('.modal');// creating variables by class and id
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.modal-close');
const buyNowButton = document.getElementById('buyNowButton');

// Function to open the modal
function openModal() { //The openModal function adds the class opened to both the modal and overlay elements.
    modal.classList.add('opened');
    overlay.classList.add('opened');
    document.body.style.overflow = 'hidden'; // to not scrool at the same time
}

// Function to close the modal
function closeModal() { //The closeModal function removes the opened class from both the modal and overlay. HIDE THE MODAL
    modal.classList.remove('opened');
    overlay.classList.remove('opened');
}

// Event listener for the "BUY NOW" button, to open the modal 
buyNowButton.addEventListener('click', openModal);

// Close the modal when the close button (x) is clicked
closeModalBtn.addEventListener('click', closeModal);

// Close the modal when clicking on the overlay/somewhere else, not only the x
overlay.addEventListener('click', closeModal);



//timer
// Set the date we're counting down to
const countDownDate = new Date("Oct 21, 2024 15:37:25").getTime(); //The getTime() method converts this date into milliseconds since January 1, 1970, which is the standard for date/time calculations in JavaScript.

// Update the count down every 1 second
const x = setInterval(function() {//repeating timer 

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now; //calculates the difference between the countdown date and the current time

  // Time calculations for days, hours, minutes, and seconds + let because changes
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));//The total milliseconds remaining is divided by the number of milliseconds in a day
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));//The remainder after calculating days is divided by the number of milliseconds in an hour.
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));//The remainder after calculating hours is divided by the number of milliseconds in a minute.
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);//The remainder after calculating minutes is divided by the number of milliseconds in a second.

  // Format numbers with leading zeros
  days = String(days).padStart(2, '0');//convert the calculated time values (days, hours, minutes, seconds) into strings and format them to ensure they have leading zeros if they are less than 10. This improves the display format, making it look consistent (e.g., "01" instead of "1").
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "  " + hours + "  "
  + minutes + " " + seconds + " ";

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);//function runs once every one second




//FAQ

//  select all elements with the class .faq_item_header.
const faqItems = document.querySelectorAll('.faq_item_header');

// Add click event to each item
faqItems.forEach(item => {//to go over each item in faqItems using the forEach method + For each item, it adds a click event listener. 
    item.addEventListener('click', function() {
        const parent = this.parentElement;//gets the parent element of the clicked header, which contains both the header and the content (the answer).
        const content = parent.querySelector('.faq_item_content');
        
        // If this item is already open, close it
        if (parent.classList.contains('opened')) {//The if statement checks if the parent element already has the class opened, indicating that the answer is currently visible.
            parent.classList.remove('opened');
            content.style.height = '0';//hide the answer
            content.style.opacity = '0';
        } else {//if not opened
            parent.classList.add('opened');//This line adds the class opened to the parent element of the clicked item., it means that now this item is in a 'open sate'
            content.style.height = content.scrollHeight + 'px';//to add the height 
            content.style.opacity = '1';//make it visible(css)
        }
    });
});

// Initialize Swiper/NEWS
const swiper = new Swiper('.swiper', {//This element will become the slider
    loop: true, // when the user reaches the last slide it will redo over all the slides/infini
    navigation: {
        nextEl: '.swiper-button-next',//The class for the button/arrow that navigates to the next slide.
        prevEl: '.swiper-button-prev',//The class for the button/arrow that navigates to the previous slide
    },
    slidesPerView: 1, // Number of slides to show at once, 1 slide at a time
    spaceBetween: 30, // Space between slides
});




document.addEventListener('DOMContentLoaded', function() {//This line sets up an event listener that waits for the DOM (Document Object Model) to be fully loaded before executing the enclosed function. This ensures that all HTML elements are available for manipulation.
    // Get checkbox element
    const checkbox = document.querySelector('.explore_checkbox');
    
    // Get the two sets of requirements lists
    const minimumList = document.getElementById('minimum');//retrieves two HTML elements
    const recommendedList = document.getElementById('recommended');// with the IDs minimum and recommended, storing them in minimumList and recommendedList, respectively.

    // Initially show the minimum requirements
    recommendedList.style.display = 'none';//Initial Display State: This section hides the recommended requirements list (recommendedList) and shows the minimum requirements list (minimumList) when the page loads.
    minimumList.style.display = 'block';

    // Add event listener for checkbox toggle
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // When checked (recommended)
            recommendedList.style.display = 'block';//If the checkbox is checked (this.checked is true), the recommended requirements list is displayed and the minimum list is hidden.
            minimumList.style.display = 'none';
        } else {
            // When unchecked (minimum)
            recommendedList.style.display = 'none';////If the checkbox is unchecked, the opposite happens: 
            minimumList.style.display = 'block';
        }
    });
});


document.getElementById('versionToggle').addEventListener('change', function() {
    const standardList = document.getElementById('standard');//id
    const limitedList = document.getElementById('limited');
    const switchTitles = document.querySelectorAll('.explore_switch_title');//class

    if (this.checked) {//If it is checked (i.e., the user wants the "limited" version), the code inside this block executes.
        standardList.style.display = 'none';//Hides the element that displays the standard requirements.
        limitedList.style.display = 'block';//Shows the element that displays the limited requirements.
        switchTitles[0].classList.remove('active');//Removes the 'active' class from the first title, likely indicating that it's not the currently selected version.
        switchTitles[1].classList.add('active');//add the 'active'
    } else {//f the toggle is not checked 
        standardList.style.display = 'block';//Shows the standard requirements.
        limitedList.style.display = 'none';//hides
        switchTitles[0].classList.add('active');//Adds the 'active' class
        switchTitles[1].classList.remove('active');//remove the 'active' class
    }
});

// burger

const burgerIcon = document.getElementById("burgerIcon");
const menuItems = document.getElementById("menuItems");

burgerIcon.addEventListener("click", () => {
  // Toggle the 'show' class on the parent div of the menu
  menuItems.classList.toggle("show");
});

