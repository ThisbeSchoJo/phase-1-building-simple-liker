// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll('.like-glyph')

const errorModal = document.querySelector('#modal')
const errorMessage = document.querySelector('#modal-message')

likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (likeButton.classList.contains('activated-heart')) {
      likeButton.textContent = EMPTY_HEART
      likeButton.classList.remove('activated-heart')
    } else {
      mimicServerCall()
      .then(() => {
        likeButton.textContent = FULL_HEART
        likeButton.classList.add('activated-heart')
      })
      .catch((error) => {
        errorMessage.textContent = error
        errorModal.classList.remove('hidden')
      
        setTimeout(() => {
          errorModal.classList.add('hidden')
        }, 3000)
      })
    }
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

