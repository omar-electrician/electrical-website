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

images.forEach(img => {
    gallery.innerHTML += `
        <img src="${img}" alt="أعمال كهربائي عمر" loading="lazy">
    `;
});
