import React,{useState, useEffect} from 'react';

const items=['Wallpapers', 'Nature', 'People', 'Architecture', 'Current Events',
'Business & Work', 'Experimental', 'Fashion', 'Film', 'Health & Wellness', 'Interiors', 'Technology', 'Travel', 'Animals'
]

const len=items.length;

const SliderNav=()=>{

const myState={
    cind:0,
    dispArr:[]
};

const [state,setState]=useState(myState);

useEffect(()=>{
setState({cind:0, dispArr:items.slice(0,7)});
},[])


const handleClick=(props)=>{

if(props === 'l'){


if(state.cind===0){

let st=len-1;
let end=5; 

let arr=items.slice(st,len);
arr=arr.concat(items.slice(0,end+1));

setState({cind:st,dispArr:arr});

}else{

let st=state.cind-1;
let end=(st+6)%len;

if(end>st){
const arr=items.slice(st,end+1);
setState({cind:st,dispArr:arr});
}else{
    let arr=items.slice(st,len)
    let secarr=items.slice(0,end+1);
arr=arr.concat(secarr);
setState({cind:st,dispArr:arr});    
}

}

    
}else{

let st=(state.cind+1)%len;
let end=(st+6)%len;

if(end>st){
const arr=items.slice(st,end+1);
setState({cind:st,dispArr:arr});
}else{
    let arr=items.slice(st,len)
    let secarr=items.slice(0,end+1);
arr=arr.concat(secarr);
setState({cind:st,dispArr:arr});    
}

}

}

return (

        <div className="content">
<ul className="nav nav-tabs list">
    <button className="nav-btns" type="button" onClick={()=>handleClick('l')}>
        <svg className="nav-svg">
<path d={`M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z`}></path>
        </svg>
    </button>
   {
       state.dispArr.map(item=>{
            return <li className="nav-item">{item}</li> 
       })
        
    }
<button className="nav-btns" type="button" onClick={()=>handleClick('r')}>
    <svg className="nav-svg" >
        <path d={`M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z`}></path>
    </svg>
</button>
</ul>            
        </div>
    )
}

export default SliderNav
