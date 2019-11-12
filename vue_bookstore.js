let app = new Vue({
    el: "#app",
    data: {
        books: [],
        search : "",
        
            
    },
    methods: {
        getData() {
            fetch("https://api.myjson.com/bins/zyv02")
                .then(response => response.json())
                .then(data => {
                    console.log(data.books);
                    
                    this.books = data.books;
                    // utilizamos this por que tenemos una arrow function. En caso de tener 
                    // una funcion normal utilizariamos el nombre asociado a el parametro "el" (app)  
                })
                .catch(err => console.log(err));

        }
    },
    created() {
        this.getData();
        

    },
    computed: { 
        filterbooks(){
            return this.books .filter((book)=> book.title.toLowerCase().includes(this.search) || book.description.toLowerCase().includes (this.search))
        }



    }
    



})