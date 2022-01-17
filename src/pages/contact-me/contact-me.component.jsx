import React from 'react';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import GetInContact from '../../components/get-in-contact/get-in-contact.component';
import { motion } from 'framer-motion';

const ContactMePage = () => (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    <div>
        <GetInTouch></GetInTouch>
        <GetInContact></GetInContact>

    </div>
    </motion.div>

);

export default ContactMePage;