const card = document.querySelectorAll('.card_item')
const arrow = document.querySelectorAll('.fa-angle-right');

// for (let i = 0; i <= card.length; i++) {

//     card[i].addEventListener('mouseover', function() {
//         arrow[i].style.visibility = 'visible';
//     })
// }
// for (let i = 0; i <= card.length; i++) {

//     card[i].addEventListener('mouseout', function() {
//         arrow[i].style.visibility = 'hidden';
//     })
// }
const cardmenu = document.querySelector('.card')

cardmenu.addEventListener('mouseover', function(e) {
    // console.log(e.target)
    if (e.target.className == "card_item") {
        e.target.children[1].classList.toggle('active');
    } else if (e.target.className == "left") {

        e.target.parentElement.nextElementSibling.classList.toogle('active');
    }
});

cardmenu.addEventListener('mouseout', function(e) {
    // console.log(e.target)
    if (e.target.className == "card_item") {
        e.target.children[1].classList.toggle('active');
    } else if (e.target.className == "left") {

        e.target.parentElement.nextElementSibling.classList.toogle('active');
    }
});