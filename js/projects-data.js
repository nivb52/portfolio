'use strict';

function createProjects() {
    // id is also img name as jpg
    return [
        //1 
        {
            id: 'YachtAway',
            name: 'AirBNB of Yachts',
            subtitle: 'Airbnb marketplace in VueX & VueJs',
            desc: 'Desc',
            url: 'https://yachtaway.herokuapp.com/',
            IsLocal: false,

            publishedAt: 1564568859000,  // 31 July 2019 10:27:39
            labels: ['VueX', 'VueJs', 'Vue Cli', 'Framework', 'sprint-3 weeks'],
            imgFromOtherSource: 'https://res.cloudinary.com/nivb/image/upload/w_400,h_210/hero/motor_yachts_lil9cp.jpg'
        },
        //2 
        {
            id: 'hva',
            name: 'Book your Travel',
            subtitle: 'One page Bootstrap 3 & JS, Single Page App',
            desc: 'Desc',
            url: 'https://haifa-vacation-apartments.com/',
            IsLocal: false,

            publishedAt: 1564568859000,  // 31 July 2019 10:27:39
            labels: ['Vanilla JS', 'CSS', 'HTML', 'BOOTSTRAP 3'],
            imgFromOtherSource: false
        },
        //3

        {
            id: 'haifavacation',
            name: 'Rent an Apartment',
            subtitle: 'Rent apartment in Israel, using CSS , HTML and JS, website',
            desc: 'Desc',
            url: 'https://haifavacation.co.il/',
            IsLocal: false,

            publishedAt: 1564568859000,  // 31 July 2019 10:27:39
            labels: ['Vanilla JS', 'CSS', 'JavaScript', 'HTML'],
            imgFromOtherSource: false
        },

        //4:
        {
            id: 'ball-board',
            name: 'Catch The Ball',
            subtitle: 'Catch Them All',
            desc: 'Board games in Vanilla JS can show you the possiblities to create a fast play game with the no need of jQuery or any framework!, jst 8kb !',
            url: 'projs/ball-board',
            IsLocal: true,

            publishedAt: 1557829659000, // 14/5/19
            labels: ['Game', 'Vanilla JS'],
            imgFromOtherSource: false
        },

        //5
        {
            id: 'canvas-meme-generator',
            name: 'Meme Generator',
            subtitle: 'with VueX',
            desc: 'des',
            url: 'https://nivb52.github.io/meme-generator/',
            IsLocal: false,

            publishedAt: 1560421659000,  // 13.6.2019
            labels: ['Canvas', 'git', 'sprint'],
            imgFromOtherSource: false
        },


        //6 
        {
            id: 'mines',
            name: 'Mine Sweeper',
            subtitle: 'Clean Desgin Sweeper',
            desc: 'The Famouse Windows Minesweeper Free Online in JavaScript. Play the classic game in Beginner level, Intermediate, Expert or in Test modes.',
            url: 'projs/mines',
            IsLocal: true,

            publishedAt: 1348693940000,
            labels: ['Vanilla JS', 'matrix', '2D'],
            imgFromOtherSource: false
        },

        //7
        {
            id: 'book-shop',
            name: 'book shop',
            subtitle: 'CRUDL with jQuery',
            desc: 'des',
            url: 'projs/book-shop',
            IsLocal: true,

            publishedAt: 1559557659000, //  3.6.2019
            labels: ['jQuery', 'i18n'],
            imgFromOtherSource: false
        },

        //8
        {
            id: 'todosvuex',
            name: 'Todos',
            subtitle: 'with VueX',
            desc: 'Vue.js is a Progressive JavaScript Framework, with the ability to "building things in no time" - as said in there website. At the moment (8/2019) VueJs is more popular than Angular',
            url: 'projs/todo-vuex-localstorage',
            IsLocal: true,

            publishedAt: 1564568859000, // 31.7.2019
            labels: ['VueX', 'VueJs', 'Vue Cli', 'Framework', 'sprint'],
            imgFromOtherSource: false
        },

        //9
        {
            id: 'touch-in-nums',
            name: 'touch the numes',
            subtitle: 'with Vanilla JS',
            desc: 'Games That Matter. Touch Press provides high-quality games that are also opportunities to engage with key academic subjects and skills',
            url: 'projs/touch-in-nums',
            IsLocal: true,
            publishedAt: 1557656859000, // 12.5.2019
            labels: ['Game', 'Vanilla JS', 'JavaScript'],
            imgFromOtherSource: false
        },
        //10
        {
            id: 'mth',
            name: 'Haifa technology center',
            subtitle: 'Wordpress website',
            desc: 'The Haifa technology center is a project in WP with several admins and opinions about styleing a website :)',
            url: 'https://mth.org.il',
            IsLocal: false,

            publishedAt: 1557656859000, // 12.5.2019
            labels: ['Wordpress'],
            imgFromOtherSource: 'https://mth.org.il/assets/media/2019/06/IMG_20171211_081142-1024x578.jpg'
        },


        // Bank Dash Controller', 'On this page you will find several links to several of our online Bitcoin services. These weblink online services include demo\'s for consumer online banking,


    ]
}



