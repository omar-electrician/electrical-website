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
"images/work20.jpg.jpeg"
];

const gallery = document.getElementById("galleryContainer");

images.forEach(img => {
    gallery.innerHTML += `
        <img src="${img}" alt="أعمال كهربائي عمر" loading="lazy">
    `;
});
