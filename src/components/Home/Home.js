import React, {useState, useEffect} from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroller"
import Image from "../Image/Image"
import Header from "../Header/Header"
import MainContent from "../MainContent/MainContent"
import {API_SECRET} from "../../config"

const url = `https://api.unsplash.com/photos/random?client_id=${API_SECRET}
&query=nature&count=10` ;



const Home=(props)=>{

const [imageArr, setImages] = useState([]);

const getMoreImages=()=>{

axios.get(url)
.then(resp=>{
  console.log(resp.data);
  const newData = resp.data.map(item=>{
    return {src:item.urls.small, id:item.id}
  })
  setImages([...imageArr,...newData]);
})
}


useEffect(()=>{

  getMoreImages();
 // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

if(imageArr.length===0){
  return <div style={{display:'flex', flexDirection:'column', verticalAlign:'center', margin:'0 auto', height:"30%", width:"30%"}}><img src="./unsplash.png" key="lorem312esds" alt="asdasd"/></div>
}

  return (

<div style={{boxSizing:'border-box'}} >

<Header name={props.email} auth={props.auth} func={props.setIsSignedIn}/>
<MainContent/>
<InfiniteScroll
pageStart={0} 
hasMore={true}
loadMore={getMoreImages}>
  <section style={{
  margin:'auto',  
  display:'grid', maxWidth:"90%",
  gridColumnGap:'24px',
gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
gridGap:'2em',
alignItems:'start'}}>
 {imageArr.map(item=>{
    return <Image src={item.src} key={item.id}/> 
 })} 
</section>
</InfiniteScroll>   
</div>
  );
}



export default Home;