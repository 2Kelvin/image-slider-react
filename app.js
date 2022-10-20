function Image(_ref) {
    var srcParam = _ref.srcParam,
        altParam = _ref.altParam;

    return React.createElement("img", {
        src: srcParam,
        alt: altParam,
        className: "my_image"
    });
}

function ArrowIcon(_ref2) {
    var arrow_src = _ref2.arrow_src,
        arrow_alt = _ref2.arrow_alt;

    return React.createElement("img", {
        src: arrow_src,
        alt: arrow_alt,
        className: "icon"
    });
}

function ImageSlider() {
    return React.createElement(
        "div",
        { className: "image_slider" },
        React.createElement(ArrowIcon, { arrow_src: "images/back.png", arrow_alt: "back" }),
        React.createElement(
            "div",
            { className: "images_div" },
            React.createElement(Image, { srcParam: "images/cats.jpg", altParam: "cats" }),
            React.createElement(Image, { srcParam: "images/waterfall.jpg", altParam: "waterfall" }),
            React.createElement(Image, { srcParam: "images/brasil.jpg", altParam: "brasil" }),
            React.createElement(Image, { srcParam: "images/code.jpg", altParam: "code" }),
            React.createElement(Image, { srcParam: "images/cycle.jpg", altParam: "cycle" })
        ),
        React.createElement(ArrowIcon, { arrow_src: "images/forward.png", arrow_alt: "forward" })
    );
}

export default function App() {
    return React.createElement(
        "section",
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