const images = [
"images/work1.jpg.jpeg",
"images/work2.jpg.jpeg",
"images/work3.jpg.jpeg",
"images/work4.jpg.jpeg",
"images/work5.jpg.jpeg",
"images/work6.jpg.jpeg",
"images/work7.jpg.jpeg",
"images/work8.jpg.jpeg",
"images/work9.jpg.jpeg",
"images/work10.jpg.jpeg",
"images/work11.jpg.jpeg",
"images/work12.jpg.jpeg",
"images/work13.jpg.jpeg",
"images/work14.jpg.jpeg",
"images/work15.jpg.jpeg",
"images/work16.jpg.jpeg",
"images/work17.jpg.jpeg",
"images/work18.jpg.jpeg",
"images/work19.jpg.jpeg",
"images/work20.jpg.jpeg",
"images/ac2b4160-a2be-4dad-ba97-1e2158f7dcae.jpg",
"images/b1c8e623-f9ce-457e-8808-36723ff9a5b9.jpg",
"images/e8105684-8aeb-4817-b6e8-909f6ab436dc.jpg",
"images/WhatsApp Image 2026-06-28 at 10.57.19 PM.jpeg",
"images/WhatsApp Image 2026-06-28 at 8.11.22 PM.jpeg",
"images/WhatsApp Image 2026-06-28 at 8.18.58 PM (1).jpeg"
];

const gallery = document.getElementById("galleryContainer");

// إنشاء نافذة التكبير مرة واحدة
const overlay = document.createElement("div");
overlay.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

const bigImg = document.createElement("img");
bigImg.style.cssText = `
max-width:90%;
max-height:90%;
border-radius:10px;
box-shadow:0 0 25px rgba(255,255,255,.3);
`;

const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.style.cssText = `
position:absolute;
top:20px;
right:30px;
color:#fff;
font-size:45px;
font-weight:bold;
cursor:pointer;
`;

overlay.appendChild(bigImg);
overlay.appendChild(closeBtn);
document.body.appendChild(overlay);

function closeViewer() {
    overlay.style.display = "none";
}

overlay.onclick = function(e) {
    if (e.target === overlay || e.target === closeBtn) {
        closeViewer();
    }
};

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeViewer();
    }
});

images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "أعمال كهربائي عمر";
    img.loading = "lazy";
    img.style.cursor = "pointer";

    img.addEventListener("click", function() {
        bigImg.src = src;
        overlay.style.display = "flex";
    });

    gallery.appendChild(img);
});
