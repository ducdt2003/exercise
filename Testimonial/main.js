const users = [
    {
        name: "trâm",
        quote: "This is an amazing experience! I learned so much.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        color: "blue"
    },
    {
        name: "Jane Smith",
        quote: "A very insightful course that helped me a lot!",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        color: "#8A2BE2"
    },
    {
        name: "Emily Johnson",
        quote: "The best learning experience I've ever had!",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        color: "#32CD32"
    },
    {
        name: "Sarah Lee",
        quote: "Loved every bit of this experience, highly recommend.",
        image: "https://randomuser.me/api/portraits/women/76.jpg",
        color: "#FFD700"
    },
    {
        name: "Michael Brown",
        quote: "This course exceeded my expectations in every way.",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        color: "#DC143C"
    }
];

const quoteText = document.querySelector('.text');
const authorName = document.querySelector('.name');
const authors = document.querySelectorAll('.author');
const testimonialsContainer = document.querySelector('.testimonials-container');

authors.forEach((author, index) => {
    author.addEventListener('click', () => {
        quoteText.textContent = users[index].quote;
        authorName.textContent = users[index].name;
        testimonialsContainer.style.background = users[index].color;

        authors.forEach(author, author.classList.remove('secleted'));
        author.classList.add('selected');
    });
});







// const quoteText = document.querySelector('.text');
// const authorName = document.querySelector('.name');
// const authors = document.querySelectorAll('.author');
// const testimonialsContainer = document.querySelector('.testimonials-container')

// authors.forEach((author, index) => {
//     author.addEventListener('click', () => {
//         quoteText.textContent = users[index].quote;
//         authorName.textContent = users[index].name;
//         testimonialsContainer.style.background = users[index].color;

//         authors.forEach( author => author.classList.remove('selected'));
//         author.classList.add('selected');
//     })
// })

















