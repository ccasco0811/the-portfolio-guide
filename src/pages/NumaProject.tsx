import React from 'react';

const NumaProject: React.FC = () => {
  return (
    <div style={{
      width: '100%', 
      height: '100%', 
      paddingLeft: 298, 
      paddingRight: 298, 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: 10, 
      display: 'inline-flex'
    }}>
      <div style={{
        maxWidth: 1000, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        gap: 32, 
        display: 'flex'
      }}>
        <div style={{
          width: 571, 
          height: 28, 
          color: 'black', 
          fontSize: 18, 
          fontFamily: 'Epilogue', 
          fontWeight: '500', 
          lineHeight: 28, 
          wordWrap: 'break-word'
        }}>
          Numa
        </div>
        <div style={{
          width: 571, 
          color: 'black', 
          fontSize: 48, 
          fontFamily: 'Epilogue', 
          fontWeight: '700', 
          lineHeight: 60, 
          wordWrap: 'break-word'
        }}>
          AI assistant that helps professionals create compliant invoices in seconds   
        </div>
        <div style={{
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: 40, 
          display: 'inline-flex'
        }}>
          <div style={{
            paddingTop: 8, 
            paddingBottom: 8, 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 16, 
            display: 'inline-flex'
          }}>
            <div style={{
              textAlign: 'center', 
              color: 'black', 
              fontSize: 14, 
              fontFamily: 'Epilogue', 
              fontWeight: '300', 
              textTransform: 'uppercase', 
              lineHeight: 20, 
              wordWrap: 'break-word'
            }}>
              Timeline
            </div>
            <div style={{
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'flex-start', 
              display: 'flex'
            }}>
              <div style={{
                textAlign: 'center', 
                color: '#1E1E1E', 
                fontSize: 16, 
                fontFamily: 'Epilogue', 
                fontWeight: '400', 
                lineHeight: 26, 
                wordWrap: 'break-word'
              }}>
                2024-Present
              </div>
            </div>
          </div>
          <div style={{
            paddingTop: 8, 
            paddingBottom: 8, 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 16, 
            display: 'inline-flex'
          }}>
            <div style={{
              textAlign: 'center', 
              color: 'black', 
              fontSize: 14, 
              fontFamily: 'Epilogue', 
              fontWeight: '300', 
              textTransform: 'uppercase', 
              lineHeight: 20, 
              wordWrap: 'break-word'
            }}>
              Role
            </div>
            <div style={{
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'flex-start', 
              display: 'flex'
            }}>
              <div style={{
                textAlign: 'center', 
                color: '#1E1E1E', 
                fontSize: 16, 
                fontFamily: 'Epilogue', 
                fontWeight: '400', 
                lineHeight: 26, 
                wordWrap: 'break-word'
              }}>
                Product Strategy
              </div>
            </div>
          </div>
          <div style={{
            paddingTop: 8, 
            paddingBottom: 8, 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 16, 
            display: 'inline-flex'
          }}>
            <div style={{
              textAlign: 'center', 
              color: 'black', 
              fontSize: 14, 
              fontFamily: 'Epilogue', 
              fontWeight: '300', 
              textTransform: 'uppercase', 
              lineHeight: 20, 
              wordWrap: 'break-word'
            }}>
              Platform
            </div>
            <div style={{
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'flex-start', 
              display: 'flex'
            }}>
              <div style={{
                textAlign: 'center', 
                color: '#1E1E1E', 
                fontSize: 16, 
                fontFamily: 'Epilogue', 
                fontWeight: '400', 
                lineHeight: 26, 
                wordWrap: 'break-word'
              }}>
                WhatsApp & Web
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumaProject;