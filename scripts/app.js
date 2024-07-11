const app = Vue.createApp({
    data(){
        return {
            firstName: "",
            lastName: "",
            quantity: 0,
            priceperItem: 10 
        };
    },
        computed:{
            fullName: function(){
                return `${this.firstName} ${this.lastName}`;
            },
            totalPrice: function(){
                return this.quantity * this.priceperItem;
            }
        },
        methods:{
            clearFields: function(){
                this.firstName = "";
                this.lastName = "";
                this.quantity = 0;
            }
        }
    });



app.mount('#app');