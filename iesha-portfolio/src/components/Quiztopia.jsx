import React, { useState, useEffect } from 'react';

function QuizTopia() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const navBarHeight = 60;

    return (
        <main>
            <div
                style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    margin: '0',
                    padding: `${40 + navBarHeight}px 20px 40px 20px`,
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
                            marginBottom: '10px',
                            color: 'white',
                            fontWeight: '700',
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        QuizTopia
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
                        A web-based interactive quiz system with personalized learning and real-time engagement monitoring
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
                                QuizTopia is a comprehensive web-based interactive learning platform built with <b>React 18+</b> and powered by <b>Supabase</b> for backend services. The system provides a secure, adaptive, and engaging learning environment that combines interactive quizzes, <b>real-time facial recognition monitoring</b>, and personalized recommendations to optimize student learning outcomes.
                            </p>
                            <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                                The application features a component-based architecture that delivers educational content through an intuitive interface. Students complete quizzes while the system monitors engagement levels using <b>webcam-based facial recognition technology</b> (with consent), providing adaptive feedback when attention drops below threshold levels.
                            </p>
                            <p style={{ lineHeight: '1.8' }}>
                                Parents and teachers can monitor student progress in real-time through a dedicated dashboard that displays performance metrics, engagement analytics, and attention data. The <b>RecommendationEngine</b> analyzes performance patterns and engagement data to provide personalized content recommendations, creating adaptive learning paths tailored to each student's needs. The system promotes transparent communication between students, parents, and educators while maintaining a scalable, cloud-based architecture accessible from any modern web browser with no installation required.
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
                                Traditional educational systems face significant challenges in maintaining student engagement and providing personalized learning experiences. One-size-fits-all approaches fail to address individual learning needs, and educators struggle to monitor student attention and comprehension in real-time:
                            </p>
                            <div style={{ lineHeight: '1.8', paddingLeft: '20px', marginBottom: '20px' }}>
                                <p style={{ marginBottom: '10px' }}>
                                    <b>1.</b> Students lose focus during lessons without immediate intervention or adaptive feedback
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <b>2.</b> Parents and teachers lack visibility into real-time student engagement and performance metrics
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <b>3.</b> Static lesson content fails to adapt to individual learning patterns and knowledge gaps
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <b>4.</b> Manual progress tracking is time-consuming and provides delayed insights
                                </p>
                                <p>
                                    <b>5.</b> Limited communication transparency between students, parents, and educators hinders collaborative learning support
                                </p>
                            </div>
                            <p style={{ lineHeight: '1.8' }}>
                                Without intelligent engagement monitoring, personalized recommendations, and real-time performance tracking, students struggle to maintain optimal learning momentum. This leads to decreased retention, missed learning opportunities, and difficulty in identifying areas that need additional focus or review.
                            </p>
                        </div>
                    </div>

                    {/* Section for Key Features */}
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
                                Key Features
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
                            <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '15px' }}>
                                    <b>Real-Time Facial Recognition Monitoring:</b> <b>Webcam-based facial recognition</b> tracks student attention and provides adaptive prompts when engagement drops
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <b>Adaptive Learning Engine:</b> AI-powered recommendations based on performance patterns and engagement metrics
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <b>Parent Dashboard:</b> Real-time monitoring of student progress, quiz scores, and engagement levels with detailed analytics
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <b>Cloud-Based Architecture:</b> Supabase backend with real-time synchronization and offline capability
                                </li>
                                <li>
                                    <b>Cross-Platform Accessibility:</b> Responsive design supporting desktop, tablet, and mobile devices with no installation required
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section for System Flowchart */}
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
                                System Flowchart
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
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                                <img 
                                    src="/quiztopia-arch.png" 
                                    alt="QuizTopia System Architecture Flowchart"
                                    style={{
                                        maxWidth: '50%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                    }}
                                />
                            </div>
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
                                    <source src="/quiztopia-demo.mp4" type="video/mp4" />
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

export default QuizTopia;