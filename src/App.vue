<template>
  <div>
    <div id="product" v-for="product in products" :key="product.id">
      <div class="bg-putih">
        <div
          :class="{
            'bg-color men-color': product.category === 'men\'s clothing',
            'bg-color women-color': product.category === 'women\'s clothing',
          }"
        >
          <div class="overlay">
            <img src="./assets/bg-pattern.svg" alt="" />
          </div>
          <ProductDisplay
            pesan="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
            :product="product"
            @next-product="nextProductButtonPressed"
            :class="{
              'pages page-men': product.category === 'men\'s clothing',
              'pages page-women': product.category === 'women\'s clothing',
              'page-unavailable': ![
                'men\'s clothing',
                'women\'s clothing',
              ].includes(product.category),
            }"
          />
        </div>
      </div>
    </div>

    <!-- Page Unavailable Content -->
    <div v-if="!products.length && isPageUnavailable" class="normal">
      <div class="page-unavailable">
        <img class="sad-img" src="./assets/sad-face.svg" alt="" />
        <div class="page-btn">
          <p class="unav-text">This product is unavailable to show</p>
          <button
            type="button"
            @click="nextProductButtonPressed"
            class="next-un"
          >
            Next Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from "./components/ProductDisplay.vue";
import axios from "axios";

export default {
  name: "productDisplay",
  components: {
    ProductDisplay,
  },
  data() {
    return {
      products: [],
      currentIndex: 1,
      isPageUnavailable: false,
    };
  },
  methods: {
    setProducts(data) {
      if (data.length > 0) {
        const product = data[0];

        if (
          product.category === "men's clothing" ||
          product.category === "women's clothing"
        ) {
          this.products = [product];
          this.isPageUnavailable = false;
        } else {
          this.products = [];
          this.isPageUnavailable = true;
        }
      }
    },
    nextProductButtonPressed() {
      this.currentIndex += 1;

      // Kembali ke 1 jika sudah mencapai 20
      if (this.currentIndex > 20) {
        this.currentIndex = 1;
      }

      this.fetchProducts();
    },
    fetchProducts() {
      axios
        .get(`https://fakestoreapi.com/products/${this.currentIndex}`)
        .then((response) => this.setProducts([response.data]))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>
@import "./assets/style/page.css";
</style>
