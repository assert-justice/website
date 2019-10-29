let navlinks = [
    ["Home","index.html"],
    ["About","about.html"],
];

let articles = [
    {
        title:"Cyberpunk",
        image:"../cyberpunk.jpg",
        excerpt:"What does post-post-cyberpunk look like?"
    }
]

function fillNav(){
    let nav = document.getElementById('nav');
    let navlinks = navlinks.map(function(a){
        return `<li><a href="${a[1]}">${a[0]}</a></li>`;
    });
    nav.innerHTML = `<ul>${navlinks.join('')}</ul>`;
}

fillNav();