const scriptURL = 'https://script.google.com/macros/s/AKfycbwemWfSxbadmyhYfVGkor5OFhBj5kLawOyKmxBnM1BkkfQbLEP-pDKsDakx11dCd7Yj/exec';
    //   const form = document.forms['submit-to-google-sheet';
    const form = document.forms['program-form'];

    form.addEventListener('submit', e => {
      e.preventDefault();

      // Show loading spinner
      document.getElementById('loading-spinner').style.display = 'block';

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          console.log('Success!', response);
          // Delay to let the user see the spinner before redirecting
          setTimeout(() => {
            window.location.href = "server3.html"; // Change to your next page
          }, 500);
        })
        .catch(error => {
          console.error('Error!', error.message);
          alert('Something went wrong! Please try again or Contact us.');
          document.getElementById('loading-spinner').style.display = 'none';
        });
    });
  
    document.getElementById('programForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const student1 = document.getElementById('student1').value;

      // Store success flag in localStorage for homepage
      localStorage.setItem('programRegistered', 'true');
      localStorage.setItem('programStudent', student1);

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
      localStorage.setItem('programSubmissionDate', formattedDate);


    });