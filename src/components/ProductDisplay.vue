<template>
  <div class="produk">
    <div>
      <img class="image" :src="product.image" alt="" />
    </div>
    <div class="content-kebawah">
      <h1>{{ product.title }}</h1>

      <div class="category">
        <p>{{ product.category }}</p>
        <div class="rating">
          <div>{{ product.rating.rate }}/5</div>
          <div class="bulat">
            <div
              v-for="i in 5"
              :key="i"
              class="circle circle-men"
              :class="{
                filled: i <= Math.round(product.rating.rate),
                'circle circle-women': product.category === 'women\'s clothing',
              }"
            ></div>
          </div>
        </div>
      </div>
      <div class="divider-1"></div>
      <div class="description">
        <p>{{ product.description }}</p>
      </div>
      <div class="divider-1"></div>
      <div
        class="price price-men"
        :class="{
          'price price-women': product.category === 'women\'s clothing',
        }"
      >
        <p>$ {{ product.price }}</p>
      </div>

      <div class="btn">
        <button
          class="buttons btn-men-buy"
          :class="{
            'buttons btn-women-buy': product.category === 'women\'s clothing',
          }"
        >
          Buy Now
        </button>
        <button
          @click="nextProductButtonPressed"
          class="buttonn btn-men-next"
          :class="{
            'buttonn btn-women-next': product.category === 'women\'s clothing',
          }"
        >
          Next Page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDisplay",
  props: ["product"],
  methods: {
    // Mengasumsikan metode ini harus berpindah ke produk berikutnya
    nextProductButtonPressed() {
      // Emit suatu event untuk memberi tahu parent (App.vue) untuk memicu logika produk berikutnya
      this.$emit("next-product");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/style/page.css";
</style>
