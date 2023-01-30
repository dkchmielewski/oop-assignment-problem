class Course {
    #price;

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    get price() {
        return '$' + this.#price;
    }

    set price(value) {
        if(value < 0) {
            throw('Invalid value!');
        }
        this.#price = value;
    }

    lengthPriceValue() {
        return this.length/this.#price;
    }

    courseSummary() {
        console.log('Course summary: ' + `\nTitle: ${this.title}\nLength: ${this.length}\nPrice: ${this.price}`)
    }
}

const course1 = new Course('Java', 44, 50);
const course2 = new Course('JS', 34, 50);

console.log(course1);
console.log(course2);

console.log(course1.lengthPriceValue());
console.log(course2.lengthPriceValue());

course1.courseSummary();
course2.courseSummary();
class PracticalCourse extends Course {

    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {

    publish() {
        console.log('This course is published.');
    }
}

const practical = new PracticalCourse('Angular', 64, 50, 12);
console.log(practical);

const theoretical = new TheoreticalCourse('Node JS', 34, 50, 8);
theoretical.publish();
