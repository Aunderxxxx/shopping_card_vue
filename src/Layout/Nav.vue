<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Shopping Card</a>
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/product">Product</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/card">
                                <i class="fas fa-cart-shopping"></i>
                                <span class="badge rounded-pill badge-notification bg-danger">{{ card.length }}</span>                                
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default{
        name: "NavComponent",
        data(){
            return {
                card: [],
            };
        },
        created(){
            this.card = this.$root.card;
        },
    }
</script>