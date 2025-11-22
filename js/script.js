const products = {
    casualShirts: [
        {
            img: "casualShirts/casualShirts1.jpg",
            brend: "LOUIS VUITTON",
            name: "Graphic Jacquard Long-Sleeved ",
            price: "76$",
            max:2
        },
        {
            img: "casualShirts/casualShirts2.jpg",
            brend: "Scuderia Ferrari",
            name: "Men's Motorsport Polo Shirt",
            price: "55$",
            max:8
        },
        {
            img: "casualShirts/casualShirts3.jpg",
            brend: "FENTY & PUMA",
            name: "Nylon Drill Top Pullover",
            price: "120$",
            max: 3
        },
        {
            img: "casualShirts/casualShirts4.jpg",
            brend: "C.F. Monterrey",
            name: "Men's Soccer Polo",
            price: "56$",
            max:2
        },
        {
            img: "casualShirts/casualShirts5.jpg",
            brend: "EA7",
            name: "LOGO SERIES COTTON",
            price: "65$",
            max:3
        },
    ],
    formalShirts: [
        {
            img: "formalShirts/formalShirts1.jpg",
            brend: "M&S Collection",
            name: "Regular Fit Ultimate",
            price: "40$",
            max:2
        },
        {
            img: "formalShirts/formalShirts2.jpg",
            brend: "WES FORMALS",
            name: "WES Formals White Checkered",
            price: "67$",
            max:5
        },
        {
            img: "formalShirts/formalShirts3.jpg",
            brend: "HUGO BOSS",
            name: "REGULAR-FIT T-SHIRT",
            price: "126$",
            max:10
        },
        {
            img: "formalShirts/formalShirts4.jpg",
            brend: "Nike",
            name: "Men's Hockey Jersey",
            price: "90$",
            max:7
        },
        {
            img: "formalShirts/formalShirts5.jpg",
            brend: "Adidas",
            name: "Adicolor Treffoil Tee",
            price: "45$",
            max:10
        },
    ],
    tShirts: [
       
        {
            img: "tShirts/tshirts2.webp",
            brend: "AMIRI",
            name: "MA Outline T-Shirt with Pocket",
            price: "79$",
            max:15
        },
        {
            img: "tShirts/tshirts3.webp",
            brend: "Palm Angels",
            name: "crew neck t-shirt",
            price: "112$",
            max:12
        },
        {
            img: "tShirts/tshirts4.webp",
            brend: "Casablanca",
            name: "La Medaille Print T-Shirt",
            price: "56$",
            max:5
        },
        {
            img: "tShirts/tshirts1.webp",
            brend: "Dolce & Gabbana",
            name: "T-shirt with logo",
            price: "98$",
            max:12
        },
    ],
    pants: [
        {
            img: "pants/pants1.webp",
            brend: "Tailor-detailed Trousers",
            name: "Future Classics",
            price: "68$",
            max:7
        },
        {
            img: "pants/pants2.webp",
            brend: "Relaxed Trousers",
            name: "Relaxed Trourses",
            price: "37$",
            max:6
        },
        {
            img: "pants/pants3.webp",
            brend: "Textured Striped Pants",
            name: "Textured Striped Pants",
            price: "70$",
            max:8
        },
        {
            img: "pants/pants4.webp",
            brend: "Pintuck Sweatpants",
            name: "Pintuk Sweatpants",
            price: "75$",
            max:7
        },
        {
            img: "pants/pants5.webp",
            brend: "Wide Leg Pants",
            name: "Textured Striped Pants",
            price: "138$",
            max:3
        },
    ],
    jeans: [
        {
            img: "jeans/jeans1.jpg",
            brend: "Jeans Irvine",
            name: "High waist jeans",
            price: "59$ ",
            max:4
        },
        {
            img: "jeans/jeans2.jpg",
            brend: "Jeans Montana",
            name: "High waist jeans met",
            price: "35$",
            max:8
        },
        {
            img: "jeans/jeans3.jpg",
            brend: "Jeans Maine",
            name: "Mid waist loose",
            price: "19$",
            max:9
        },
        {
            img: "jeans/jeans4.jpg",
            brend: "Jeans Tampa",
            name: "Mid waist jeans",
            price: "24$",
            max:3
        },
        {
            img: "jeans/jeans5.jpg",
            brend: "Jeans Montana",
            name: "Jeans with low",
            price: "36$",
            max:7
        },
    ],
    hoodie: [
        {
            img: "hoodie/hoodie1.webp",
            brend: "Nike",
            name: "AllSaints",
            price: "26$",
            max:9
        },
        {
            img: "hoodie/hoodie2.jpg",
            brend: "CharlieBrown & Snoopy",
            name: "PEANUTS Sweatshirt",
            price: "39$",
            max:12
        },
        {
            img: "hoodie/hoodie3.webp",
            brend: "AMI Paris",
            name: "Ami de Coeur",
            price: "59$",
            max:10
        },
        {
            img: "hoodie/hoodie4.webp",
            brend: "Redact",
            name: "AllSaints",
            price: "59$",
            max:12
        },
        {
            img: "hoodie/hoodie5.webp",
            brend: "AMI Paris",
            name: "Ami de Coeur",
            price: "25$",
            max:3
        },
    ]

}

