const catalog = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  }
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  }
];

const ul = document.createElement('ul');

function render(maxPrice) {
  const filteredCatalog = maxPrice
  ? catalog.filter(({ price }) => price.slice(1) < maxPrice)
  : catalog;

  ul.innerHTML = filteredCatalog
  .map(({ name, price }) => `<li>${name} - ${price}</li>`)
  .join('');
}

document.body.appendChild(ul);
render();

document
.querySelector('#max-price')
.addEventListener('input', ({ target: { value } }) => {});

document
.querySelector('#in-stock-only')
.addEventListener('change', ({ target: { checked } }) => {});

document
.querySelector('#search')
.addEventListener('input', ({ target: { value } }) => {});

const price = 'b';

console.log(price.startsWith('b'));

console.log(price.startsWith('b', 'f', 'i', 'n'));

function removeItem() {
  const elem = document.getElementById('delete');
  elem.parentNode.removeChild(elem);
  return false;
}

function pageInit() {
  const btn = document.getElementById('btnRemoveItem');
  if (btn.addEventListener) {
    btn.addEventListener('click', removeItem, false);
  } else if (btn.attachEvent) {
    btn.attachEvent('onclick', removeItem);
  } else {
    btn.onclick = removeItem;
  }
}

document.getElementById('delete').addEventListener('click', e => {
  document.getElementById('item').remove();
});
