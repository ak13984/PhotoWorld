import "./Image.css";


const Image=(props)=>{

    const {src,id}=props;

    return <img className="meriImage" src={src} key={id} alt="sdasd"/>


}

export default Image;