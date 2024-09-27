
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(() => {
        loader.classList.add('hidden');
        content.classList.remove('hidden');
        content.classList.add('visible');
        
        document.querySelector('.landing-page')
        

        // Set up Intersection Observer
        setupIntersectionObserver();
    }, 100); // Adjust this time as needed
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});

const zero = document.querySelectorAll('.zero');
zero.forEach((el) => observer.observe(el));