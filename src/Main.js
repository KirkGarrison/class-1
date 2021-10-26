import { Component } from "react";
import Hornedbeasts from "./Hornedbeasts";
import data from './data.json';

class Main extends Component {
    render() {
        return (
            <>
            {data.map((data)=> (
             <Hornedbeasts
             title={data.title}
             image={data.image_url}
             imgTitle={data.imgtitle}
             description={data.description}
             keyword={data.keyword}
             horns={data.horns} 
            /> ))}
            </>
        )
    }
}

export default Main;