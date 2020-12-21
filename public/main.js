console.log('hello marketplace!');

// Hex colors: 
// eeeeee
// 686d76
// 373a40
// 19d3da




let itemGalleryEl = document.getElementById('galleryEl');
let testImgUrl = 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg';


// let passwordScreen = document.getElementById('password-screen');
// let password = 'testDoodle';
// let passwordSubmitted = false;

let itemDatabase = [
    {
        'number': 0,
        'name': '0. Road bike + items',
        'url': 'https://i.ibb.co/v1spKjn/RoadBike.jpg',
        'description': 'Hasa R5 Road Bike Shimano Tourney 500 in black and yellow. Used condition, mechanically sound, runs perfectly. Several scratches on the frame and the handlebar. Comes with front- and backlight, a case for your phone installed on the handlebar, a stand and a brand new pump.',
        'prize': '20,000 Yen'
    },
    {
        'number': 1,
        'name': '1. City bike',
        'url': 'https://i.ibb.co/FBJPYmY/CityBike.jpg',
        'description': 'Second-hand, good condition and mechanically sound. For a comfortable cruise through Tokyo.',
        'prize': '5,000 Yen'
    },
    {
        'number': 2,
        'name': '2. Bedside storage unit',
        'url': 'https://i.ibb.co/nMJW7bL/DSC-0340.jpg',
        'description': 'Lots of storage room on wheels, works well at the head or next to a bed. H:43, D:30cm, W: min. 102 (extendable)',
        'prize': 'Free'
    },
    {
        'number': 3,
        'name': '3. Bed elements',
        'url': 'https://i.ibb.co/0GQsnvm/Bed-Elements.jpg',
        'description': 'Two elements that can be joint together on the bottom. H: 31cm, W/D: 98cm (1 element)',
        'prize': 'Free'
    },
    {
    'number': 4,
    'name': '4. Clothing rack (on the left)',
    'url': 'https://i.ibb.co/MfR3Jb5/Clothing-rack.jpg',
    'description': 'Adjustable height of the two bars back and front, on wheels and lightweight. H: min. 105cm (adjustable) / W: 94cm / D: 38cm',
    'prize': 'Free'
    },
    {
    'number': 5,
    'name': '5. Clothing rack (on the right)',
    'url': 'https://i.ibb.co/MfR3Jb5/Clothing-rack.jpg',
    'description': 'There are two of these available (exactly the same); shaped a bit like a tree, white. Quite light. For jackets, bags etc. Can be taken apart for transport. H: 183cm',
    'prize': 'Free'
    },
    {
        'number': 6,
        'name': '6. E-piano Yamaha P-105',
        'url': 'https://i.ibb.co/wQyj1KC/E-Piano.jpg',
        'description': 'A classic among e-pianos. 88 weighted keyboard, comes with a pedal and a chair with adjustable height. W: 132 cm, D: 30cm, H: adjustable',
        'prize': '20,000 Yen'
    },
    {
        'number': 7,
        'name': '7. Kotatsu table with blankets',
        'url': 'https://i.ibb.co/b7xzzBs/Kotatsu-table.jpg',
        'description': 'Comes with two blankets, one to sit on, one cover. Keeps you warm in long, dark winter nights',
        'prize': 'Free'
    },
    {
        'number': 8,
        'name': '8. Mirror',
        'url': 'https://i.ibb.co/pQJWC8w/Mirror.jpg',
        'description': 'Who is the fairest of them all?',
        'prize': 'Free'
    },
    {
        'number': 9,
        'name': '9. Hammock',
        'url': 'https://i.ibb.co/JRyKBR2/Hammock.jpg',
        'description': 'For a relaxing time, make it hammock time. Has two width modes, one for sitting and one for lying and lounging.',
        'prize': '2,000 Yen'
    },
    {
        'number': 10,
        'name': '10. Survival/First Aid Kit',
        'url': 'https://i.ibb.co/C8zXgst/First-Aid-Kit.jpg',
        'description': 'Everything you need for outrunning an earthquake.',
        'prize': 'Free'
    },
    {
        'number': 11,
        'name': '11. Table with two chairs and bench',
        'url': 'https://i.ibb.co/d6LQrGy/Table-and-chairs.jpg',
        'description': 'Wood, excellent condition. Desk measurements: D: 40cm, H: 72cm, W: 100cm; Element: D: 40cm, H: 59.5cm, W: 41cm',
        'prize': 'Free'
    },
    {
        'number': 12,
        'name': '12. Low table with chair',
        'url': 'https://i.ibb.co/WsCBSnx/Low-table-and-chair.jpg',
        'description': 'Angle of the back of the chair is adjustable. The perfect combo to relax or get some work done when you don’t have too much space',
        'prize': 'Free'
    },
    {
        'number': 13,
        'name': '13. Book shelves L (2x)',
        'url': 'https://i.ibb.co/dJBw5DT/Book-shelves.jpg',
        'description': '2 L-shaped book cases combined into a square. (Cause together, we are stronger!), D: 22cm, W/H: 53cm',
        'prize': 'Free'
    },
    {
        'number': 14,
        'name': '14. TV (54inch) and TV unit (white)',
        'url': 'https://i.ibb.co/D1VRDwp/TV-and-small-unit-1.jpg',
        'description': 'TV and unit in excellent condition.',
        'prize': '20,000 Yen for both together'
    },
    {
        'number': 15,
        'name': '15. Air humidifier "Raydrop"',
        'url': 'https://i.ibb.co/d6XdQD0/Airhumidifier-Drop.jpg',
        'description': 'Perfect for dry winters, has an LED mode.',
        'prize': 'Free'
    },
    {
        'number': 16,
        'name': '16. Containers 40l',
        'url': 'https://i.ibb.co/LxHq4c6/DSC-0398.jpg',
        'description': 'Perfect for collecting your bottles, glass and aluminium. H: 53cm, D: 36cm, W: 23.5cm',
        'prize': 'Free'
    },
    {
        'number': 17,
        'name': '17. Containers 70l',
        'url': 'https://i.ibb.co/2j7qgGv/Container2.jpg',
        'description': 'Perfect for collecting your bottles, glass and aluminium. H/D: 42cm, W:37cm',
        'prize': 'Free'
    },
    {
        'number': 18,
        'name': '18. Heating tower',
        'url': 'https://i.ibb.co/Y7vRSn7/Heating-Cooling-tower.jpg',
        'description': 'Perfect alternative to an aircon - or the perfect addition to keep you warm in winter and help circulating the heavy summer air.',
        'prize': 'Free'
    },
    {
        'number': 19,
        'name': '19. Rice dispenser',
        'url': 'https://i.ibb.co/GPM4qHD/Rice-dispenser.jpg',
        'description': 'Holds up to 6 kg rice, with handy dispenser drawer.',
        'prize': 'Free'
    },
    {
        'number': 20,
        'name': '20. Storage unit',
        'url': 'https://i.ibb.co/qm1XgtM/Storage-unit.jpg',
        'description': '3 drawers, perfect for smaller clothing items.',
        'prize': 'Free'
    },
    
    {
        'number': 21,
        'name': '21. Toolset wireless screwdriver',
        'url': 'https://i.ibb.co/zGn6WCf/Toolset-electric-Screwdriver.jpg',
        'description': 'Wireless screwdriver with multiple heads.',
        'prize': 'Free'
    },
    {
        'number': 22,
        'name': '22. Toolset',
        'url': 'https://i.ibb.co/hHYx9cc/Toolset1.jpg',
        'description': '',
        'prize': 'Free'
    },
    {
        'number': 23,
        'name': '23. Wireless iron and ironing mat',
        'url': 'https://i.ibb.co/T02tpZK/Wireless-iron-and-ironing-mat.jpg',
        'description': 'Practical lightweight iron and rollable ironing mat.',
        'prize': 'Free'
    },
    {
        'number': 24,
        'name': '24. Desk and storage unit',
        'url': 'https://i.ibb.co/L92N3cf/Desk-and-storage-element.jpg',
        'description': 'Wood, excellent condition. Desk measurements: D: 40cm, H: 72cm, W: 100cm; Element: D: 40cm, H: 59.5cm, W: 41cm',
        'prize': 'Free'
    },
    {
        'number': 25,
        'name': '25. Volleyball',
        'url': 'https://i.ibb.co/pPMFLp4/Volleyball.jpg',
        'description': 'Mikasa FIVB approved indoor volleyball.',
        'prize': 'Free'
    },
    {
        'number': 26,
        'name': '26. Oven shelf',
        'url': 'https://i.ibb.co/XJJBXgT/Oven-shelf.jpg',
        'description': 'Sturdy and width is adjustable. H:43, W: min. 40cm D: 37cm',
        'prize': 'Free'
    },
]

