import images from './images/images';
import React from 'react';
import CustomElement from './components/customElement';

export let cssOptions = {
    height: 768,
    width: 1024
};

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
    },
    {
        slideNumber: 30,
        title: 'custom html'
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
            text: 'some other text',
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
    ],
    [
        30,
        {
            title: 'custom component',
            text: 'some react text',
            customHtml: <CustomElement />
        }
    ]
]);
