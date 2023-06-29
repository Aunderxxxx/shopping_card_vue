<template>
    <div>
        <Master>
            <div class="container mt-5">
                <table class="table align-middle mb-0 bg-white">
                    <thead class="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>+ -</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in card" :key="i">
                            <td>{{ item.title }}</td>
                            <td><img :src="item.image" alt="" style="width: 50px; height: 50px" class="rounded-circle"></td>
                            <td>
                                <span @click="addQty(item)" class="m-1 btn btn-sm btn-success">+</span>
                                <span @click="reduceQty(item)" class="m-1 btn btn-sm btn-danger">-</span>
                            </td>
                            <td>{{ item.qty }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.qty * item.price }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Master>
    </div>
</template>
<script>
    import Master from "../Layout/Master";
    export default{
        components: {Master},
        name: "CardComponent",
        data(){
            return {
                card: [],
            };
        },
        created(){
            this.card = this.$root.card;
        },
        methods:{
            addQty(item){
                item.qty++;
            },
            reduceQty(item){
                item.qty--;
            }
        },
    }
</script>