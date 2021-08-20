import React, { Component } from 'react';
import '../styles/App.css';

class FileUploader extends Component {
    constructor() {
        super();
        this.state = {
            placeholder_img: 'https://img.icons8.com/ios/50/000000/image.png'
        };
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ placeholder_img: reader.result })
                this.props.changeImageUrl(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    render() {
        const { placeholder_img } = this.state
        return (
            <div className="image-container">
                <div className="image-box">
                    <div className="image-place-holder">
                        <img src={placeholder_img}
                            alt="area to add image"
                            id="img"
                            className="img" />
                    </div>
                    <input type="file"
                        name="image-upload"
                        onChange={this.imageHandler}
                        id="input"
                        accept="image/*" />
                    <div className="label">
                        <label htmlFor="input" className="image-upload">

                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileUploader;