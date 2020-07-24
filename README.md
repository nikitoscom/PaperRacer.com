## About
PaperRacer.com - online multiplayer racing game. Main features: vehicle/level editor, custom game engine, multiplayer. 
Technologies used: Nginx, Express.js, Mysql, Redis, PHP, JavaScript, Backbone.js, Grunt, Cordova, etc. 

## Main Features

There are so many interesting implementations in this project.

1) page flipping animation for switching between pages.
2) hybrid DataBase implementation, Redis for fast catalog sorting, MySQL for data that doesn't require fast access.
3) Game Engine is written on plain JavaScript. Some parts of this engine will be published in this Github repository.
4) Amazon web services are used for users created content and DB backups.
5) Cloudflare is used for free CDN hosting. Tricky DNS set up for picking up static files from a different domain on the same server;
6) One codebase is written and used for ALL platforms and only one JavaScript file is different for each platform, including iOS authorization, Yahoo Mobage Japan, and others.
7) This game has a level editor that is available here - https://paperracer.com/create/track . Each user can create their own track/vehicle/avatar which will be available for everyone. To avoid spam there are some rules and filters.
8) Game Shop is available on some platforms and uses platform-specific billing system.
9) Multilanguage support. This game available in 3 Languages English, Russian and Japanese. Language-specific sprites are generated during built. 
10) All images are minified using pngquart
...


to be continued