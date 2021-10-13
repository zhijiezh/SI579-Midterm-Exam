const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here
messageFeedback.innerText = `${50 - messageInput.value.length} characters left`
messageInput.addEventListener('input', (e)=>{
  if(e.target.value || e.target.value ===''){
    if(e.target.value.length<=50){
      messageFeedback.innerText = `${50 - e.target.value.length} characters left`
      if(messageInput.classList.contains("is-invalid")){
        messageInput.classList.remove("is-invalid")
      }
      if(messageFeedback.classList.contains("invalid-feedback")){
        messageFeedback.classList.remove("invalid-feedback")
      }
      messageInput.classList.add("is-valid");
      messageFeedback.classList.add("valid-feedback");
    }else{
      messageFeedback.innerText = `${e.target.value.length - 50} characters too long`
      if(messageInput.classList.contains("is-valid")){
        messageInput.classList.remove("is-valid")
      }
      if(messageFeedback.classList.contains("valid-feedback")){
        messageFeedback.classList.remove("valid-feedback")
      }
      messageInput.classList.add("is-invalid");
      messageFeedback.classList.add("invalid-feedback");
    }
    
  }
  
})