let sections = document.querySelectorAll('.reportBodyDiv > section');
let sectionsSub = document.querySelectorAll('section > section');
let navLinks = document.querySelectorAll('.mainTOC');
let navSubLinks = document.querySelectorAll('.subTOC');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.mainTOC[href*=' + id + ']').classList.add('active');
            });
        }
    });

sectionsSub.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if (top >= offset && top < offset + height) {
        navSubLinks.forEach(links => {
            links.classList.remove('activeSub');
            document.querySelector('.subTOC[href*=' + id + ']').classList.add('activeSub');
        });
    }
});
}
