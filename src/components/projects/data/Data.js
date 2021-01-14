const data = [
    {
        imageUrl: "https://i.imgur.com/53g9HQY.png?1",
        title: "Spotify Playlist Refresher",
        description:"Getting tired of your playlists? This app allows you to login to spotify and “refresh” any of your playlists. This means a copy of the playlist will be made where every song is replaced with a different track by the same artist. The copy will have the suffix “- REFRESHED”. This App was built with a Node/Express backend and is hosted with Heroku. ",
        mobileDescription:"",
        siteUrl:"https://playlist-refresher.herokuapp.com/",
        codeUrl:"https://github.com/andykawabata/chatmap",
        isPersonal: true,
        technologies:[
            "Node.js (Express)",
            "Spotify API",
            "Heroku"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/adXjsyM.jpg?1",
        title: "YouTube Add Skipper",
        description:"This is a Chrome Extension that Automatically skips all skippable youtube ads the instant they appear. Works for ads at the beginning and in the middle of videos as well as the pop-up banner ads. Does not work for ads that have no skip option. The github repo as detailed instructions for installation. This project has been starred by 26 users on github.",
        siteUrl:"https://github.com/andykawabata/youtube_ad_skipper",
        codeUrl:"https://github.com/andykawabata/youtube_ad_skipper",
        isPersonal: true,
        technologies:[
            "JavaScript",
            "Chrome Extentions Platform"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/ITpK0YO.png",
        title: "ChatMap",
        description:"This is a location based chat app built with React and Firebase. The map zooms into a specified city in the USA and has markers on various points of interest within the city. Clicking on a marker brings up a chat window exclusive to that location, along with some general info about the location. Currently points of interest are added with a script and the state/city is specified in the url parameters. In the future, users will be able to add points of interest. It has a fully functional login system made with Firebase Authentication. Firebase Firestore is used as a NoSQL database. Deployed with Netlify.",
        siteUrl:"https://chatmap.netlify.app/North%20Carolina/Greensboro",
        codeUrl:"https://github.com/andykawabata/chatmap",
        isPersonal: true,
        technologies:[
            "React",
            "Google Maps",
            "Firebase",
            "Netlify"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/7DbsUA9.png?1",
        title: "YouTube Top Live Streams",
        description:"This responsive web-app lists the the top YouTube live streams associated with a tag, specified by the user. The app defaults to the tag '#lofi' when the page loads.  It was built using the Python's Flask framework, and uses Google's YouTube API. Currently deployed through a continuous integration pipeline from GitHub to Heroku server.",
        siteUrl:"https://top-live-streams.herokuapp.com/",
        codeUrl:"https://github.com/andykawabata/top-live-streams",
        isPersonal: true,
        technologies:[
            "Python (Flask)",
            "YouTube API",
            "Bootstrap",
            "Heroku Github Pipeline"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/gixPXK6.png?2",
        title: "Energy Consumption Dashboard",
        description:"Team submission for the UNCG Greenfund hackathon. Participants were given access to data from 81 energy meters around UNCG and tasked with making an interactive dashboard to display this data. We had one week to create the dashboard. It was built with Python's Dash framework. Python’s Pandas library was used extensively to process the data. Our team came in 2nd place out of 8 teams.",
        siteUrl:"https://energy-consumption-dashboard.herokuapp.com/",
        codeUrl:"https://github.com/andykawabata/Hackathon-Runtime_Terror",
        isPersonal: true,
        technologies:[
            "Python (Dash)",
            "Pandas",
            "Heroku"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/QrNJogJ.png?1",
        title: "The Website You're Currently On!",
        description:"This website was built with React. The waterfall graphic was coded with the P5js animation library. All other animation is done with CSS animations. I had a lot of fun making it!",
        siteUrl:"",
        codeUrl:"https://github.com/andykawabata/my-personal-website",
        isPersonal: true,
        technologies:[
            "React",
            "P5js",
            "CSS Animations"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/K4E4uRA.png",
        title: "andreatirrellphotography.com",
        description:"Responsive photography portfolio website I made for a client. Used PHP to create a custom Content Delivery System where the owner can login to a ‘portal’ and upload/delete/organize pictures. Frontend is made with custom CSS. Deployed on a remote AWS EC2 Linux server and served with Apache.",
        siteUrl:"http://www.andreatirrellphotography.com/",
        codeUrl:"",
        isPersonal: true,
        technologies:[
            "PHP",
            "MySQL",
            "AWS EC2"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/jPQQjv2.png?1",
        title: "forrestjoss.com",
        description:"Responsive art portfolio website I made for a client. Used PHP with Laravel Framework to create a custom Content Delivery System where the owner can login to a ‘portal’ and upload/delete/organize pictures. Frontend is styled with custom CSS. Deployed on a remote AWS EC2 Linux server and served with Apache.",
        siteUrl:"http://forrestjoss.com/",
        codeUrl:"",
        isPersonal: true,
        technologies:[
            "PHP (Laravel)",
            "MySQL",
            "AWS EC2"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/LegZUcj.jpg",
        title: "Api Arcade",
        description:"This is a Java desktop application built with JavaFX for my Software Engineering class (team project). This MVC designed app is an “arcade” of trivia-based mini games. It has a fully functional login system that allows users to save and track their scores. Games are based around data from various API’s. For example, one game displays a movie description along with 5 movie posters and the player must guess which poster goes with the description. This data is pulled from the OMDB api. The app is engineered such that creating a new game requires very little code.",
        siteUrl:"",
        codeUrl:"https://github.com/andykawabata/Api-Arcade",
        isPersonal: false,
        technologies:[
            "Java"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/4hkPybb.png?2",
        title: "RNA Folding Predictor",
        description:"This is a program I wrote for my Bioinformatics independent study. The user provides an RNA sequence and the app uses the Nussinov algorithm to predict how the given sequence might fold. The P5js library is used to display graphics representing the possible fold combinations.",
        siteUrl:"https://andykawabata.github.io/RNA-Folding/",
        codeUrl:"https://github.com/andykawabata/RNA-Folding",
        isPersonal: false,
        technologies:[
            "JavaScript",
            "P5js"
        ]
    },
    {
        imageUrl: "https://i.imgur.com/gk1lVGI.png?1",
        title: "CRISPR Cut Finder",
        description:"Program I wrote as part of my final project for my BioInformatics Class to locate the ‘tightest’ possible CRISPR cut given a base pair location on human chromosome 11. The user enters the location (integer) of the target base pair on human chromosome 11 and the program returns the locations of 2 'crispr cuts' that would allow the shortest amount of DNA to be spliced. It also returns a graphic of the resulting strands and cuts as well as the gRNA sequences needed to make those cuts.",
        siteUrl:"https://pam-finder.herokuapp.com/",
        codeUrl:"https://github.com/andykawabata/CRISPR-Cut-Finder",
        isPersonal: false,
        technologies:[
            "Python (Flask)",
            "Heroku"
        ]
    }
    
   
]

export default data;