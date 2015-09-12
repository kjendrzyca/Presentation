'use strict';

import React from 'react';
import Presentation from './components/Presentation';
import * as presentationData from './presentationSchema' ;

let mainContainerDiv = document.getElementById('main-container');

React.render(<Presentation {...presentationData} />, mainContainerDiv);
