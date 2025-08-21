 function openModal() {
      document.getElementById('rulesModal').style.display = 'flex';
    }
    function openprizeModal() {
      document.getElementById('prizeModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('rulesModal').style.display = 'none';
    }
    function closeprizeModal() {
      document.getElementById('prizeModal').style.display = 'none';
    }

    function showLimitMessage() {
      const msg = document.getElementById("limitMessage");
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 3000);
    }

    let registeredEvents = JSON.parse(localStorage.getItem("registeredEvents")) || [];

    function registerEvent(button, eventKey) {
      registeredEvents = JSON.parse(localStorage.getItem("registeredEvents")) || [];

      if (registeredEvents.includes(eventKey)) {
        button.textContent = "✅ Already Registered";
        button.style.backgroundColor = "#28a745";
        button.disabled = true;
        return;
      }

      if (registeredEvents.length >= 2) {
        showLimitMessage();
        return;
      }

      registeredEvents.push(eventKey);
      localStorage.setItem("registeredEvents", JSON.stringify(registeredEvents));

      button.textContent = "✅ Registered";
      button.style.backgroundColor = "#28a745";
      button.disabled = true;
    }

    window.onload = function () {
      const registered = JSON.parse(localStorage.getItem("registeredEvents")) || [];

      const posterBtn = document.getElementById("posterBtn");
      const isPosterRegistered = localStorage.getItem("posterRegistered");
      const paperBtn = document.getElementById("paperBtn");
      const isPaperRegistered = localStorage.getItem("paperRegistered");
      const programBtn = document.getElementById("programBtn");
      const isProgramRegistered = localStorage.getItem("programRegistered");

      if (isPosterRegistered === "true") {
        posterBtn.textContent = "✅ Registered for Poster";
        posterBtn.style.backgroundColor = "#28a745";
        posterBtn.href = "./PAGES/server1.html";
        if (!registered.includes("poster")) {
          registered.push("poster");
          localStorage.setItem("registeredEvents", JSON.stringify(registered));
        }
      }
      if (isPaperRegistered === "true") {
        paperBtn.textContent = "✅ Registered for Paper";
        paperBtn.style.backgroundColor = "#28a745";
        paperBtn.href = "./PAGES/server2.html";
        if (!registered.includes("paper")) {
          registered.push("paper");
          localStorage.setItem("registeredEvents", JSON.stringify(registered));
        }
      }
      if (isProgramRegistered === "true") {
        programBtn.textContent = "✅ Registered for Programming Skills";
        programBtn.style.backgroundColor = "#28a745";
        programBtn.href = "./PAGES/server3.html";
        if (!registered.includes("program")) {
          registered.push("program");
          localStorage.setItem("registeredEvents", JSON.stringify(registered));
        }
      }

      // const eventButtons = {
      //   paper: document.querySelector("button[onclick*='paper']"),
      //   programming: document.querySelector("button[onclick*='programming']")
      // };

      // for (let key in eventButtons) {
      //   if (registered.includes(key)) {
      //     eventButtons[key].textContent = "✅ Registered";
      //     eventButtons[key].style.backgroundColor = "#28a745";
      //     eventButtons[key].disabled = true;
      //   }
      // }

      // Show modal only on first visit
      if (!localStorage.getItem("rulesShown")) {
        setTimeout(() => {
          openModal();
          localStorage.setItem("rulesShown", "true");
        }, 2000);
      }
    };

    window.onclick = function (event) {
      const modal = document.getElementById('rulesModal');
      if (event.target === modal) {
        closeModal();
      }
    };
    if (!localStorage.getItem("rulesShown")) {
      setTimeout(() => {
        openModal();
        localStorage.setItem("rulesShown", "true");
      }, 2000);
    }