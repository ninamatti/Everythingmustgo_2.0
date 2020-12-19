console.log('hello marketplace!');

// Hex colors: 
// eeeeee
// 686d76
// 373a40
// 19d3da




let itemGalleryEl = document.getElementById('galleryEl');
let testImgUrl = 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg'

let password = 'testDoodle';
let passwordSubmitted = false;



let allUrl = [
    'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg',
    'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg'
]

let allTitles = [
 'title1',
 'title2',
];

let allDescriptions = [
 'descr1',
 'descr2',

];

let allPrizes = [
 'prize1',
 'prize2',
 
];






function createAndAppend(url, itemTitle, itemDescription, itemPrize) {
    // create one item:

    // create column, card, card-image, image elements
    let newCol = document.createElement('div');
    let newCard = document.createElement('div');
    let newCardimage = document.createElement('div');
    let newImage = document.createElement('img');

    // create card-content, card-title, description, prize elements
    let newCardcont = document.createElement('div');
    let newCardtitle = document.createElement('span');
    let newDescription = document.createElement('p');
    let newPrize = document.createElement('p');
    
    // create card-reveal and associated elements
    let newCardReveal = document.createElement('div');
    let newRevealTitle = document.createElement('span');
    let newCloseIcon = document.createElement('i');
    let newRevealDescription = document.createElement('p');
    let newClaimInput = document.createElement('input');

    // attach their main/class attributes and text
    newCol.classList.add('col');
    newCol.classList.add('s6');
    newCol.classList.add('16');
    newCard.classList.add('card');
    newCardimage.classList.add('card-image', 'activator');
    newImage.setAttribute('src', url);
    newImage.setAttribute('class', "activator");
    newCardcont.classList.add('card-content', 'activator');
    newCardtitle.classList.add('card-title', 'activator');
    newCardtitle.textContent += itemTitle;
    newDescription.classList.add('description', 'activator');
    newDescription.textContent += itemDescription;
    newPrize.classList.add('prize', 'activator');
    newPrize.textContent += itemPrize;
    newCardReveal.classList.add('card-reveal');
    newRevealTitle.classList.add('card-title', 'grey-text', 'text-darken-4');
    newCloseIcon.classList.add('material-icons', 'right');
    newCloseIcon.textContent += 'close';
    newRevealDescription.textContent += 'Enter your name below if you would like to reserve the item!';
    newClaimInput.classList.add('claim-input');
    newClaimInput.setAttribute('type', 'text');
    // 

    // *********************
    // attach elements to each other to build item structure

    // card image
    newCardimage.appendChild(newImage);
    // card content
    newCardcont.appendChild(newCardtitle);
    newCardcont.appendChild(newDescription);
    newCardcont.appendChild(newPrize);
    // card reveal
    newRevealTitle.appendChild(newCloseIcon);
    newCardReveal.appendChild(newRevealTitle);
    newCardReveal.appendChild(newRevealDescription);
    newCardReveal.appendChild(newClaimInput);

    // append the above to card
    newCard.appendChild(newCardimage);
    newCard.appendChild(newCardcont);
    newCard.appendChild(newCardReveal);

    // attach card to column
    newCol.appendChild(newCard);

    // finally, attach column to item gallery!
    itemGalleryEl.appendChild(newCol);
}


for(let i=0; i < allTitles.length; i++) {
    createAndAppend(allUrl[i], allTitles[i], allDescriptions[i], allPrizes[i]);
}



// inputlistener that changes gallery display to 'visible' if correct password is submitted
