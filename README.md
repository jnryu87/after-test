It's the newest version of Angular v15 with node v16.18.1
Please clone this repo
```
npm install
npm start
```

I just needed 3 more mins...

What went wrong?

* app-average-rating

```javascript
    this.averageRate = this.ratings.reduce((a: number, b: Rating) => a + b.rate, 0) / this.ratings.length;
```
