 /* === CONFIG SECTION === */
        const guideCommands = [
            { text: "👨‍💻 Who Participate", audio: "./PAGES/VOICE/participate.mp3", reply: "The participant from B.S.C.Comp(Entire),B.S.C,B.C.A,B.COM(C.A) can participation in this event." },
            { text: "📜 Rules and Regulations", audio: "./PAGES/VOICE/rules.mp3", reply: "To must be remember that the student can participate in maximum two events and other rules & regulations can see from main page." },
            { text: "🏆 Prizes", audio: "./PAGES/VOICE/prizes.mp3", reply: "Certificate of participation will be given to each participant.\n Prizes for each event:\n\n 🏆First Prize - Rs.2000/- + Trophy + Certificate.\n\n🏆 Second Prize - Rs.1500/- + Trophy + Certificate.\n\n 🏆Third Prize - Rs.1000/- + Trophy + Certificate" },
            { text: "📲 How to Register", audio: "./PAGES/VOICE/register.mp3", reply: "Follow the steps to registration the form \n\n1]Go to respective event that you can participate.\n 2]Click on the Registration button.\n 3]Fill up the form correctly and submit it.\n 4]Please wait for seconds to submitting the form.\n 5]Finally the form submitted successfully show message." },
            { text: "🏢 Contact us", audio: "./PAGES/VOICE/contact.mp3", reply: "Here I am showing the some contact number below that can contact us easily\n\nOffice Contact - (0231)2621187\n\nSmt Vaykul S.S - 8788997668\n\nSmt Deshmukh S.S - 9970849562\n\nSmt Ashtekar A.S - 9403498676." },
            { text: "💵 Help with Payment", audio: "./PAGES/VOICE/payment.mp3", reply: "To select the online or offline payment method in the form then according to you way  in case of online payment pay with 📲QR code scanner provided by account department on the pamlet through phone-pe or goggle-pay.\n Once you can pay the amount then take the screenshot & upload to google form. This form provided by account department & take the receipt of payment on event day." }
        ];

        /* === DOM ELEMENTS === */
        const aiCommandsContainer = document.getElementById("aiCommands");
        const aiChat = document.getElementById("aiChat");
        const aiGuidePanel = document.getElementById("aiGuidePanel");

        /* === INIT DEFAULT COMMAND BUTTONS === */
        guideCommands.forEach(cmd => {
            let btn = document.createElement("button");
            btn.className = "ai-command-btn";
            btn.innerText = cmd.text;
            btn.onclick = () => handleCommand(cmd);
            aiCommandsContainer.appendChild(btn);
        });

        /* === TOGGLE PANEL === */
        function toggleGuide() {
            aiGuidePanel.style.display = aiGuidePanel.style.display === "flex" ? "none" : "flex";
        }
        function closeGuide() {
            aiGuidePanel.style.display = "none";
        }

        /* === HANDLE COMMAND CLICK === */
        function handleCommand(cmd) {
            addMessage(cmd.text, "user");
            let audio = new Audio(cmd.audio);
            audio.play();
            setTimeout(() => {
                addMessage(cmd.reply, "bot");
            }, 800);
        }

        /* === ADD CHAT MESSAGE === */
        function addMessage(text, sender) {
            let msg = document.createElement("div");
            msg.className = `ai-msg ${sender}`;
            msg.innerText = text;
            aiChat.appendChild(msg);
            aiChat.scrollTop = aiChat.scrollHeight;
        }

        /* === ONE-TIME WELCOME MESSAGE === */
        window.addEventListener("load", () => {
            if (!localStorage.getItem("aiGuideWelcomeShown")) {
                let tooltip = document.createElement("div");
                tooltip.className = "ai-welcome-tooltip";
                tooltip.innerText = "Need any help? Just ask me! ⬇↘️";
                document.body.appendChild(tooltip);

                localStorage.setItem("aiGuideWelcomeShown", "true");

                setTimeout(() => {
                    tooltip.remove();
                }, 4000);
            }
        });