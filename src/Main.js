import { Component } from "react";
import Hornedbeasts from "./Hornedbeasts";

class Main extends Component {
    render() {
        return (
            <>
            <h3>These are our beautiful Horned Beasts</h3>
            <Hornedbeasts image={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}
            imgtitle={'Lucille'} description ={'Lucille is a beautiful raging bull who loves to eat Cardboard! Her bestfriend is a dolphin'} title={'Lucille'}/>
            <Hornedbeasts image={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}
            title={'Zeus'} imgtitle={'Zeus'} description={'Zeus is a hippopotamus who loves swimming! His favorite food is graham crackers. Here he is looking for water to teach his kids how to swim.'}    />
            
            </>
        )
    }
}

export default Main;