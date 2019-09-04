function Card(props){
    console.log(props);
    const name = "Robert Bunch";    
    // const title = "React From the Beginning";
    const title = props.title;
    const saleOn = false;
    return (
            <div className="col s3">
                <div className="card hoverable medium">
                    <div className="card-image">
                        <img src = {props.img}/>
                    </div>
                    <div className="card-content">
                    
                        <p>Course Instructor(s): {props.name}</p>
                        <p>Cours Name: {props.title}</p>
                        
                        
                    </div>
                    <div className="card-action">
                        <a href="#">${saleOn ? 9.99 : 59.99}</a>
                    </div>
                </div>
            </div>    
    )
}