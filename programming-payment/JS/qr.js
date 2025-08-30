 const LS_KEY = 'nh_payment_upload_v3';
    function readState() { try { return JSON.parse(localStorage.getItem(LS_KEY)) || { uploaded: false }; } catch (e) { return { uploaded: false }; } }

    function goUpload() {
      const st = readState();
      if (st.uploaded) window.location.href = "./PAGES/success.html";
      else window.location.href = "./PAGES/form.html";
    }
    (function applyHomeState() {
      const st = readState();
      const uploadBtn = document.getElementById('uploadBtn');
      const uploadStatus = document.getElementById('uploadStatus');
      if (st.uploaded) {
        uploadBtn.textContent = "IMG uploaded";
        uploadBtn.classList.remove("outline"); uploadBtn.classList.add("upload-state");
        uploadStatus.textContent = `Uploaded by ${st.name} at ${st.timePretty}`;
      }
    })();