var nav_location = new Vue({
    el: '#nav_bar',
    data: {
        place:"Home"
    },
    methods:{
        currentAt: function(item){
            this.place= item;
        }
    }

});

var n_text = new Vue({
    el:"#rev",
    data:{
        text:"Thanks for visiting my Vue.js tutorial site! I will try to use as many things I learnt here!"
    },
    methods:{
        changeText: function(){
            this.text = this.text.split('').reverse().join('');   
        }

    }
});

var input_r_message = new Vue({
    el :"#input_rev",
    data:{
        n_message:"",
        initial:false
    },
    methods:{
        reverseText:function(){
                return this.n_message.split('').reverse().join('');
        }
    },
    watch:{
        n_message:function(newMessage,oldMessage){
            this.initial=true;
            if (this.n_message =="Write Something here" || this.n_message=="" ){
                this.initial = false;
            }
        }
    }

});

Vue.component('breaker',{
    template: '<br><br><br>'
});

Vue.component('good-counter',{
    data: function(){
        return { c : 0}
    },
    template: '<button v-on:click="c++">Button has been pressed {{c}} times!</button>'
});

var bc = new Vue({
    el: "#counter"
});

Vue.filter('currency', function (value) {
    return 'Rs' + value;
});

var demo = new Vue({
    el: '#adder',
    data: {
        services: [
            {
                name: 'Water Bottle',
                price: 30,
                active:false
            },{
                name: 'Matchbox',
                price: 5,
                active:false
            },{
                name: 'Chips',
                price: 10,
                active:false
            },{
                name: 'Juice',
                price: 100,
                active:false
            }
        ]
    },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){
            var total = 0;

            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            });

           return total;
        }
    }
});