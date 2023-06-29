<template>
    <div>
        <Master>
            <Loader v-show="isload" />
            <div class="container" v-show="!isload">
                <div class="row">
                    <div v-for="item in products" :key="item.id" class="col-md-4">
                        <div class="card m-3 p-3">
                            <div class="card-header">{{ item.title }}</div>
                            <div class="card-body">
                                <img width="100%" :src="item.image" alt="">
                            </div>
                            <div class="card-footer">
                                <span>Price <small>$ {{ item.price }}</small></span>
                                <a @click="addToCard(item)" class="btn btn-sm btn-dark float-end">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    </div>
</template>
<script>
    import Master from "../Layout/Master";
    import Loader from "../Component/Loader";
    import axios from "axios";
    export default{
        components: {Master, Loader},
        name: "ProductComponent",
        data(){
            return{
                isload: true,
                products: [],
            }
        },
        created(){
            axios.get("https://fakestoreapi.com/products/")
            .then( res => {
                this.products = res.data;
                this.isload = false;
            });
        },
        methods:{
            addToCard(item){
                var card = this.$root.card;
                
                var isInCard = card.find((v)=>{
                    return v.title == item.title;
                });

                if( isInCard ){ 
                    isInCard.qty++;
                }else{
                    card.push({...item,qty:1});
                }
            },
        },
    }
</script>