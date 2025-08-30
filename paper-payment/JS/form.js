  const scriptURL =
            "https://script.google.com/macros/s/AKfycbxv_MU_Uk16YfCqFzLl_s1zSggVKPJ568ca3llrPOiND5AHiQUorg5jXbs_WcRxdkkBYg/exec";
        const form = document.forms["payment"];
        // const fileInput = document.getElementById("media");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            document.getElementById('loading-spinner').style.display = 'block';

            // Handle the file upload
            const fileInput = document.getElementById("media");
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const reader = new FileReader();

                // Size validation here, only less than 2MB allowed
                if (file.size > 1024 * 1024 * 2) {
                    swal("Error", "File size should be less than 2MB.", "error");
                    return;
                }

                reader.onload = async function () {
                    formData.append("media", reader.result.split(",")[1]); // Append base64 data
                    await submitForm(formData);
                };

                reader.readAsDataURL(file);
            } else {
                // No file uploaded
                await submitForm(formData);
            }
        });

        async function submitForm(formData) {
            // Get the submit button and change its text to "Loading..."
            const submitButton = document.querySelector("button[type='submit']");
            submitButton.disabled = true;
            submitButton.innerText = "Loading...";

            // Submit the form data to the Google Sheet
            fetch(scriptURL, { method: "POST", body: formData })
                .then((response) => {
                    swal("Done", "Submitted Successfully.", "success");

                    const uname = document.getElementById('userName').value.trim();
                    const f = fileInput.files[0];
                    if (!uname) { alert("Please enter your name"); return; }
                    if (!f) { alert("Please upload screenshot"); return; }
                    const reader = new FileReader();
                    reader.onload = ev => {
                        const now = new Date();
                        const st = {
                            uploaded: true,
                            name: uname,
                            txId: "NH" + Math.random().toString(36).substr(2, 6).toUpperCase(),
                            imageData: ev.target.result,
                            time: now.toISOString(),
                            timePretty: now.toLocaleString()
                        };
                        localStorage.setItem(LS_KEY, JSON.stringify(st));
                        //window.location.href = "success.html";
                    };
                    reader.readAsDataURL(f);

                    //form.reset();
                    setTimeout(() => {
                        window.location.href = "success.html"; // Change to your next page
                    }, 2000);
                })
                .catch((error) => {
                    swal("Error", "Something went wrong. Please try again!", "error");
                    document.getElementById('loading-spinner').style.display = 'none';

                })
                .finally(() => {
                    // Reset the submit button back to "Submit"
                    submitButton.disabled = false;
                    submitButton.innerText = "Submit";
                });
        }