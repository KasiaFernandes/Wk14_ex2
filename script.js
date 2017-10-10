/*
var GalleryItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement("div", {},
                React.createElement("h2", {}, this.props.image.name),
                React.createElement("img", {src: this.props.image.src})
            )
        )
    }
});

var image = {
    name: "Kotek",
    src: "http://imgur.com/n8OYCzR.png"
};
var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById("app"));
*/

var movies = [
    {
        id: 1,
        title: "Harry Potter",
        desc: "film o czarodzieju",
        url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Philosopher%27s_Stone_posters.JPG"
    },
    {
        id: 2,
        title: "Król Lew",
        desc: "film o lwie",
        url: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
    },
    {
        id: 3,
        title: "Demain tout commence",
        desc: "film o dziewczynce",
        url: "https://upload.wikimedia.org/wikipedia/en/7/75/Demain_tout_commence.jpg"
    },
    {
        id: 4,
        title: "Baby Driver",
        desc: "film about Baby, the driver",
        url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Baby_Driver_poster.jpg"
    }
];


var MovieTitle = React.createClass ({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement("h2", {}, this.props.title)
        )
    }
})

var MovieDescription = React.createClass ({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement("p", {}, this.props.desc)
        )
    }
})

var MoviePoster = React.createClass ({
    propTypes: {
        url: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement("img", {src: this.props.url})
            )
    }
})

var Movie = React.createClass ({
    propTypes: {
        movie: React.PropTypes.shape({
            title:React.PropTypes.string.isRequired,
            desc: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired
        }).isRequired,
    },
    render: function() {
        return (
            React.createElement("li", {},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {desc: this.props.movie.desc}),
            React.createElement(MoviePoster, {url: this.props.movie.url})
            )
        )
    } 
})

var MovieList = React.createClass ({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        return React.createElement("div", {},
        React.createElement("h1", {}, "Filmy"),
        React.createElement("ul", {}, 
            this.props.movies.map(function(movie) { 
               return React.createElement(Movie, {key: movie.id, movie: movie})
            })
        )
        )
    }
});

var element = React.createElement(MovieList, {movies: movies}); 
ReactDOM.render(element, document.getElementById('app'));
