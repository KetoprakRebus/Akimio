document.querySelector('.tbl-biru').addEventListener('click', function(e){
  if(this.textContent === "Sign Up"){
    e.preventDefault();
    document.getElementById('signup-form').style.display = 'block';
    window.scrollTo({top: document.getElementById('signup-form').offsetTop, behavior: 'smooth'});
  }
});
