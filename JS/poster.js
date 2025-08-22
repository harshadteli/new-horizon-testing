const scriptURL = 'https://script.google.com/macros/s/AKfycbxrPqc2AYHZCjl4MizF0Urk6aswrZ2_sQoKauUhlrHpSIMTjF3jEYAZmuwL5n45Fjro/exec';
//   const form = document.forms['submit-to-google-sheet';
  const form = document.forms['poster-form'];

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Show loading spinner
    document.getElementById('loading-spinner').style.display = 'block';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        // Delay to let the user see the spinner before redirecting
        setTimeout(() => {
          window.location.href = "server1.html"; // Change to your next page
        }, 500);
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert('Something went wrong! Please try again.');
        document.getElementById('loading-spinner').style.display = 'none';
      });
  });

    document.getElementById('posterForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const student1 = document.getElementById('student1').value;

      // Store success flag in localStorage for homepage
      localStorage.setItem('posterRegistered', 'true');
      localStorage.setItem('posterStudent', student1);

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
      localStorage.setItem('posterSubmissionDate', formattedDate);

      

    });
