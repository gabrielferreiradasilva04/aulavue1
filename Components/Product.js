app.component('product-display', {
    setup(){
        //propriedades computadas
        const product_title = "T-Shirt";
        const brand = "Marconyu";

        const titleWithBrand = computed(() => {
            return product_title + " " + brand;
        });

        const inStok = (112);

        const inStokComputed = computed(() => {
            if (inStok > 10) {
                return "In Stok"
            } else if (inStok <= 10 && inStok > 0) {
                return "Almost out of Stok"
            } else {
                return "Out of Stok"
            }
        });

        // propriedades computadas 


        const image = ref("./assets/images/t-shirt-blue.png");
        const changeImage = (variantImage) => {
            image.value = variantImage;
        };

        return {
            image,
            titleWithBrand,
            details: ["50% Cotton", "30% Polister", "20% wool"],
            variants: [
                {
                    id: 1,
                    color: "blue",
                    image: "./assets/images/t-shirt-blue.png",
                },
                {
                    id: 2,
                    color: "green",
                    image: "./assets/images/t-shirt-green.png",
                },
            ],

            changeImage,
            inStokComputed,
        };

    },
    template:
        ` <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="img_product" />
          </div>
          <div class="product-info">
            <h1>{{ titleWithBrand }}</h1>
            <p> {{ inStokComputed }} </p>
            <ul>
              <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div
              v-for="variant in variants"
              :key="variant.id"
              @mouseover="changeImage(variant.image)"
              class="color-circle"
              :style="{backgroundColor:variant.color}"
            ></div>
            <button
              class="button"
              :class="{disabledButton : inStok < 1}"
              @click="$emit('add-to-cart')"
              :disabled="inStok < 1"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>`

})