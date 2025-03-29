
drawUI();
function drawUI() {
    let leftPos = 800;
    let topPos = 100;
    let scale = 1.2;
    if (window.outerWidth <= 600) {
        leftPos = 500;
        topPos = 0;
        scale = 2;
    }

    const containerEl = document.getElementById('container');

    if (bgImage) {
        const bgEl = document.getElementById('background-image');
        bgEl.setAttribute('src', bgImage);
        bgEl.style.display = 'block';
    }

    console.log(data);

    let uiString = '';
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let itemUI = `
            <div class="data-item" id="item-${i}" style="top: ${topPos}px; left: ${leftPos * (i + 1)}px; transform: scale(${scale});">
                <div class="image-box">
                    <img class="image" src="${item.image}" />
                </div>

                <div class="cuboid">
                    <div class="face front" style="background: ${item.background};">
                        <div class="bar">
                            <div class="heading">${item.heading}</div>
                            <div class="text">${item.text}</div>
                        </div>
                    </div>
                    <div class="face back" style="background: ${item.background};"></div>
                    <div class="face right" style="background: ${item.background};">
                        <div class="bar">
                            <div class="heading">${item.heading}</div>
                            <div class="text">${item.text}</div>
                        </div>
                    </div>
                    <div class="face left" style="background: ${item.background};"></div>
                    <div class="face top" style="background: ${item.background};"></div>
                </div>
            </div>
        `;

        uiString += itemUI;
    }
    containerEl.innerHTML = uiString;

    setTimeout(() => {
        startAnimation();
    }, 3000);
}

function startAnimation() {
    const containerEl = document.getElementById('container');
    containerEl.style.transition = 'all 120s linear';
    containerEl.style.transform = `translateX(-${800 * data.length}px)`;

    scaleDownHanlder();
}

function scaleDownHanlder() {
    let scaleOn = 500;
    if(window.outerWidth <= 600) {
        scaleOn = 300;
    }
    
    const items = Array.from(document.getElementsByClassName("data-item"));
    setInterval(() => {
        items.forEach(item => {
            if (item.getBoundingClientRect().x < scaleOn) {
                item.classList.add('scale-down');
                item.style.transform = '';
            }
        })
    }, 100);
}