const myApp = {
    data (){
        return {
            title:'Curso de Vue 3',
            name: 'Fabio',
            lastName: 'Gomes',
            products:[
                {
                    title: 'Filme 01',
                    description: 'Filme muito legal',
                    image: './assets/images/filme01.jpg',
                    stars: 3,
                },
                {
                    title: 'Filme 02',
                    description: 'Filme muito legal (2)',
                    image: './assets/images/filme02.jpg',
                    stars: 0,
                },  
            ],
            cart: [],
            styles: {
                backgroundColor: '#000',
                color: '#fff',

            },
            themeBlack : true,
           // textColor: '#000',
           // bgColor: '#fff'
        }
    },

    computed:{
        fullName (){
            return this.name + ' ' + this.lastName
        }
    },

    methods: {
        addCart(product){
            this.cart.push(product)
        },

        inCart (product){
            return this.cart.indexOf(product) != -1
        },

        removeCart(product){
           const cart =  this.cart.filter((prod, index) =>{
                return product != prod
            });

            this.cart = cart
        },

        toogleTheme (){
            this.themeBlack = !this.themeBlack

            if(this.themeBlack){
                this.styles.backgroundColor = '#000',
                this.styles.color = '#fff'

            }else{
                this.styles.backgroundColor = '#fff',
                this.styles.color = '#000'
            }
        }
    },
}

const app = Vue.createApp(myApp)
