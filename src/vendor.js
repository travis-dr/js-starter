/* This contains references to all third party libraries used.
This is used by webpack in the production build only. 
A separate bundle for vendor code is useful as it's unlikely to change as often
as the application code.  So all the libraries referenced here will be written
to vendor.js and cached until one of them changes, meaning clients can avoid
having to download a huge JS file anytime a line of code changes.  Vendor.js will
only need to be downloaded when an external library changes.  Any files that 
aren't referenced her will be bundled into main.js for the production build.
*/

/*eslint-disable no-unused-vars*/

import fetch from 'whatwg-fetch'; 