const nav = document.querySelector(".nav")
const burgerMenu = document.querySelector(".burger_menu")
burgerMenu.onclick = () => { nav.classList.toggle("show") }


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 20 },
        480: { slidesPerView: 2, spaceBetween: 30 },
        640: { slidesPerView: 3, spaceBetween: 40 },
        940: { slidesPerView: 4, spaceBetween: 40 }
    },
    autoplay: { delay: 2000 },
    loop: true,
});


const categoryItems = [...document.querySelectorAll(".category_item")]
const productsContainer = document.querySelector(".section3_body")
const cartContainer = document.querySelector(".cart_container")
let cartItemsQuantity = document.querySelector(".cart_items__quantity")
let totalPriceValue = document.querySelector(".total_price_value")
const categorySelect = document.getElementById("select_category")


categorySelect.onchange = () => {
    createProducts(categorySelect.value)
    categoryItems.forEach(el => el.classList.remove("active"))
    const activeItem = categoryItems.find(item => item.getAttribute("data-category") === categorySelect.value)
    if(activeItem) activeItem.classList.add("active")
}


categoryItems.forEach(item => {
    item.onclick = () => {
        categoryItems.forEach(el => el.classList.remove("active"))
        let categoryName = item.getAttribute("data-category")
        createProducts(categoryName)
        item.classList.add("active")
    }
})


function createProducts(key) {
    let html = "";
    if (key !== "all") {
        let data = products[key];
        html = data.map(el => `
            <div class="product">
                <div class="product1">
                    <img src="images/${el.img}" alt="${el.name}" class="product_img">
                </div>
                <h3 class="product_brend">${el.brend}</h3>
                <p class="product_name">${el.name}</p>
                <p class="product_price">${el.price}</p>
                <button class="addToCartBtn" data-max="${el.max}">
                    <span><i class="fa fa-plus" aria-hidden="true"></i></span>
                    Add To Cart
                </button>
            </div>
        `).join("");
    } else {
        for (let category in products) {
            html += products[category].map(el => `
                <div class="product">
                    <div class="product1">
                        <img src="images/${el.img}" alt="${el.name}" class="product_img">
                    </div>
                    <h3 class="product_brend">${el.brend}</h3>
                    <p class="product_name">${el.name}</p>
                    <p class="product_price">${el.price}</p>
                    <button class="addToCartBtn" data-max="${el.max}">
                        <span><i class="fa fa-plus" aria-hidden="true"></i></span>
                        Add To Cart
                    </button>
                </div>
            `).join("");
        }
    }

    productsContainer.innerHTML = html;


    document.querySelectorAll(".addToCartBtn").forEach(btn => {
        btn.onclick = () => {
            const parent = btn.closest(".product");
            const name = parent.querySelector(".product_name").textContent;
            const maxQty = parseInt(btn.dataset.max);

            const sameProduct = [...cartContainer.children].find(
                el => el.querySelector(".cart_item_name").textContent === name
            );

            if(sameProduct) {
                const quantityElement = sameProduct.querySelector(".quantity");
                let quantityValue = +quantityElement.textContent;

                if(quantityValue < maxQty) {
                    quantityValue++;
                    quantityElement.textContent = quantityValue;
                    updatePrice();
                    showMessage(`${name} quantity increased`);
                } else {
                    alert(`Maximum ${maxQty} items allowed for ${name}`);
                }
            } else {
                createCartItems(parent, maxQty);
                showMessage(`${name} added to Cart`);
            }
        }
    })
}


