const annoyer = {
    phrases: ['literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't stop won't stop"],
    pickPhrase(){
        const {phrases} = this;
        const idx = Math.floor(Math.random()*phrases .length);
        return phrases[idx]
    },
    start(){
         //using an arrow function makes it possible to access the pickPhrase function using this.
        //because arrow function doesn't have it's own this keyword and relys on the this from the start() function.
        this.timerId = setInterval(()=> {
            //using this for timerId makes it accessible in the stop function.
            console.log(this.pickPhrase());
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log("PHEW THANK HEAVENS THAT IS OVER!");
    }
}
console.log(annoyer.start());
console.log(annoyer.stop());
