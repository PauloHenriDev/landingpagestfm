import './Home.css';
import Hero from './Hero/index.js';
import Header from './Header/index.js';
import Recommendation from './Recommendation/index.js';
import Doubts from './Doubts/index.js';
import STFM from './STFM/index.js';
import Specialist from './Specialist/index.js';
import Difference from './Difference/index.js';
import Employees from './Employees/index.js';

const Home = () => {
    return (
        <main>
           <Header />
           
           <Hero />

           <Recommendation />

            <Doubts />

            <STFM />

            <Specialist />

            <Difference />
          
            <Employees />
        </main>
    )
}

export default Home;