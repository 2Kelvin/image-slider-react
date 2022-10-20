function Image({ srcParam, altParam }) {
    return (
        <img
            src={srcParam}
            alt={altParam}
            className="my_image"
        />
    );
}

function ArrowIcon({ arrow_src, arrow_alt }) {
    return (
        <img
            src={arrow_src}
            alt={arrow_alt}
            className="icon"
        />
    );
}

function ImageSlider() {
    return (
        <div className="image_slider">
            <ArrowIcon arrow_src="images/back.png" arrow_alt="back" />
            <div className="images_div">
                <Image srcParam="images/cats.jpg" altParam="cats" />
                <Image srcParam="images/waterfall.jpg" altParam="waterfall" />
                <Image srcParam="images/brasil.jpg" altParam="brasil" />
                <Image srcParam="images/code.jpg" altParam="code" />
                <Image srcParam="images/cycle.jpg" altParam="cycle" />
            </div>
            <ArrowIcon arrow_src="images/forward.png" arrow_alt="forward" />
        </div>
    );
}

export default function App() {
    return (
        <section className="app">
            <h1>Image Slider</h1>
            <ImageSlider />
        </section>
    );
}

// connection
const rootNode = document.getElementById('rootNode');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);