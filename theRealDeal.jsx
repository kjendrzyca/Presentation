import React from 'react';
import images from './images/images';

export let cssOptions = {
    height: 768,
    width: 1024
};

export let agendaItems = [
    {
        slideNumber: 0,
        title: 'Toolset'
    },
    {
        slideNumber: 3,
        title: 'Frameworks'
    },
    {
        slideNumber: 5,
        title: 'Code Example'
    },
    {
        slideNumber: 16,
        title: 'Trend'
    }
];

export let slides = [
    {
        title: 'Toolset',
        text: '',
        image: images.toolset
    },
    {
        title: 'Toolset',
        text: '',
        image: images.atom
    },
    {
        title: 'Toolset',
        customHtml: (
            <ul>
                <li>Big IDE -> small code editors</li>
                <li>Community driven packages</li>
                <li>Immediate response for new technologies</li>
            </ul>
        )
    },
    {
        title: 'Frameworks',
        image: images.frameworklongevity
    },
    {
        title: 'Frameworks',
        customHtml: (
            <ul>
                <li>Changing extremely fast</li>
                <li>Frameworks meh, libraries ok</li>
                <li>Not "how can I use this framework"...</li>
                <li>...but "what do I need to do this project"</li>
            </ul>
        )
    },
    {
        title: 'Code example',
        image: images.genius
    },
    {
        title: 'Fresh tech stack',
        customHtml: (
            <ul>
                <li>Webpack</li>
                <li>Hot Reload</li>
                <li>ES6</li>
                <li>JSX</li>
            </ul>
        )
    },
    {
        title: 'Good old composition',
        image: images.composition
    },
    {
        title: 'Component',
        text: '',
        customHtml: (
            <ul>
                <li>Forget MVC, think components</li>
                <li>Everything inside (DOM, logic, state, styles)</li>
                <li>Independent -> testable</li>
            </ul>
        )
    },
    {
        title: 'Props',
        image: images.props
    },
    {
        title: 'PropTypes - interface',
        image: images.proptypes
    },
    {
        title: 'Events go up',
        image: images.events
    },
    {
        title: 'No state',
        image: images.globalstate
    },
    {
        title: 'Immutable state',
        text: '<3'
    },
    {
        title: 'Virtual DOM',
        text: 'diff(renderA, renderB)'
    },
    {
        title: 'Pure JS',
        text: "React.DOM.a({ href: '#', key: item.slideNumber, onClick: _this._itemClicked.bind(null, item.slideNumber) }, item.title);"
    },
    {
        title: 'TREND'
    },
    {
        title: 'Small is beautiful',
        image: images.rabbit
    },
    {
        title: 'Interested?',
        customHtml: (
            <div style={{textAlign:'center'}}>
                <br/>
                <a href="https://github.com/TheOneYouDontLike/Presentation" target="about:blank">https://github.com/TheOneYouDontLike/Presentation</a>
                <br/>
                <div>
                    <div style={{display:'inline-block', margin:'2em'}}>
                        <img src={images.prezes}/>
                    <br/>
                        <p>@kjendrzyca <a href="http://aimforsimplicity.com" target="about:blank">aimforsimplicity.com</a></p>
                    </div>
                    <div  style={{display:'inline-block', margin:'2em'}}>
                        <img src={images.tarnas}/>
                    <br/>
                        <p>@tarnas14</p>
                    </div>
                </div>
            </div>
        )
    }
];
