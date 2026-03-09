import React from 'react';
import { getSubstackEmbedUrl } from '../utils/substackConfig';
import '../styles/SubstackEmbed.css';

const SubstackEmbed = () => {
    return (
        <div className="substack-embed-container">
            <h2 className="substack-title">Subscribe to our Newsletter</h2>
            <p className="substack-description">
                Get the latest updates, stories, and English learning tips delivered straight to your inbox.
            </p>
            <div className="substack-iframe-wrapper">
                <iframe
                    src={getSubstackEmbedUrl()}
                    title="Substack Newsletter Subscribe"
                    width="100%"
                    height="100%"
                    style={{ border: '1px solid #EEE', background: 'white' }}
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
            </div>
        </div>
    );
};

export default SubstackEmbed;
