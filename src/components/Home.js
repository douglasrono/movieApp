import React from "react";
import Movies from "./Movies";

function Home({Movies}){

    return(
        <div className="card-container">
            {Movies.map((item)=>(
                <Movies movie={Movies} key={Movies.id} />
            ))}
        </div>
    )

}
export default Home;