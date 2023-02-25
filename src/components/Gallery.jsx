import LightGallery from 'lightgallery/react';
// import { Container, Row, Col } from "react-bootstrap";
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {/* <a md={4} className="myAvtar" href="https://live.staticflickr.com/65535/52709431201_262f4fa6e8_k.jpg">
                    <img src="https://live.staticflickr.com/65535/52709431201_2aed555b6f.jpg" width="375" height="500" alt="Athens_street_2023-1" /><script async src="//embedr.flickr.com/assets/client-code.js" ></script>
                </a>
                <a md={4} className="myAvtar" href="https://live.staticflickr.com/65535/52709431201_262f4fa6e8_k.jpg">
                    <img src="https://live.staticflickr.com/65535/52709431201_2aed555b6f.jpg" width="375" height="500" alt="Athens_street_2023-1" /><script async src="//embedr.flickr.com/assets/client-code.js" ></script>
                </a>
                <a md={4} className="myAvtar" href="https://live.staticflickr.com/65535/52709431201_262f4fa6e8_k.jpg">
                    <img src="https://live.staticflickr.com/65535/52709431201_2aed555b6f.jpg" width="375" height="500" alt="Athens_street_2023-1" /><script async src="//embedr.flickr.com/assets/client-code.js" ></script>
                </a>
                <a md={4} className="myAvtar" href="https://live.staticflickr.com/65535/52709431201_262f4fa6e8_k.jpg">
                    <img src="https://live.staticflickr.com/65535/52709431201_2aed555b6f.jpg" width="375" height="500" alt="Athens_street_2023-1" /><script async src="//embedr.flickr.com/assets/client-code.js" ></script>
                </a> */}
            </LightGallery>
        </div >
    );
}

export default Gallery

