//api=AIzaSyCAXZXeBid_MbXJoGoZu6dAozbQiO9rAiI
//URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent"   -H "x-goog-api-key:AIzaSyCAXZXeBid_MbXJoGoZu6dAozbQiO9rAiI

document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatMessages = document.getElementById("chatMessages");
  const button = document.getElementById("sendButton");

  //Auto-resize the textarea
  userInput.addEventListener("input", () => {
    userInput.style.height = "auto";
    userInput.style.height = userInput.scrollHeight + "px";
  });

  chatForm.addEventListener("submit", async (e) => {
    //preveent the browser default
    e.preventDefault();

    const message = userInput.value.trim();
    if (!message) return;

    //todo: add user message to chat
    addMessage(message, true);

    //clear the input
    userInput.value = "";
    userInput.style.height = "auto";
    button.disabled = true;

    //todo: show typing
    const typingIndicator = showTypingIndicator();

    try {
      //TODO: generate response-function
      const response = await generateResponse(message);
      typingIndicator.remove();
      //add Ai response
      addMessage(response, false);
    } catch (error) {
      typingIndicator.remove();
      addErrormessage(error.message);
    } finally {
      button.disabled = false;
    }
  });

  //generate response
  async function generateResponse(prompt) {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=AIzaSyAPLJtZ4OPHBLrpMhWkKYlyEvye4BSAToM",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      },
    );
    if (!response.ok) {
      throw new Error("failed to generate the response");
    }
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  }

  //add user message to chat
  function addMessage(text, isUser) {
    const message = document.createElement("div");
    message.className = `message ${isUser ? "user-message" : ""}`;
    message.innerHTML = `
  <div class='avatar ${isUser ? "user-avatar" : ""}'>
    ${isUser ? "U" : "AI"}
  </div>
  <div class='message-content'>${text}</div>
`;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  //show indicator
  function showTypingIndicator() {
    const indicator = document.createElement("div");
    indicator.className = "message";
    indicator.innerHTML = `
    <div class='avatar'>AI</div>
    <div class='typing-indicator'>
    <div class="dot"></div>
    <div class="dot"></div>
   <div class="dot"></div>
    </div>
    `;
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return indicator;
  }

  //erroe message
  function addErrormessage(text) {
    const message = document.createElement("div");
    message.className = "message";
    message.innerHTML = `
    <div class='avatar'>AI</div>
    <div class='message-content' style="color:red">
    Error:${text}
    </div>
    `;
  }
});
