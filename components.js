

ReactDOM.render(
  <div className = "container">
      <div className ="row">
      
      <Card name ={data[0].instructor} title = {data[0].course} img ={data[0].image}/>
      
      
      <Card name ={data[1].instructor} title = {data[1].course} img ={data[1].image}/>
      
      
      <Card name ={data[2].instructor} title = {data[2].course} img ={data[2].image}/>
      
      </div></div> ,
    document.querySelector("#root")
);