import React, { useState, useEffect } from 'react';

function ReceiptAnalyzer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Assuming your nav bar height is 60px. Adjust as needed.
    const navBarHeight = 60;

    return (
        <main>
            <div
                style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    margin: '0',
                    padding: `${40 + navBarHeight}px 20px 40px 20px`, // Added navBarHeight to top padding
                    backgroundColor: '#121212',
                    color: '#f5f5f5',
                    minHeight: '100vh',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h1
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 3rem)',
                            marginTop: '2rem',
                            marginBottom: '20px',
                            color: 'white',
                            fontWeight: '700',
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        AI Receipt Analyzer
                    </h1>

                    <p
                        style={{
                            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                            marginBottom: '40px',
                            color: '#a0a0a0',
                            maxWidth: '800px',
                            lineHeight: '1.6',
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        Chef Zuri is an AI-powered culinary assistant that helps users discover recipes, plan meals, and learn cooking techniques through intelligent recommendations and step-by-step guidance.
                    </p>

                    {/* Section for Description */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            marginBottom: '60px',
                            gap: isMobile ? '15px' : '40px',
                        }}
                    >
                        <div
                            style={{
                                flex: isMobile ? '1' : '0 0 200px',
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                                    color: 'white',
                                    fontWeight: '600',
                                }}
                            >
                                Description
                            </h2>
                        </div>
                        <div
                            style={{
                                flex: '1',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                padding: 'clamp(15px, 3vw, 30px)',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                                Chef Zuri is an innovative culinary application built with <b>React</b> and <b>Node.js</b>, designed to revolutionize the home cooking experience. This intelligent cooking companion leverages <b>machine learning algorithms</b> to provide personalized recipe recommendations based on dietary preferences, available ingredients, and cooking skill level. The platform features comprehensive recipe management with detailed nutritional information, step-by-step cooking instructions, and interactive cooking timers.
                                
                                The application implements a robust <b>RESTful API</b> architecture with <b>MongoDB</b> for efficient data storage and retrieval. Chef Zuri incorporates advanced features including ingredient substitution suggestions, meal planning capabilities, and smart shopping list generation using <b>natural language processing</b>. The user interface prioritizes accessibility with responsive design principles, making culinary exploration effortless for both novice cooks and experienced chefs seeking inspiration for their next culinary adventure.
                            </p>
                        </div>
                    </div>

                    {/* Section for Problem */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            marginBottom: '60px',
                            gap: isMobile ? '15px' : '40px',
                        }}
                    >
                        <div
                            style={{
                                flex: isMobile ? '1' : '0 0 200px',
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                                    color: 'white',
                                    fontWeight: '600',
                                }}
                            >
                                Problem
                            </h2>
                        </div>
                        <div
                            style={{
                                flex: '1',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                padding: 'clamp(15px, 3vw, 30px)',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                                Home cooks face numerous challenges in their culinary journey, including recipe overwhelm, ingredient waste, and lack of personalized guidance that matches their skill level and dietary needs. Many struggle with:
                            </p>
                            <ul
                                style={{
                                    lineHeight: '1.8',
                                    paddingLeft: '20px',
                                    marginBottom: '20px',
                                }}
                            >
                                <li style={{ marginBottom: '10px' }}>
                                    Finding recipes that match available ingredients and dietary restrictions
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    Understanding complex cooking techniques without proper guidance
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    Managing meal planning and grocery shopping efficiently
                                </li>
                                <li>Discovering new cuisines and flavors that align with personal taste preferences</li>
                            </ul>
                            <p style={{ lineHeight: '1.8' }}>
                                Existing cooking platforms often provide generic recipes without considering individual preferences, leading to food waste, cooking frustration, and missed opportunities for culinary growth and exploration.
                            </p>
                        </div>
                    </div>

                    {/* Section for Demo with Video */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            marginBottom: '60px',
                            gap: isMobile ? '15px' : '40px',
                        }}
                    >
                        <div
                            style={{
                                flex: isMobile ? '1' : '0 0 200px',
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                                    color: 'white',
                                    fontWeight: '600',
                                }}
                            >
                                Demo
                            </h2>
                        </div>
                        <div
                            style={{
                                flex: '1',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                padding: 'clamp(15px, 3vw, 30px)',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            {/* Video Container */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: 'clamp(300px, 40vw, 500px)',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                backgroundColor: '#565c63'
                            }}>
                                <video
                                    controls
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                        backgroundColor: '#000',
                                        filter: 'blur(0px)',
                                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <source src="/chef-zuri-demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ReceiptAnalyzer;