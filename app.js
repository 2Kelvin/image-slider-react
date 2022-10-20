function Image(_ref) {
    var srcParam = _ref.srcParam,
        altParam = _ref.altParam;

    return React.createElement("img", {
        src: srcParam,
        alt: altParam,
        className: "my_image"
    });
}

function IconForward() {
    return React.createElement("img", {
        src: "images/forward.png",
        alt: "forward",
        className: "icon"
    });
}

function IconBack() {
    return React.createElement("img", {
        src: "images/back.png",
        alt: "back",
        className: "icon"
    });
}

function ImageSlider() {
    return React.createElement(
        "div",
        { className: "image_slider" },
        React.createElement(IconBack, null),
        React.createElement(
            "div",
            { className: "images_div" },
            React.createElement(Image, { srcParam: "images/cats.jpg", altParam: "cats" }),
            React.createElement(Image, { srcParam: "images/waterfall.jpg", altParam: "waterfall" }),
            React.createElement(Image, { srcParam: "images/brasil.jpg", altParam: "brasil" }),
            React.createElement(Image, { srcParam: "images/code.jpg", altParam: "code" }),
            React.createElement(Image, { srcParam: "images/cycle.jpg", altParam: "cycle" })
        ),
        React.createElement(IconForward, null)
    );
}

export default function App() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(
            "h1",
            null,
            "Image Slider"
        ),
        React.createElement(ImageSlider, null)
    );
}

// connection
var rootNode = document.getElementById('rootNode');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));