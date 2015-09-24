import images from './images/images';
import React from 'react';
import CustomElement from './components/customElement';

export let cssOptions = {
    height: 768,
    width: 1024
};

export let agendaItems = [
    {
        slideNumber: 0,
        title: 'intro'
    },
    {
        slideNumber: 1,
        title: 'just dragon'
    },
    {
        slideNumber: 2,
        title: 'webpack'
    },
    {
        slideNumber: 3,
        title: 'react'
    },
    {
        slideNumber: 4,
        title: 'custom html'
    }
];

export let slides = [
    {
        title: 'someintro',
        text: 'some text'
    },
    {
        title: 'dragon',
        text: 'some other text',
        image: images.dragon
    },
    {
        title: 'webpack',
        text: 'some webpack text'
    },
    {
        title: 'react',
        text: 'some react text'
    },
    {
        title: 'custom component',
        text: 'some react text',
        customHtml: <CustomElement />
    }
];
