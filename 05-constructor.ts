export class MyDate {
    

    constructor(
        public year: number = 1993, 
        public month: number = 7, 
        private day: number = 9
        ) {}

    printFormat(): string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(value : number){
        if(value <= 10 ){
           return `0${value}`;
        }
        return `${value}`;
    }
    add(amount: number, type: 'days' | 'months' | 'years'){
       if(type === 'days'){
        this.day += amount;
       }
       if(type === 'months'){
        this.month += amount;
       }
       if(type === 'years'){
        this.year += amount;
       }
    }

    getDay(){
        return this.day;
    }
}

const myDate = new MyDate(1993, 7, 7);
console.log(myDate.printFormat());
console.log(myDate.getDay());


const myDate1 = new MyDate();
console.log('() => ',myDate1.printFormat());

const myDate2 = new MyDate(2023);
console.log('(2023) => ',myDate2.printFormat());


const myDate3 = new MyDate(2023, 4);
console.log('(2023, 4) => ',myDate3.printFormat());