// let allUrl = [
//     'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg',
//     'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Bed%20elements.JPG?alt=media&token=7eaae79d-b085-40d9-9ce6-c2ba1edc25a6',
// ]

// let allTitles = [
//  'title1',
//  'title2',
// ];

// let allDescriptions = [
//  'descr1',
//  'descr2',

// ];

// let allPrizes = [
//  'prize1',
//  'prize2',
 
// ];






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
    let newPrizeText = document.createElement('p');
    let newPrize = document.createElement('span');
    
    // create card-reveal and associated elements
    let newCardReveal = document.createElement('div');
    let newRevealTitle = document.createElement('span');
    let newCloseIcon = document.createElement('i');
    let newRevealDescription = document.createElement('p');
    // let newClaimInput = document.createElement('input');

    // attach their main/class attributes and text
    newCol.classList.add('col');
    newCol.classList.add('s12');
    newCol.classList.add('m6');
    newCard.classList.add('card');
    newCardimage.classList.add('card-image', 'activator');
    newImage.setAttribute('src', url);
    newImage.setAttribute('class', "activator");
    newCardcont.classList.add('card-content', 'activator');
    newCardtitle.classList.add('card-title', 'activator');
    newCardtitle.textContent += itemTitle;
    newDescription.classList.add('description', 'activator');
    newDescription.textContent += itemDescription;
    newPrizeText.innerHTML += 'Prize: ';
    newPrizeText.appendChild(newPrize);
    newPrize.classList.add('prize', 'activator');
    newPrize.textContent += itemPrize;
    newCardReveal.classList.add('card-reveal');
    newRevealTitle.classList.add('card-title', 'grey-text', 'text-darken-4');
    newCloseIcon.classList.add('material-icons', 'right');
    newCloseIcon.textContent += 'close';
    newRevealDescription.textContent = 'Enter your name in the associated Google sheet if you would like to reserve the item, or add yourself to the waiting list! Please also contact us directly if you are the first person to claim this and/or any other object to arrange details.';
    // newClaimInput.classList.add('claim-input');
    // newClaimInput.setAttribute('type', 'text');
    // 

    // *********************
    // attach elements to each other to build item structure

    // card image
    newCardimage.appendChild(newImage);
    // card content
    newCardcont.appendChild(newCardtitle);
    newCardcont.appendChild(newDescription);
    newCardcont.appendChild(newPrizeText);
    // card reveal
    newRevealTitle.appendChild(newCloseIcon);
    newCardReveal.appendChild(newRevealTitle);
    newCardReveal.appendChild(newRevealDescription);
    // newCardReveal.appendChild(newClaimInput);

    // append the above to card
    newCard.appendChild(newCardimage);
    newCard.appendChild(newCardcont);
    newCard.appendChild(newCardReveal);

    // attach card to column
    newCol.appendChild(newCard);

    // finally, attach column to item gallery!
    itemGalleryEl.appendChild(newCol);
}


for(let i=0; i < itemDatabase.length; i++) {
    createAndAppend(itemDatabase[i]['url'], itemDatabase[i]['name'], itemDatabase[i]['description'], itemDatabase[i]['prize']);
}




