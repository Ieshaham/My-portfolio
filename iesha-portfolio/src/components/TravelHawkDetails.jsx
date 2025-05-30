import React, { useState, useEffect } from 'react';

function TravelHawkDetails() {
    const [isMobile, setIsMobile] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = ['project1.png','SC1.png', 'SC2.png', 'SC3.png', 'SC4.png'];

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

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
                            '@media (max-width: 600px)': {
                                marginTop: '1rem',
                            },
                        }}
                    >
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
            Travel Hawk is a comprehensive travel discovery app that leverages Google API and MapKit to help users find and navigate to ideal destinations and local experiences.
            
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
      
              {/* <p style={{ lineHeight: '1.8' }}> */}
              Travel Hawk is an iOS application designed to transform how travelers discover new places. Built with <b>Swift</b> and <b>UIKi</b>, this intuitive discovery platform leverages the <b>Google Places API</b> to help users find hotels, restaurants, cafés, and other points of interest with comprehensive details including operating hours, high-quality photos, detailed descriptions, and seamless <b>MapKit integration</b> for real-time navigation and location services.
              The app prioritizes user experience through a clean interface built on a <b>MVVM architecture</b> that makes exploring new destinations effortless. Travel Hawk implements <b>Core Data</b> for offline storage capabilities, allowing travelers to access saved locations without an internet connection. The application features efficient <b>RESTful API</b> calls with robust error handling, <b>custom UI components</b> for consistent design language, and location-based services using <b>CoreLocation</b> to display proximity to attractions,
               making Travel Hawk the perfect companion for both spontaneous explorers and meticulous planners.
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

          {/* Section for Demo with Image Carousel */}
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
              {/* Image Carousel Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(300px, 40vw, 500px)',
                overflow: 'hidden',
                borderRadius: '8px',
                backgroundColor: '#565c63'
              }}>
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  style={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                    e.target.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  &#8249;
                </button>

                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                    e.target.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  &#8250;
                </button>

                {/* Images Container */}
                <div style={{
                  display: 'flex',
                  width: `${images.length * 100}%`,
                  height: '100%',
                  transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}>
                  {images.map((image, index) => (
                    <div key={index} style={{
                      width: `${100 / images.length}%`,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={image}
                        alt={`Travel Hawk Screenshot ${index + 1}`}
                        style={{
                          width: '90%',
                          height: '90%',
                          objectFit: 'contain',
                          borderRadius: '4px'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div style={{
                        display: 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        color: '#a0a0a0',
                        fontSize: '14px'
                      }}>
                        Image {index + 1} not found
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Dots */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                gap: '8px'
              }}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: currentImageIndex === index ? 'white' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: currentImageIndex === index ? 'scale(1.2)' : 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                      if (currentImageIndex !== index) {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentImageIndex !== index) {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TravelHawkDetails;