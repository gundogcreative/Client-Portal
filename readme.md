#nuHome Client Portal

*This is an overview of what's contained in this repository. Please fill out this information to give a brief overview of such repository.*

Yup.


###V0.1 Development

Current Release: V0.1 2015-October


###Third-Party Dependencies

####Font Awesome

*Version Installed: 4.4.0*
[https://fortawesome.github.io/Font-Awesome/](https://fortawesome.github.io/Font-Awesome/)

Replaces standard font icons

#####Includes:

+ assets/css/font-awesome.min.css
+ assets/fonts/FontAwesome.otf
+ assets/fonts/fontawesome-webfont.eot
+ assets/fonts/fontawesome-webfont.svg
+ assets/fonts/fontawesome-webfont.ttf
+ assets/fonts/fontawesome-webfont.woff
+ assets/fonts/fontawesome-webfont.woff2


####Google Material Icons

[https://www.google.com/design/icons/](https://www.google.com/design/icons/)

Additional Font Icon Selection

#####Includes:

+ assets/css/google-material-icons.css
+ [inline stylesheet] https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"


####ChartJs

*Version Installed: 1.0.2*
[http://chartjs.org/](http://chartjs.org/)

Handles all graph/chart graphical interfaces

#####Includes:

+ assets/js/chart.min.js


###Navigation Structure

+ .navBar
  + .brand
  + .mobileNav
  + #navWrap
    + .mainNav
    + .secondaryNav
    
######.navBar
The .navBar encompasses the entire structure of the navigation elements. It's the basic container that holds all of the required elements.

######.navBar > .brand
The .brand div holds the nuHome brand, designed with Google fonts (Maven Pro).

######.navBar > .mobileNav
The .mobileNav is only visible on screen size < 991px. When clicked, it displays the appropriate navigation lists. The script for changing the icon (Google Material Icon) is located in nuhome.js.

##### .navBar > \#navWrap
\#navWrap holds both .mainNav & .secondaryNav. The reason to wrap both navigation lists within \#navWrap is for responsive menus. \#navWrap allows both menus to be hidden when window size < 991px.

##### .navBar > \#navWrap > .mainNav
.mainNav handles the top level navigation. All parent navigation elements are displayed within .mainNav.

##### .navBar > \#navWrap > .secondaryNav
.secondaryNav displays only when children pages exist. If no children pages exist, .secondaryNav is intended to be set as display:none;

####Known Issues

**navBar Destroy** Tested in: *Google Chrome Version 45.0.2454.101, Firefox 35.0, & Microsoft Edge 20.10240.16384.0* (PC / Windows 10)

In the following sequence: (1) when window size is decreased to < 991px, (2) mobile navigation is opened and closed, and then (3) window size is increased to > 991px, *.navBar* appears to lose structure which eliminates default background color resulting in default background color (white) to appear which makes navigation links unreadable.

Most likely a code structure issue.