function createCartItems(parent, maxQty) {
    const img = parent.querySelector(".product_img").src
    const name = parent.querySelector(".product_name").textContent
    const brend = parent.querySelector(".product_brend").textContent
    const price = parent.querySelector(".product_price").textContent

    cartContainer.innerHTML += `
        <div class="cart_item" data-max="${maxQty}">
            <img src="${img}" alt="" class="cart_img">
            <div>
                <h3 class="cart_item_brend">${brend}</h3>
                <p class="cart_item_name">${name}</p>
                <p class="cart_item_price">${price}</p>
            </div>
            <div class="cart_qunatityBox">
                <button class="quantity_minus">-</button>
                <span class="quantity">1</span>
                <button class="quantity_plus">+</button>
            </div>
            <span class="cart_item_delete"><i class="fa fa-trash" aria-hidden="true"></i></span>
        </div>
    `;

    updatePrice();
    updateQuantity();


    const deleteBtns = document.querySelectorAll(".cart_item_delete");
    deleteBtns.forEach(element => {
        element.onclick = () => {
            const parent = element.closest(".cart_item");
            parent.remove();
            updatePrice();
            updateQuantity();
        }
    });
}


cartContainer.addEventListener("click", function(event){
    const parent = event.target.closest(".cart_item");
    if(!parent) return;

    const quantityElement = parent.querySelector(".quantity");
    let quantityValue = +quantityElement.textContent;
    const maxQty = parseInt(parent.dataset.max);

    if(event.target.classList.contains("quantity_plus")) {
        if(quantityValue < maxQty) {
            quantityValue++;
            quantityElement.textContent = quantityValue;
        } else {
            alert(`Maximum ${maxQty} items allowed`);
        }
    } else if(event.target.classList.contains("quantity_minus") && quantityValue > 1) {
        quantityValue--;
        quantityElement.textContent = quantityValue;
    }

    updatePrice();
});


function updatePrice() {
    const cartItems = [...document.querySelectorAll(".cart_item")];  //spread
    let price = cartItems.map(el => {
        let price = +el.querySelector(".cart_item_price").textContent.replace("$","")
        let quantity = +el.querySelector(".quantity").textContent
        return price * quantity
    }).reduce((acc, el) => acc + el, 0)
    totalPriceValue.textContent = price;
}


function updateQuantity() {
    cartItemsQuantity.textContent = cartContainer.children.length;
}






































function showMessage(msg){
    const wrapper = document.querySelector(".wrapper")
    const messageElement = document.createElement("p")
    wrapper.prepend(messageElement)
    messageElement.textContent = msg
    messageElement.classList.add("message")
    setTimeout(()=>{ messageElement.remove() }, 1000)
}


const cartIcon = document.querySelector(".cart_icon")
const cart = document.querySelector(".cart")
cartIcon.onclick = () => cart.classList.toggle("show")


createProducts("all");



const loadMoreBtn = document.querySelector('.section3_btn');

loadMoreBtn.addEventListener('click', () => {
    alert('Wait for updates!');
    
    
});


const allCollectionBtn = document.querySelector('.section1_btn');
const section3 = document.getElementById('SHOPE');

allCollectionBtn.addEventListener('click', () => {
    section3.scrollIntoView({ behavior: 'smooth' });
});
