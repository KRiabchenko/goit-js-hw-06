const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);


itemEl.forEach(titel => {
    // console.log('Category: ', titel.firstElementChild.textContent)
    const titelEl = titel.querySelector('h2');
    console.log('Category: ', titelEl.textContent)

    const itemsList = titel.querySelectorAll('li');
    console.log('Elements: ', itemsList.length)

})


 

// const firstTitleEl = itemEl[0].firstElementChild.textContent;
// console.log('Category: ', firstTitleEl)

// const firstList = itemEl[0].children[1];

// const firstEl = firstList.children.length;
// console.log('Elements: ', firstEl)

// const secondTitleEl = itemEl[1].firstElementChild.textContent;
// console.log('Category: ', secondTitleEl)

// const secondList = itemEl[1].children[1];

// const secondEl = secondList.children.length;
// console.log('Elements: ', secondEl)

// const thirdTitleEl = itemEl[2].firstElementChild.textContent;
// console.log('Category: ', thirdTitleEl)

// const thirdList = itemEl[2].children[1];

// const thirdEl = thirdList.children.length;
// console.log('Elements: ', thirdEl)
