import { link } from "fs";

export const navs = [
    {
        id: 1,
        name: 'Home',
        link: '/',
        active: true,
    },
    {
        id: 2,
        name: 'Posts',
        link: '/postitems',
        active: false,
    },
    {
        id: 3,
        name: 'Build',
        link: '/createpostitems',
        active: false,
    },
    {
        id: 4,
        name: 'About',
        link: '/about',
        active: false,
    },
    {
        id: 5,
        name: 'Contact',
        link: '/contact',
        active: false,
    },
];

export const scis = [
    {
        id: 1,
        icon: 'bi-facebook',
        link:'',
    },
    {
        id: 2,
        icon: 'bi-twitter-x',
        link: '',
    },
    {
        id: 3,
        icon: 'bi-instagram',
        link: '',
    }
];

export const heroSlides = [
    {
        id: 1,
        bgImg: 'assets/img/post-slide-1.jpg',
        title: 'If you think you can, You Can !',
        brief: 'Whatever it may be, if you think you can, you can. There is nothing impossible. whatever the mind of a man can conceive and believe it can achieve, thats it.',
    },
    {
        id: 2,
        bgImg: 'assets/img/post-slide-2.jpg',
        title: 'Making a habit of Journaling',
        brief: 'Thought of writing something everyday. We may not have the clear idea in the beginning. So we have to start from the initial thought and we can see the momentum.',
    },
    {
        id: 3,
        bgImg: 'assets/img/post-slide-3.jpg',
        title: 'Self-interrogation and fine-tuning',
        brief: 'Learn and improve each day. Tiny changes yield results. Eliminate each bad habit one by one and cultivate the good ones. Down the line, you will become more valuable and respectable',
    },
	    {
        id: 4,
        bgImg: 'assets/img/post-slide-4.jpg',
        title: 'All our Dreams can come ture',
        brief: 'Like an invisible force, motivation affects the things we do, say, and think. It wakes us up in the morning, fuels our dreams, and pushes us to cross the finish ',
    },
	    {
        id: 5,
        bgImg: 'assets/img/post-slide-5.jpg',
        title: 'Either you run the day, or the day runs you',
        brief: 'It is never too late to be what you might Either you run the day or the day runs you. — JIM ROHN.  ',
    }
];