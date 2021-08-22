
import React, {FC} from "react";
import {motion} from "framer-motion";

const svgVariants = {
    hidden: {rotate:-180},
    visible: {
        rotate:0,
        transition:{duration:1}
        }
}

const Mac: FC = () => {
    // const [name, toggleName] = useCycle(false, true);
    return(
<div className="relative h-32 w-32 ...">
<div className="absolute bottom-0 right-0  h-16 w-16 ...">
<motion.svg width="128px" height="128px" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"
variants={svgVariants}
    whileHover={{ y: 20}}
    initial={{ x: 80, opacity: 0}}
    animate={{ y:50, opacity: 1 }}
    transition={{ type: "spring", stiffness: 50 }}
    onMouseEnter={() => true}
    onMouseLeave={() => true}
>
<path fillRule="evenodd" clipRule="evenodd" d="M13.6799 106.616C13.7698 106.541 13.883 106.5 14 106.5H94C94.1326 106.5 94.2598 106.553 94.3535 106.646L99.3535 111.646C99.4965 111.789 99.5393 112.005 99.4619 112.191C99.3845 112.378 99.2022 112.5 99 112.5H8C7.78949 112.5 7.60153 112.368 7.52986 112.17C7.4582 111.972 7.51819 111.751 7.67991 111.616L13.6799 106.616ZM14.181 107.5L9.38102 111.5H97.7929L93.7929 107.5H14.181Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M102.71 107.925C103.558 108.071 104.427 108.272 105.263 108.508C107.036 109.009 108.717 109.685 109.78 110.385C110.721 111.005 112.042 111.537 113.391 111.914C114.739 112.291 116.067 112.5 117.008 112.5C117.433 112.5 118.022 112.38 118.537 112.157C119.078 111.922 119.393 111.638 119.476 111.404C119.525 111.265 119.554 110.95 118.882 110.428C118.212 109.907 116.968 109.296 114.859 108.643C110.017 107.141 105.576 107.367 102.71 107.925ZM99.8121 107.702C102.076 106.784 108.231 105.54 115.155 107.687C117.299 108.352 118.681 109.005 119.496 109.638C120.309 110.27 120.681 110.999 120.418 111.739C120.189 112.384 119.534 112.814 118.934 113.074C118.308 113.346 117.584 113.5 117.008 113.5C115.948 113.5 114.525 113.269 113.122 112.877C111.719 112.485 110.289 111.918 109.229 111.22C108.291 110.601 106.721 109.959 104.992 109.47C103.267 108.983 101.439 108.665 100 108.665C99.7608 108.665 99.5551 108.495 99.5093 108.261C99.4635 108.026 99.5904 107.792 99.8121 107.702Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.24 27.6629C13.4136 25.8688 14.9213 24.5 16.7237 24.5H111.276C113.079 24.5 114.586 25.8688 114.76 27.6629L120.179 83.6629C120.378 85.7195 118.762 87.5 116.696 87.5H11.3043C9.23812 87.5 7.62159 85.7195 7.82061 83.6629L13.24 27.6629ZM16.7237 25.5C15.4363 25.5 14.3593 26.4777 14.2353 27.7592L8.81596 83.7592C8.6738 85.2282 9.82847 86.5 11.3043 86.5H116.696C118.172 86.5 119.326 85.2282 119.184 83.7592L113.765 27.7592C113.641 26.4777 112.564 25.5 111.276 25.5H16.7237Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.3543 28.8006C15.4583 27.5014 16.543 26.5 17.8464 26.5H110.154C111.457 26.5 112.542 27.5014 112.646 28.8006L116.239 73.7209C116.402 75.7574 114.793 77.5 112.75 77.5H15.2496C13.2066 77.5 11.5978 75.7574 11.7607 73.7209L15.3543 28.8006ZM17.8464 27.5C17.0643 27.5 16.4135 28.1008 16.3512 28.8804L12.7575 73.8006C12.6412 75.2553 13.7903 76.5 15.2496 76.5H112.75C114.21 76.5 115.359 75.2553 115.242 73.8006L111.649 28.8804C111.586 28.1008 110.936 27.5 110.154 27.5H17.8464Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M53.0032 86.9431C53.0322 86.6906 53.2459 86.5 53.5 86.5H74.5C74.765 86.5 74.984 86.7068 74.9992 86.9714L75.4971 95.6618C76.4601 100.27 79.2901 101.922 81.1538 102.524C81.3879 102.6 81.5322 102.835 81.4939 103.078C81.4556 103.321 81.2461 103.5 81 103.5H47C46.7539 103.5 46.5444 103.321 46.5061 103.078C46.4678 102.835 46.6121 102.6 46.8462 102.524C48.4953 101.991 49.7039 100.761 50.5496 99.3918C51.3915 98.0285 51.8457 96.5707 52.0049 95.6561L53.0032 86.9431ZM53.946 87.5L52.9967 95.7842C52.9957 95.7935 52.9944 95.8027 52.9928 95.812C52.8165 96.8377 52.321 98.4267 51.4004 99.9173C50.8155 100.864 50.0475 101.789 49.0652 102.5H78.7711C77.0337 101.392 75.2463 99.3965 74.5103 95.8283C74.5054 95.8044 74.5022 95.7802 74.5008 95.7559L74.0278 87.5H53.946Z" fill="black"/>
</motion.svg>


</div>
</div>
    );
}
export default Mac;


