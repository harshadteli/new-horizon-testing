 let selectedEvents = JSON.parse(sessionStorage.getItem("selectedEvents")) || [];

    function selectEvent(e, link) {
      let eventName = link.innerText;

      if (selectedEvents.includes(eventName)) {
        return true;
      }

      if (selectedEvents.length < 2) {
        selectedEvents.push(eventName);
        sessionStorage.setItem("selectedEvents", JSON.stringify(selectedEvents));
        return true;
      } else {
        e.preventDefault();
        showPopup();
        return false;
      }
    }

    function showPopup() {
      document.getElementById("popupOverlay").style.display = "flex";
    }

    function closePopup() {
      document.getElementById("popupOverlay").style.display = "none";
    }