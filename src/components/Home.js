import { useEffect, useState } from "react";
import Collapse from '@material-ui/core/Collapse';

const Home = () => {

    const[checked,setChecked]=useState(false);



    useEffect(()=>{
        setChecked(true);

    },[])

    return (
        <div>
            {/* <h1 className="display-4 text-primary mt3">Welcome to Capgemini</h1>
            <p>Capgemini trainees, especially those who are from Oct 12 batch3 are really very genious!</p> */}

            <div >
                {/* <img width="100%" src="https://miro.medium.com/max/8420/1*Jq9zkjx65HKizHjXSas51g.png" alt="development"></img> */}
                <img width="100%" src="https://images.pexels.com/photos/6502844/pexels-photo-6502844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Capgemini Office"></img>
                <Collapse in={checked}{...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}>
                    <h2 className="title">
                        Welcome to your <br />
                        <span className="I">Savings.</span>
                    </h2>

                </Collapse>


            </div>
        </div>

    );
}

export default Home;