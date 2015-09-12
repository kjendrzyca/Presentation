import images from './images/images';

export let agendaItems = [
    {
        slideNumber: 1,
        title: 'intro'
    },
    {
        slideNumber: 2,
        title: 'just dragon'
    },
    {
        slideNumber: 10,
        title: 'webpack'
    },
    {
        slideNumber: 20,
        title: 'react'
    }
];

export let slides = new Map([
    [
        1,
        {
            title: 'someintro',
            text: 'some text'
        }
    ],
    [
        2,
        {
            title: 'dragon',
            text: 'some text',
            image: images.dragon
        }
    ],
    [
        10,
        {
            title: 'webpack',
            text: 'some webpack text'
        }
    ],
    [
        20,
        {
            title: 'react',
            text: 'some react text'
        }
    ]
]);
