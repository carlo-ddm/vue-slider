// 1) Ciclare gli oggetti dell'array slide
// 2) Ciclare le proprietà del singolo oggetto

const app = new Vue({
    el: '#app',
    data: {            //data è oggetto che ha propr che è array di ogg
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],

        counterObject: 0,
    },

    methods: {
        nextObject(){
            this.counterObject ++;
            if(this.counterObject > this.slides.length - 1){
                this.counterObject = 0;
            }
            console.log('Constrollo NEXT --> ',this.counterObject);
        },
        
        prevObject(){
            this.counterObject --;
            if(this.counterObject < 0){
                this.counterObject = this.slides.length - 1
            }
            console.log('Controllo PREV --> ',this.counterObject);
        },
    },
})



// console.log(slides);