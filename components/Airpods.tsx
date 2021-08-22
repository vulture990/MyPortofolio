// @ts-ignore

import React, {FC} from "react";
import {motion} from "framer-motion";
const svgVariants = {
    hidden: {rotate:-180},
    visible: {
        rotate:0,
        transition:{duration:1}
        }
}
const pathVariants = {
    hidden: {
        opacity:0,
        pathLength:0,
    },
    visible: {
        opacity:1,
        pathLength:1,
        transition:{duration:2,ease:'easeInOut'}
    }

}


const Doodles: FC = () => {
    return(
    <div className="relative h-32 w-32 ...">
    <div className="absolute bottom-0 left-0 h-16 w-16 ...">
    <motion.svg width="128px" height="128px" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"
    variants={svgVariants}
    animate="visible"
    whileHover={{ y: 20}}
    initial={{ x: 80, opacity: 0}}
    animate={{ x: 0,y:50, opacity: 1 }}
    transition={{ type: "spring", stiffness: 50 }}
    onMouseEnter={() => true}
    onMouseLeave={() =>true}
    
    >
<motion.path fillRule="evenodd" clipRule="evenodd" d="M44.4321 34.7752C46.9601 33.1966 49.4488 32.7495 51.503 33.5712C57.4743 35.9596 59.3424 40.9763 59.8382 44.0411C60.4667 47.926 59.4513 51.5275 58.0702 53.9197C56.5144 56.6147 53.8944 58.696 50.8835 59.9004C47.8387 61.1183 41.8926 62.5764 36.492 58.7188C34.5075 57.3013 33.7108 55.0475 33.9248 52.2169C34.1398 49.3727 35.3774 46.003 37.3987 42.502C39.4086 39.0207 41.9092 36.3506 44.4321 34.7752ZM43.9024 33.927C41.2119 35.6071 38.6057 38.4114 36.5327 42.002C34.471 45.5728 33.1582 49.0913 32.9277 52.1415C32.6961 55.2054 33.5587 57.8525 35.9107 59.5325C41.7333 63.6915 48.1049 62.0889 51.2549 60.8289C54.4389 59.5552 57.2507 57.3393 58.9363 54.4197C60.4163 51.8559 61.4955 48.0235 60.8254 43.8814C60.2981 40.6221 58.293 35.2101 51.8744 32.6427C49.4191 31.6606 46.5877 32.2501 43.9024 33.927Z" fill="black"
    variants={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M58.5624 44.6573C58.7004 44.4182 58.6185 44.1124 58.3794 43.9743C57.2157 43.3025 55.7154 43.7963 54.3618 44.7657C52.9675 45.7641 51.5381 47.3897 50.3792 49.397C49.2204 51.4042 48.5272 53.4549 48.3597 55.1616C48.197 56.8186 48.5195 58.3648 49.6831 59.0366C49.9223 59.1747 50.2281 59.0928 50.3661 58.8536C50.5042 58.6145 50.4223 58.3087 50.1831 58.1706C49.569 57.816 49.1993 56.844 49.3549 55.2593C49.5055 53.7244 50.1408 51.8099 51.2453 49.897C52.3497 47.984 53.69 46.4766 54.944 45.5787C56.2386 44.6516 57.2652 44.4857 57.8794 44.8403C58.1185 44.9784 58.4243 44.8965 58.5624 44.6573Z" fill="black"
variants={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M58.0117 49.0102C58.032 50.2124 57.6491 51.6732 56.8312 53.0897C56.0134 54.5063 54.9397 55.5683 53.8885 56.1519C52.8271 56.7411 51.8748 56.8041 51.1978 56.4132C50.5207 56.0223 50.0992 55.1661 50.0788 53.9523C50.0586 52.7501 50.4415 51.2893 51.2593 49.8728C52.0771 48.4563 53.1508 47.3942 54.202 46.8107C55.2634 46.2214 56.2157 46.1584 56.8927 46.5493C57.5698 46.9402 57.9913 47.7964 58.0117 49.0102ZM59.0116 48.9934C58.988 47.5928 58.4935 46.3188 57.3927 45.6833C56.292 45.0477 54.9414 45.2564 53.7167 45.9363C52.4818 46.6219 51.2861 47.8263 50.3933 49.3728C49.5004 50.9193 49.0552 52.5569 49.0789 53.9691C49.1025 55.3697 49.597 56.6437 50.6978 57.2792C51.7985 57.9148 53.1491 57.7061 54.3739 57.0262C55.6088 56.3406 56.8044 55.1362 57.6973 53.5897C58.5901 52.0433 59.0354 50.4056 59.0116 48.9934Z" fill="black"/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M20.4631 53.1177C20.309 53.2072 20.2141 53.3719 20.2141 53.5502L20.2141 85.7639C20.2141 87.0855 20.5713 88.6184 21.7043 89.8234C22.8441 91.0356 24.6967 91.8393 27.5285 91.8393C30.408 91.8393 32.2637 91.0372 33.3929 89.8211C34.515 88.6127 34.843 87.0778 34.843 85.7639C34.8428 83.7363 34.8429 75.0653 34.8429 67.1347C34.8429 63.4343 34.843 59.895 34.843 57.2671C34.843 57.0039 34.6389 56.7858 34.3762 56.7682C31.31 56.5638 25.2029 55.5393 20.9621 53.116C20.8074 53.0276 20.6173 53.0283 20.4631 53.1177ZM33.843 57.7306C33.843 60.3037 33.8429 63.6476 33.8429 67.1346C33.8429 75.0653 33.8428 83.7364 33.843 85.7639C33.843 86.928 33.5515 88.1807 32.6601 89.1406C31.776 90.0928 30.2243 90.8393 27.5285 90.8393C24.8863 90.8393 23.3317 90.0943 22.4328 89.1383C21.527 88.175 21.2141 86.9202 21.2141 85.7639L21.2141 54.3892C25.3609 56.5164 30.7763 57.4711 33.843 57.7306Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M20.1494 18.122C23.9743 17.072 28.9748 17.2066 35.4038 19.6558C44.7955 23.2336 48.9881 30.2117 49.9788 32.9856C50.0717 33.2456 50.3578 33.3812 50.6179 33.2883C50.8779 33.1954 51.0134 32.9093 50.9206 32.6493C49.8463 29.6412 45.4634 22.4179 35.7598 18.7213C29.1795 16.2145 23.9583 16.0394 19.8847 17.1576C15.8107 18.276 12.9346 20.6742 11.0215 23.225C7.19949 28.3211 5.28019 38.4948 11.6569 46.1469C14.7807 49.8955 17.6949 52.4903 21.238 54.3323C24.7759 56.1716 28.906 57.2419 34.4324 57.9955C34.706 58.0328 34.9581 57.8412 34.9954 57.5676C35.0327 57.294 34.8412 57.0419 34.5675 57.0046C29.0939 56.2582 25.092 55.2089 21.6992 53.445C18.3116 51.6838 15.4963 49.1921 12.4251 45.5067C6.41198 38.2909 8.20965 28.6408 11.8215 23.825C13.6254 21.4198 16.3248 19.1719 20.1494 18.122Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M25.7937 18.1743C25.758 18.4482 25.9511 18.6991 26.2249 18.7348C37.4054 20.1931 44.2672 28.6741 46.2856 32.711C46.4091 32.958 46.7095 33.0581 46.9565 32.9346C47.2035 32.8111 47.3036 32.5108 47.1801 32.2638C45.0686 28.0408 37.9711 19.2585 26.3542 17.7432C26.0804 17.7075 25.8295 17.9005 25.7937 18.1743Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M17.9768 23.3534C16.2922 22.3001 14.0726 22.812 13.0194 24.4966C11.9661 26.1813 12.4779 28.4009 14.1626 29.4541L18.184 31.9684C19.8686 33.0216 22.0882 32.5098 23.1414 30.8251C24.1947 29.1405 23.6829 26.9209 21.9982 25.8676L17.9768 23.3534ZM13.8673 25.0268C14.6278 23.8104 16.2303 23.4408 17.4467 24.2013L21.4681 26.7156C22.6845 27.4761 23.054 29.0786 22.2935 30.295C21.533 31.5114 19.9305 31.8809 18.7141 31.1204L14.6927 28.6062C13.4763 27.8457 13.1068 26.2431 13.8673 25.0268Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M17.9768 23.3534C16.2922 22.3001 14.0726 22.812 13.0194 24.4966C11.9661 26.1813 12.4779 28.4009 14.1626 29.4541L23.2114 35.1116C24.896 36.1648 27.1156 35.653 28.1689 33.9683C29.2221 32.2837 28.7103 30.0641 27.0256 29.0109L17.9768 23.3534ZM13.8673 25.0268C14.6278 23.8104 16.2303 23.4408 17.4467 24.2013L26.4955 29.8588C27.7119 30.6193 28.0814 32.2218 27.3209 33.4382C26.5604 34.6546 24.9579 35.0241 23.7415 34.2637L14.6927 28.6062C13.4763 27.8457 13.1068 26.2431 13.8673 25.0268Z" fill="black" variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M83.5679 54.599C81.0399 53.0204 78.5512 52.5733 76.497 53.395C70.5257 55.7835 68.6576 60.8001 68.1618 63.8649C67.5333 67.7499 68.5487 71.3513 69.9298 73.7436C71.4856 76.4385 74.1056 78.5199 77.1165 79.7242C80.1613 80.9422 86.1074 82.4002 91.508 78.5426C93.4925 77.1252 94.2892 74.8714 94.0752 72.0408C93.8602 69.1966 92.6226 65.8269 90.6013 62.3259C88.5914 58.8446 86.0908 56.1745 83.5679 54.599ZM84.0976 53.7508C86.7881 55.4309 89.3943 58.2353 91.4673 61.8259C93.529 65.3967 94.8418 68.9151 95.0723 71.9654C95.3039 75.0292 94.4413 77.6763 92.0893 79.3564C86.2667 83.5154 79.8951 81.9127 76.7451 80.6527C73.5611 79.3791 70.7493 77.1632 69.0637 74.2435C67.5837 71.6798 66.5045 67.8473 67.1746 63.7052C67.7019 60.446 69.707 55.0339 76.1256 52.4665C78.5809 51.4844 81.4123 52.074 84.0976 53.7508Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M69.4376 64.4812C69.2996 64.2421 69.3815 63.9363 69.6206 63.7982C70.7843 63.1264 72.2846 63.6202 73.6382 64.5896C75.0325 65.588 76.4619 67.2137 77.6208 69.2209C78.7796 71.2281 79.4728 73.2788 79.6403 74.9855C79.803 76.6425 79.4805 78.1887 78.3169 78.8605C78.0777 78.9986 77.7719 78.9167 77.6339 78.6775C77.4958 78.4384 77.5777 78.1326 77.8169 77.9945C78.431 77.6399 78.8007 76.6679 78.6451 75.0832C78.4945 73.5483 77.8592 71.6339 76.7547 69.7209C75.6503 67.8079 74.31 66.3006 73.056 65.4026C71.7614 64.4755 70.7348 64.3097 70.1206 64.6642C69.8815 64.8023 69.5757 64.7204 69.4376 64.4812Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M69.9885 68.8341C69.9683 70.0362 70.3512 71.4971 71.169 72.9136C71.9868 74.3301 73.0605 75.3921 74.1117 75.9757C75.1731 76.5649 76.1254 76.628 76.8025 76.2371C77.4795 75.8462 77.901 74.9899 77.9215 73.7762C77.9417 72.574 77.5588 71.1131 76.741 69.6966C75.9231 68.2801 74.8494 67.2181 73.7982 66.6345C72.7368 66.0453 71.7845 65.9823 71.1075 66.3731C70.4305 66.764 70.0089 67.6203 69.9885 68.8341ZM68.9886 68.8172C69.0122 67.4166 69.5068 66.1426 70.6075 65.5071C71.7083 64.8716 73.0588 65.0803 74.2836 65.7602C75.5185 66.4457 76.7141 67.6501 77.607 69.1966C78.4998 70.7431 78.9451 72.3808 78.9213 73.793C78.8978 75.1936 78.4032 76.4676 77.3025 77.1031C76.2017 77.7386 74.8511 77.5299 73.6264 76.85C72.3915 76.1645 71.1958 74.9601 70.303 73.4136C69.4101 71.8671 68.9649 70.2294 68.9886 68.8172Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M107.537 72.9416C107.691 73.031 107.786 73.1958 107.786 73.374L107.786 105.588C107.786 106.909 107.429 108.442 106.296 109.647C105.156 110.859 103.303 111.663 100.471 111.663C97.592 111.663 95.7363 110.861 94.6071 109.645C93.485 108.437 93.157 106.902 93.157 105.588C93.1572 103.56 93.1571 94.8892 93.1571 86.9585C93.1571 83.2581 93.157 79.7189 93.157 77.091C93.157 76.8278 93.3611 76.6096 93.6238 76.5921C96.69 76.3877 102.797 75.3632 107.038 72.9399C107.193 72.8515 107.383 72.8521 107.537 72.9416ZM94.157 77.5545C94.157 80.1275 94.1571 83.4714 94.1571 86.9585C94.1571 94.8891 94.1572 103.56 94.157 105.588C94.157 106.752 94.4485 108.005 95.3399 108.964C96.224 109.917 97.7757 110.663 100.471 110.663C103.114 110.663 104.668 109.918 105.567 108.962C106.473 107.999 106.786 106.744 106.786 105.588L106.786 74.213C102.639 76.3403 97.2237 77.295 94.157 77.5545Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M107.851 37.9458C104.026 36.8958 99.0254 37.0305 92.5964 39.4796C83.2047 43.0574 79.0121 50.0355 78.0214 52.8094C77.9285 53.0695 77.6424 53.205 77.3824 53.1121C77.1223 53.0193 76.9868 52.7332 77.0797 52.4731C78.154 49.4651 82.5369 42.2417 92.2404 38.5451C98.8208 36.0383 104.042 35.8633 108.116 36.9815C112.19 38.0998 115.066 40.4981 116.979 43.0489C120.801 48.1449 122.72 58.3187 116.343 65.9708C113.217 69.7226 110.053 72.4842 106.451 74.3686C102.847 76.2539 98.8326 77.2463 94.0263 77.4993C93.7505 77.5138 93.5152 77.302 93.5007 77.0263C93.4862 76.7505 93.698 76.5152 93.9737 76.5007C98.6674 76.2536 102.535 75.2883 105.987 73.4825C109.441 71.6757 112.507 69.0127 115.575 65.3306C121.588 58.1148 119.791 48.4647 116.179 43.6489C114.375 41.2437 111.675 38.9957 107.851 37.9458Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M102.207 37.9982C102.242 38.272 102.049 38.5229 101.775 38.5587C90.5949 40.017 83.7331 48.4979 81.7146 52.5348C81.5911 52.7818 81.2908 52.8819 81.0438 52.7584C80.7968 52.635 80.6967 52.3346 80.8202 52.0876C82.9317 47.8646 90.0291 39.0823 101.646 37.5671C101.92 37.5313 102.171 37.7244 102.207 37.9982Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M110.023 43.1773C111.708 42.124 113.928 42.6358 114.981 44.3205C116.034 46.0052 115.522 48.2247 113.838 49.278L109.816 51.7922C108.132 52.8455 105.912 52.3336 104.859 50.649C103.805 48.9643 104.317 46.7448 106.002 45.6915L110.023 43.1773ZM114.133 44.8506C113.372 43.6343 111.77 43.2647 110.554 44.0252L106.532 46.5394C105.316 47.2999 104.946 48.9025 105.707 50.1189C106.467 51.3352 108.07 51.7048 109.286 50.9443L113.308 48.4301C114.524 47.6696 114.893 46.067 114.133 44.8506Z" fill="black"
variant={pathVariants}
/>
<motion.path fillRule="evenodd" clipRule="evenodd" d="M110.023 43.1773C111.708 42.124 113.928 42.6358 114.981 44.3205C116.034 46.0052 115.522 48.2247 113.838 49.278L104.789 54.9354C103.104 55.9887 100.885 55.4769 99.8314 53.7922C98.7781 52.1075 99.2899 49.888 100.975 48.8347L110.023 43.1773ZM114.133 44.8506C113.372 43.6343 111.77 43.2647 110.554 44.0252L101.505 49.6826C100.288 50.4431 99.9188 52.0457 100.679 53.2621C101.44 54.4784 103.042 54.848 104.259 54.0875L113.308 48.4301C114.524 47.6696 114.893 46.067 114.133 44.8506Z" fill="black"
variant={pathVariants}
/>
</motion.svg>


    </div>
  </div>


);
    }
export default Doodles;