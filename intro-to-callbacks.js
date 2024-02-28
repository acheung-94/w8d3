class Clock {
    constructor () {
        let time = new Date()
        this.hours = time.getHours()
        this.minutes = time.getMinutes()
        this.seconds = time.getSeconds()

        this.printTime();
        setInterval(()=>{
            this._tick();
        }, 1000);
    }

    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() {
        this.seconds = this.seconds + 1
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0
                this.hours += 1
            }
        }
        this.printTime()    
    }
}

let clock = new Clock();


