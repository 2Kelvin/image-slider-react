function Image({ srcParam, altParam }) {
    return (
        <img
            src={srcParam}
            alt={altParam}
            className="my_image"
        />
    );
}

function IconForward() {
    return (
        <img
            src="images/forward.png"
            alt="forward"
            className="icon"
        />
    );
}

function IconBack() {
    return (
        <img
            src="images/back.png"
            alt="back"
            className="icon"
        />
    );
}

function ImageSlider() {
    return (
        <div className="image_slider">
            <IconBack />
            <div className="images_div">
                <Image srcParam="images/cats.jpg" altParam="cats" />
                <Image srcParam="images/waterfall.jpg" altParam="waterfall" />
                <Image srcParam="images/brasil.jpg" altParam="brasil" />
                <Image srcParam="images/code.jpg" altParam="code" />
                <Image srcParam="images/cycle.jpg" altParam="cycle" />
            </div>
            <IconForward />
        </div>
    );
}

export default function App() {
    return (
        <div className="app">
            <h1>Image Slider</h1>
            <ImageSlider />
        </div>
    );
}

// connection
const rootNode = document.getElementById('rootNode');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);