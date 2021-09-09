import './homepage.styles.scss';
import ContainerInfo from '../../components/container-info/container-info.component';
import { motion } from 'framer-motion';
import CallToAction from '../../components/call-to-action/call-to-action.component'
import { ReactComponent as MovingImage} from '../../assets/moving-image.svg';

const HomePage = ({images,button,text}) => (

    <motion.div layout={"position"}
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    
    <div >
        <div className='flex' >
        <div className="ripple">
        <MovingImage/>
        <div class="title-block">
        <h1 class="title"> I’m Arseni Dmitriev and I enjoy building websites </h1>
        </div>
        </div>

        </div>
        
        <ContainerInfo home={'home'} route={'/portfolio'} images={images.about_me.src} button={button[0]} text={text.about_me}/> 
        
        <CallToAction />
    </div>
    </motion.div>
)

export default HomePage;

