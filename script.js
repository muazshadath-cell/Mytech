// ১ ডলার = ১২৪ টাকা ধরে (কারেন্সি কনভার্ট রেট)
const dollarRate = 124;

function updatePrice() {
    // সিলেক্ট করা ড্রপডাউনগুলোর এলিমেন্ট ধরা
    const cpu = document.getElementById("cpu-select");
    const mobo = document.getElementById("mobo-select");
    const ram = document.getElementById("ram-select");

    // দাম যোগ করা (ডলারে)
    const totalUSD = parseInt(cpu.value) + parseInt(mobo.value) + parseInt(ram.value);
    
    // টাকায় কনভার্ট করা
    const totalBDT = totalUSD * dollarRate;

    // স্ক্রিনে দাম আপডেট করা
    document.getElementById("total-usd").innerText = totalUSD;
    document.getElementById("total-bdt").innerText = totalBDT.toLocaleString('bn-BD');

    // সিলেক্ট করা পার্টসের নাম নিচে দেখানো
    document.getElementById("selected-cpu").innerText = cpu.options[cpu.selectedIndex].getAttribute('data-name');
    document.getElementById("selected-mobo").innerText = mobo.options[mobo.selectedIndex].getAttribute('data-name');
    document.getElementById("selected-ram").innerText = ram.options[ram.selectedIndex].getAttribute('data-name');
}

// চ্যাটবট অন/অফ করার লজিক
function toggleChat() {
    const chatWindow = document.getElementById("chat-window");
    chatWindow.classList.toggle("show");
}

// চ্যাটবটে মেসেজ পাঠানোর লজিক
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const text = userInput.value.trim();

    if (text === "") return;

    // ইউজারের মেসেজ চ্যাটে দেখানো
    chatBox.innerHTML += `<div class="bg-blue-100 text-right p-2 rounded ml-auto max-w-[80%]">${text}</div>`;
    userInput.value = ""; // ইনপুট বক্স খালি করা
    chatBox.scrollTop = chatBox.scrollHeight; // স্ক্রল নিচে নামানো

    // চ্যাটবটের রিপ্লাই লজিক (সিমুলেশন এআই)
    setTimeout(() => {
        let reply = "দুঃখিত, আমি ঠিক বুঝতে পারিনি। আপনি কি আপনার পিসি বা ফোনের বাজেট বলতে পারেন?";
        
        if (text.includes("বাজেট") || text.includes("টাকা") || text.includes("budget")) {
            reply = "আপনার বাজেটের জন্য সেরা কম্বিনেশন হবে: Intel i5 12th Gen প্রসেসর এবং একটি MSI H610M মাদারবোর্ড! আপনি এগুলো ওপরের পিসি বিল্ডারে সিলেক্ট করে মোট দাম দেখতে পারেন।";
        } else if (text.includes("ফোন") || text.includes("মোবাইল")) {
            reply = "আন্তর্জাতিক বাজার অনুযায়ী বর্তমানে সব ফোনের দাম আমাদের সাইটে লাইভ আছে। আপনি ওপরের মেনু থেকে মোবাইল প্রাইস সেকশনে দেখতে পারেন।";
        }

        chatBox.innerHTML += `<div class="bg-gray-200 p-2 rounded max-w-[80%]">🤖 ${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}