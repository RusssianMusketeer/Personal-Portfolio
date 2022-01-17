import React from 'react';
import './portfolio-detail-01-crown-clothing.styles.scss';
import PortfolioHeadImage from '../../components/portfolio-head-image/portfolio-head-image.component';
import PortfolioContainer from '../../components/portfolio-container/portfolio-container.component';
import CallToAction from '../../components/call-to-action/call-to-action.component';
import { motion } from 'framer-motion';

const MorningAroma =({text,image}) => (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    <div>
        <PortfolioHeadImage image={image}/>
        <PortfolioContainer text={text}/>
        <CallToAction/>
    </div>
    </motion.div>

);

export default MorningAroma;