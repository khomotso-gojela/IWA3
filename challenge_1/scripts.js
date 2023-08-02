// scripts.js

// import company form 'configuration'
// import year form 'configuration'

// const message = '© ' + company + ' (' + year + ')'
// document.querySelector('footer').innerText = message

// solution

import {company} from './configuration.js'
import {year} from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
console.log(message)