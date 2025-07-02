# Doszhanuly Abdurakhim
## My Contact Info
* Email: abdudozh@gmail.com
* Linkedin: [Abdurakhim Doszhanuly](https://www.linkedin.com/in/abdurakhim-doszhanuly-97848734a/)
* GitHub: [kanosay](https://github.com/kanosay)
## Summary
I am a dedicated and ambitious learner with a strong interest in computer programming and system development. I am currently focused on mastering the C programming language and exploring the fundamentals of system programming, while also maintaining and advancing his skills in front-end web development using technologies like HTML, CSS, JavaScript, and React. 
## Skills
* JavaScript
* HTML & CSS 
* SCSS
* React 
* Git & GitHub
* C Programming (Basics)
## Code examples
```
function memoize(fn) {
    let cache = new Map();
    return function (...args) {
        let key = args.join(',');
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            let result = fn(...args);
            cache.set(key, result);
            return result;
        }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
```
## Education
* Bachelor, Unicorn University, Prague
    * Faculty of Software Development
* An associate degree, PMVK College
    * Faculty of Computer Science
* Meta Front-End Developer – JavaScript Essentials
    * Coursera | Meta (Facebook)
## Languages
* Kazakh/Russian - native
* English - B2/C1
    * Achieved C1 level in EPAM English Proficiency Test
    * Currently studying in the Czech Republic in English university programs
    * Comfortable with technical, academic, and conversational English