'use strict'

var gProjs;

gProjs = createProjs();

function createProjs() {

    var projs = [{
        id: 'minesweeper',
        name: 'minesweeper',
        title: 'the good old minesweeper game.',
        desc: 'jave script implementation of the minesweeper game.',
        url: 'https://vectouor.github.io/minesweeper/',
        publishedAt: 1580731290,
        labels: ['Board games']
    }, {
        id: 'touch-the-nums',
        name: 'touch the nums',
        title: 'touch the nums game.',
        desc: 'touch the nums in ascending order.',
        url: 'https://vectouor.github.io/touch-the-nums/',
        publishedAt: 1580731290,
        labels: ['Board games']
    }, {
        id: 'book-shop',
        name: 'book shop',
        title: 'book shop m.',
        desc: 'book shop management system.',
        url: 'https://vectouor.github.io/book-shop/',
        publishedAt: 1580731290,
        labels: ['Retail']
    }].map(createProj);
    return projs;
}

function getProjs() {
    return gProjs;
}

function createProj(proj) {
    return {
        id: proj.id,
        name: proj.name,
        title: proj.title,
        desc: proj.desc,
        url: proj.url,
        // publishedAt: Date.now(),
        publishedAt: proj.publishedAt,
        labels: proj.labels
    }
}

function timestempToDate(timeStemp) {
    var a = new Date(timeStemp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}

function getProjById(projId) {

    var projs = getProjs();

    return projs.find(proj => {
        if (proj.id === projId) {
            return proj;
        }
    })
}