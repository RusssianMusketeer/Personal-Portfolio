import React from 'react';
import ContainerInfo from '../../components/container-info/container-info.component';
import { motion } from 'framer-motion';
import CallToAction from '../../components/call-to-action/call-to-action.component';
import CrownClothing from '../portfolio-detail-01-crown-clothing/portfolio-detail-01-crown-clothing.component';
import Jobiendo from '../portfolio-detail-02-jobiendo/portfolio-detail-02-jobiendo.component';

const PortfolioIndex=({images,button,text}) => (


    <motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
   <ContainerInfo  portfolio={"portfolio"} project={"crown-clothing"} component={CrownClothing} route={'/project-crown-clothing'} images={images.crown_clothing.src} button={button[1]} text={text.crown_clothing} />
   <ContainerInfo  portfolio={"portfolio"} project={"jobiendo"} component={Jobiendo} route={'/jobiendo'} images={images.crown_clothing.src} button={button[1]} text={text.jobiendo} />
    <CallToAction/>
    </motion.div>
);

export default PortfolioIndex;