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
        'name': 'Road bike',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Race%20bike.JPG?alt=media&token=1fe45083-081d-4851-bcb9-37496756e4da',
        'description': 'Hasa R5 Road Bike Shimano Tourney 500 in black and yellow. Used condition, mechanically sound, runs perfectly. Several scratches on the frame and the handlebar. Comes with front- and backlight as well as a stand for the bike. Come and take it for a spin!',
        'prize': '25,000 Yen'
    },

    {
        'number': 1,
        'name': 'Bed elements',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Bed%20elements.JPG?alt=media&token=7eaae79d-b085-40d9-9ce6-c2ba1edc25a6',
        'description': 'Two elements that can be joint together on the bottom. H: 31cm, W/D: 98cm (1 element)',
        'prize': 'Free'
    },
    {
        'number': 2,
        'name': 'Bedside storage unit',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Bedside%20table.JPG?alt=media&token=09dd65a5-6e9a-4647-9344-31c0d3fa5779',
        'description': 'Lots of storage room on wheels, works well at the head or next to a bed. H:43, D:30cm, W: min. 102 (extendable)',
        'prize': 'Free'
    },
    {
        'number': 3,
        'name': 'Clothing rack (left)',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Clothes%20rack.JPG?alt=media&token=40e4ba7e-9578-4540-9236-c7820e6ac699',
        'description': 'Adjustable height of the two bars back and front, on wheels and lightweight. H: min. 105cm (adjustable) / W: 94cm / D: 38cm',
        'prize': 'Free'
    },
    {
        'number': 4,
        'name': 'Clothing rack (right), 2x',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Clothes%20rack.JPG?alt=media&token=40e4ba7e-9578-4540-9236-c7820e6ac699',
        'description': 'For jackets, bags etc. Can be taken apart for transport. H: 183cm',
        'prize': 'Free'
    },
    {
        'number': 5,
        'name': 'Desk and storage unit',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Desk%20and%20element.JPG?alt=media&token=0efb5443-bbbc-41f1-bc45-fa3b93170117',
        'description': 'Wood, excellent condition. Desk measurements: D: 40cm, H: 72cm, W: 100cm; Element: D: 40cm, H: 59.5cm, W: 41cm',
        'prize': 'Free'
    },
    {
        'number': 6,
        'name': 'E-piano Yamaha P-105',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/E-piano.JPG?alt=media&token=29f0ccec-0440-441f-8579-0968ceaf974b',
        'description': 'A classic among e-pianos. 88 weighted keyboard, comes with a pedal and a chair with adjustable height. W: 132 cm, D: 30cm, H: adjustable',
        'prize': '20,000 Yen'
    },
    {
        'number': 7,
        'name': 'Kotatsu table with blankets',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Kotatsu1.JPG?alt=media&token=73c06cc3-ec7c-4a9b-acd6-9687c8c6a6da',
        'description': 'Comes with two blankets, one to sit on, one cover. Keeps you warm in long, dark winter nights',
        'prize': 'Free'
    },
    {
        'number': 8,
        'name': 'Mirror',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Mirror.JPG?alt=media&token=ff8ddb47-82fb-4ced-a025-06e6283cbc8c',
        'description': 'Who is the fairest of them all?',
        'prize': 'Free'
    },
    {
        'number': 9,
        'name': 'Oven shelf',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Oven%20shelve.JPG?alt=media&token=425a671c-b925-4d1f-8599-cb99d033ebda',
        'description': 'Sturdy and width is adjustable. H:43, W: min. 40cm D: 37cm',
        'prize': 'Free'
    },
    {
        'number': 10,
        'name': 'Survival/First Aid Kit',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Survival%20Kit.JPG?alt=media&token=d8d0b6bc-2a4d-4008-ae87-49e0876f11e6',
        'description': 'Everything you need for outrunning an earthquake.',
        'prize': 'Free'
    },
    {
        'number': 11,
        'name': 'Table with two chairs and bench',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Table%2C%20chairs%2C%20bench.JPG?alt=media&token=f3ef2678-cddc-40da-88b5-d38c33e0081c',
        'description': 'Wood, excellent condition. Desk measurements: D: 40cm, H: 72cm, W: 100cm; Element: D: 40cm, H: 59.5cm, W: 41cm',
        'prize': 'Free'
    },
    {
        'number': 12,
        'name': 'Low table with chair',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Table_Low.JPG?alt=media&token=4612a7c1-f8ac-4e95-b70c-5e258644240a',
        'description': 'Angle of the back of the chair is adjustable. The perfect combo to relax or get some work done when you don’t have too much space',
        'prize': 'Free'
    },
    {
        'number': 13,
        'name': 'Book shelves L (2x)',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/book%20shelf%20L.JPG?alt=media&token=df93eaa9-783c-4889-be65-65c5b9e7780f',
        'description': '2 L-shaped book cases combined into a square. (Cause together, we are stronger!), D: 22cm, W/H: 53cm',
        'prize': 'Free'
    },
    {
        'number': 14,
        'name': 'TV (54inch) and TV unit (white)',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/TV%20and%20small%20unit%20(1).JPG?alt=media&token=2a6bb9c4-400b-4892-93cc-ffffb8ce1477',
        'description': 'TV and unit in excellent condition.',
        'prize': '20,000 for both together'
    },
    {
        'number': 15,
        'name': 'Air humidifier "Raydrop"',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Airhumidifier%20Drop.JPG?alt=media&token=e486c485-ca6d-4a8e-a121-afc2dbcd2aa7',
        'description': 'Perfect for dry winters, has an LED mode.',
        'prize': 'Free'
    },
    {
        'number': 16,
        'name': 'Containers 40l',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/DSC_0398.JPG?alt=media&token=fd72cf63-76f0-4f3b-90ed-85948e98078b',
        'description': 'Perfect for collecting your bottles, glass and aluminium. H: 53cm, D: 36cm, W: 23.5cm',
        'prize': 'Free'
    },
    {
        'number': 17,
        'name': 'Containers 70l',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Container2.JPG?alt=media&token=53bf0979-335b-4e32-8a4f-e15d27b601c9',
        'description': 'Perfect for collecting your bottles, glass and aluminium. H/D: 42cm, W:37cm',
        'prize': 'Free'
    },
    {
        'number': 18,
        'name': 'Heating tower',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Heating_Cooling%20tower.JPG?alt=media&token=9fce1e26-e956-4113-887c-5289d5e9dd8a',
        'description': 'Perfect alternative to an aircon - or the perfect addition to keep you warm in winter and help circulating the heavy summer air.',
        'prize': 'Free'
    },
    {
        'number': 19,
        'name': 'Rice dispenser',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Rice%20dispenser.JPG?alt=media&token=90b221db-1974-48cc-b99f-e772588cd841',
        'description': 'Holds up to 6 kg rice, with handy dispenser drawer.',
        'prize': 'Free'
    },
    {
        'number': 20,
        'name': 'Storage unit',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Storage%20unit.JPG?alt=media&token=6d11b6dc-399d-4dd0-809a-092209620896',
        'description': '3 drawers, perfect for smaller clothing items as socks, underwear etc.',
        'prize': 'Free'
    },
    
    {
        'number': 21,
        'name': 'Toolset wireless screwdriver',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Toolset%20electric%20Screwdriver.JPG?alt=media&token=f6de8065-6f60-4c6a-94c6-ff6e815c7c01',
        'description': 'Wireless screwdriver with multiple heads.',
        'prize': 'Free'
    },
    {
        'number': 22,
        'name': 'Toolset',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Toolset1.JPG?alt=media&token=c47cfc84-2b4c-49ee-8df4-a5a2256977e7',
        'description': '',
        'prize': 'Free'
    },
    {
        'number': 23,
        'name': 'Wireless iron and ironing mat',
        'url': 'https://firebasestorage.googleapis.com/v0/b/moveout-marketplace.appspot.com/o/Wireless%20iron%20and%20ironing%20mat.JPG?alt=media&token=49db2aae-e61f-48ed-aace-affe0f096a32',
        'description': 'Practical lightweight iron and rollable ironing mat.',
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
    newRevealDescription.textContent = 'Enter your name below if you would like to reserve the item, or be added to the waiting list! Please also contact us directly if you are the first person to claim this and/or any other object to arrange details.';
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


for(let i=0; i < itemDatabase.length; i++) {
    createAndAppend(itemDatabase[i]['url'], itemDatabase[i]['name'], itemDatabase[i]['description'], itemDatabase[i]['prize']);
}




