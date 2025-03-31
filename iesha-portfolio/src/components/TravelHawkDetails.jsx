import React, { useState, useEffect } from 'react';

function TravelHawkDetails() {
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check window width on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Scroll to bottom when component mounts
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div
      style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        margin: '0',
        padding: '40px 20px',
        backgroundColor: '#121212',
        color: '#f5f5f5',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Make title more visible on mobile */}
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 3rem)', 
          marginBottom: '20px',
          color: 'white',
          fontWeight: '700',
          textShadow: '0 0 15px rgba(77, 141, 245, 0.5)',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          Travel Hawk
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 4vw, 1.2rem)', 
          marginBottom: '40px',
          color: '#a0a0a0',
          maxWidth: '800px',
          lineHeight: '1.6',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          A next-generation travel discovery app that helps adventurers find hidden gems and authentic experiences based on their preferences and travel style.
        </p>

        {/* Section for Description */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          marginBottom: '60px',
          gap: isMobile ? '15px' : '40px'
        }}>
          <div style={{ 
            flex: isMobile ? '1' : '0 0 200px',
          }}>
            <h2 style={{ 
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', 
              color: 'white',
              fontWeight: '600'
            }}>
              Description
            </h2>
          </div>
          <div style={{ 
            flex: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: 'clamp(15px, 3vw, 30px)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
              Travel Hawk is an AI-powered travel discovery platform designed to connect travelers with personalized, authentic experiences around the world. Using a combination of machine learning, local expert curation, and social recommendations, the app helps users discover destinations, activities, and accommodations that match their unique travel preferences and style.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              The platform aims to transform the way people explore new places by surfacing lesser-known attractions, local favorites, and seasonal experiences that traditional travel resources often miss.
            </p>
          </div>
        </div>

        {/* Section for Problem */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          marginBottom: '60px',
          gap: isMobile ? '15px' : '40px'
        }}>
          <div style={{ 
            flex: isMobile ? '1' : '0 0 200px',
          }}>
            <h2 style={{ 
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', 
              color: 'white',
              fontWeight: '600'
            }}>
              Problem
            </h2>
          </div>
          <div style={{ 
            flex: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: 'clamp(15px, 3vw, 30px)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
              Modern travelers face significant challenges when planning trips, including overwhelming choice paralysis, inauthentic tourist traps, and generic recommendations that don't account for personal preferences or travel styles. Additionally, travelers often struggle to:
            </p>
            <ul style={{ 
              lineHeight: '1.8', 
              paddingLeft: '20px',
              marginBottom: '20px'
            }}>
              <li style={{ marginBottom: '10px' }}>Discover experiences beyond popular attractions featured on mainstream platforms</li>
              <li style={{ marginBottom: '10px' }}>Find reliable information about off-the-beaten-path destinations</li>
              <li style={{ marginBottom: '10px' }}>Connect with like-minded travelers and local experts for personalized recommendations</li>
              <li>Plan itineraries that match their unique interests, budget constraints, and time limitations</li>
            </ul>
            <p style={{ lineHeight: '1.8' }}>
              Existing travel platforms often prioritize sponsored content and popular attractions, creating homogenized travel experiences that fail to satisfy the growing demand for unique, memorable adventures.
            </p>
          </div>
        </div>

        {/* Section for Research */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          marginBottom: '60px',
          gap: isMobile ? '15px' : '40px'
        }}>
          <div style={{ 
            flex: isMobile ? '1' : '0 0 200px',
          }}>
            <h2 style={{ 
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', 
              color: 'white',
              fontWeight: '600'
            }}>
              Research
            </h2>
          </div>
          <div style={{ 
            flex: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: 'clamp(15px, 3vw, 30px)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{ lineHeight: '1.8' }}>
              Extensive research was conducted to understand travelers' needs, pain points, and behaviors. Key findings included insights on personalization requirements, content credibility factors, and the ideal balance between algorithmic recommendations and human curation.
            </p>
          </div>
        </div>

        {/* Section for Prototype */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          marginBottom: '60px',
          gap: isMobile ? '15px' : '40px'
        }}>
          <div style={{ 
            flex: isMobile ? '1' : '0 0 200px',
          }}>
            <h2 style={{ 
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', 
              color: 'white',
              fontWeight: '600'
            }}>
              Prototype
            </h2>
          </div>
          <div style={{ 
            flex: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: 'clamp(15px, 3vw, 30px)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{ lineHeight: '1.8' }}>
              Based on our research, we developed a prototype focusing on personalized discovery, local expert integration, and seamless trip planning. The interface was designed to surface relevant content based on the user's stated preferences and implicit behavior patterns.
            </p>
          </div>
        </div>

        {/* Section for Demo */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          marginBottom: '60px',
          gap: isMobile ? '15px' : '40px'
        }}>
          <div style={{ 
            flex: isMobile ? '1' : '0 0 200px',
          }}>
            <h2 style={{ 
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', 
              color: 'white',
              fontWeight: '600'
            }}>
              Demo
            </h2>
          </div>
          <div style={{ 
            flex: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: 'clamp(15px, 3vw, 30px)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              width: '100%',
              height: 'clamp(200px, 30vw, 300px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px'
            }}>
              <p style={{ color: '#a0a0a0' }}>Demo content will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelHawkDetails;