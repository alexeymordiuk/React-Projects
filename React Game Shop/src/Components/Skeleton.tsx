import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props: any) => {
  return (
    <ContentLoader
    speed={2}
    width={361}
    height={491}
    viewBox="0 0 361 491"
    backgroundColor="#7e6fc8"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="55" y="110" rx="0" ry="0" width="1" height="0" /> 
    <rect x="-608" y="92" rx="20" ry="20" width="369" height="24" /> 
    <rect x="-608" y="123" rx="20" ry="20" width="369" height="210" /> 
    <rect x="-609" y="346" rx="20" ry="20" width="176" height="50" /> 
    <rect x="571" y="1046" rx="10" ry="10" width="69" height="50" /> 
    <rect x="-607" y="406" rx="20" ry="20" width="172" height="50" /> 
    <rect x="-607" y="468" rx="20" ry="20" width="251" height="50" /> 
    <rect x="552" y="1063" rx="20" ry="20" width="93" height="50" /> 
    <rect x="0" y="0" rx="0" ry="0" width="369" height="24" /> 
    <rect x="3" y="318" rx="0" ry="0" width="115" height="16" /> 
    <rect x="415" y="324" rx="0" ry="0" width="92" height="43" /> 
    <rect x="1" y="369" rx="0" ry="0" width="154" height="16" /> 
    <rect x="5" y="255" rx="20" ry="20" width="108" height="50" /> 
    <rect x="307" y="252" rx="13" ry="13" width="50" height="50" /> 
    <rect x="-1" y="33" rx="20" ry="20" width="361" height="210" /> 
    <rect x="275" y="354" rx="20" ry="20" width="86" height="35" />
  </ContentLoader>
  );
};

export default Skeleton;
