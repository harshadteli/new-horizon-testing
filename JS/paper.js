 //Google App Script for the Paper-Registration form
 const scriptURL = 'https://script.google.com/macros/s/AKfycbyTKLpizNG4tPKtrNjVOwDGzmcYrDx8-LSRVbLmIf5o4KR7wUxGoMoyxARWrad0iMkhxA/exec';
//   const form = document.forms['submit-to-google-sheet';
  const form = document.forms['paper-form'];

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Show loading spinner
    document.getElementById('loading-spinner').style.display = 'block';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        // Delay to let the user see the spinner before redirecting
        setTimeout(() => {
          window.location.href = "server2.html"; // Change to your next page
        }, 500);
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert('Something went wrong! Please try again.');
        document.getElementById('loading-spinner').style.display = 'none';
      });
  });

   document.getElementById('paperForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const student1 = document.getElementById('student1').value;



      // Store success flag in localStorage for homepage
      localStorage.setItem('paperRegistered', 'true');
      localStorage.setItem('paperStudent', student1);

      // Store formatted submission date & time
      const now = new Date();
      const formattedDate = now.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      localStorage.setItem('paperSubmissionDate', formattedDate);
    });