document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed");
});

const prices = [200, 145, 640,200,350];

function onClick() {
    const current = document.getElementById('select');
    const count = document.getElementById('Count');
    let price = document.getElementById('result');
    if (/^\d+$/.test(count.value)) {
        price.value = prices[current.value] * count.value + '$';
    }
    else {
        alert('для ввода доступны только числа');
    }
}

const btn = document.getElementById('button');
btn.addEventListener('click', onClick);
