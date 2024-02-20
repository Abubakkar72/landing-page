import React, {useEffect} from "react";
import './desktop.scss';

//responsive sidebar start
    const showSidebar = () =>{
        const sidebar = document.querySelector('.sidebar')

        sidebar.style.display = 'flex'
    }

    const hideSidebar = () =>{
        const sidebar = document.querySelector('.sidebar')

        sidebar.style.display = 'none '
    }
//responsive sidebrend

const Desktop = () => {

    //background carosel start
        useEffect(() => {

            const images = ['https://s3-alpha-sig.figma.com/img/754a/f64a/7259f8ece71ae230e41c3a2c6709f5db?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdPPs4~27KInlrnJ~VMFX8d51OZVpIkauu7oHiIydbkM3gCuI2lDigXX64bIksiMDYyBh1nPgheskDzfBcxmxVPgeibtMPc5957Qc5joT0avfe~nO9COT~4QyTKtS3hFhi9o2C5QfoZtBUU60H~ePD-MPF7JteTycegir94wYiXYNd0eekMSq8OKet7Lm4DcMqm8Tfr4-YALN-tJN15nTxWdAeLMuwTjL0VM5iDoFvF95BHmxKeicadh2qjjxx3AIiKPD~QTHQvVsToJO1BDRaXylP2E7qj1Nvs0k6riHjchx3TzWr8B8awo2mD1yT6f5gc4Xe~DuXG7PitKNvYBzA__',
        
            'https://s3-alpha-sig.figma.com/img/40c0/f50b/46b2300f00a14d64a977ec879165fcc1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gxssR2VQMB8TaiYGNMQJwHpdmDGVa8vR2261z9W5Yg0rmLQE-vPvgtBCCIf7brk85TPQB1-S5Cbb4-t3Gtr502iZNP4DqHDUjy1F9MYXGEOcf1N5M5zNJH0goUrhvOQ9szw0N8RiGRsd6Ie~N9QA7nDQiWWmqXFYpMzGpHddjgyDgPrdqZXMU-Db8UL147pEonx6WtyEfUwTEWnTiVovpWpQigzokpxmMuEx1puHV9g1iiA6YmxkhoReQkcyMT4ZGbfQENqsLQrW8mXi20e7FCB-GxHmaEun85m3DpJSxhXe1k2EYzGREgJT11ngbd~xWjMZabtx4icyKiC9-NWM0A__',
        
            'https://s3-alpha-sig.figma.com/img/ebac/526e/044cb65dd089cf0863aeb45d88915340?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QgnRnWtKI54wLZAAVhhTzNFvMbTsfwSuE9L40T~PkDDyphQBgKnE1v00qWyU5jy34pC7cuafvsWNZ37V7~R7q2PsxkKir4lPCyKqGv0fmH~JdcTkmH63BBM~NiCSvpBBcY-1I2Mbk3VKzKo2wg63voh9gsUwYxtCBB95dplq-ty1HPv7pfiIch9wvWBHk12QE~cpEeCcI4HknL6nxFFpqDA00MPzjcKu3wUFDENzWgyZpOvSTTLMDgSnPIhjMz7tvM8Z3WhnjNG1T7TWZbyHXT-CcE3Jn3cpDFLLX1evxV0cL6G~QnH1BR9mcT7A4hE0zXJM6sxyTQO91tF2ZSUGYg__'];
        
        
            let currentImageIndex = 0;
            const carouselContainer = document.getElementById('backgroundCarousel');
        
            function changeBackgroundImage() {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                carouselContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            }
        
            // Auto advance the carousel every 3 seconds
            setInterval(changeBackgroundImage, 3000);
        
            // Show the first image initially
            carouselContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            
        }, []); 
    //background carousel end

    return (
        <div className="desktop">
            {
                <div className="des">
                    {/* Navigation Section */}
                    <div className="navigation">
                        <div className="logo">
                            <svg width="155" height="31" viewBox="0 0 185 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="L1">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7513 7.5H20.2942V19.2742C20.1964 19.2909 20.0991 19.309 20.0023 19.3284L15.8156 8.32328L12.5844 9.55253L16.7781 20.5761C16.7021 20.6216 16.6267 20.6682 16.552 20.7156L8.73086 11.8842L6.14275 14.1762L13.9882 23.0352L13.9535 23.0796L3.58895 17.3678L1.92035 20.3956L12.3243 26.1291C12.2997 26.2034 12.2759 26.278 12.253 26.353L0.490633 24.6666L0 28.0888L10.629 29.6127L0.0322297 31.3464L0.590446 34.7582L12.4167 32.8233L12.4236 32.8421L1.94094 38.6497L3.61631 41.6737L14.1425 35.8421C14.1807 35.8883 14.2192 35.9342 14.2582 35.9797L6.47149 45.1573L9.10763 47.3939L16.8709 38.2439L12.6293 49.469L15.8633 50.691L20.1361 39.3833C20.1887 39.3931 20.2413 39.4025 20.2942 39.4115V51.5H23.7513V39.4115C23.8115 39.4013 23.8715 39.3905 23.9313 39.3792L28.2294 50.6771L31.4606 49.4479L27.1693 38.1677C27.2176 38.1395 27.2657 38.1108 27.3136 38.0818L35.3142 47.1159L37.9024 44.8239L29.9469 35.8408L40.4561 41.6323L42.1247 38.6045L31.6296 32.8208C31.6522 32.7585 31.6742 32.6958 31.6956 32.633L43.5546 34.3332L44.0453 30.911L33.4172 29.3873L44.0131 27.6537L43.4549 24.2419L31.7314 26.16L31.7139 26.1072L42.1044 20.3507L40.429 17.3267L30.0778 23.0614C30.0259 22.995 29.9733 22.9293 29.9199 22.8642L37.574 13.8429L34.9378 11.6063L27.3071 20.6L27.2473 20.5641L31.4161 9.53148L28.1822 8.30948L24.0202 19.3238C23.931 19.3061 23.8413 19.2896 23.7513 19.2742V7.5Z" fill="#6A45FF"/>
                            <path d="M59.7875 22.3438C59.1729 22.3958 58.6104 22.4531 58.1 22.5156C57.5896 22.5677 57.1 22.625 56.6312 22.6875V38.5C57.3187 38.5938 58.0792 38.6771 58.9125 38.75C59.7458 38.8229 60.6521 38.875 61.6312 38.9062C61.9437 38.9271 62.251 38.9375 62.5531 38.9375C62.8552 38.9375 63.1625 38.9375 63.475 38.9375C63.7875 38.9375 64.1 38.9375 64.4125 38.9375C64.725 38.9375 65.0375 38.9271 65.35 38.9062C66.5167 38.875 67.5531 38.8177 68.4594 38.7344C69.376 38.6406 70.2042 38.5208 70.9437 38.375C71.1312 37.3438 71.2875 36.0938 71.4125 34.625H74.975C74.9125 35.7396 74.824 36.8802 74.7094 38.0469C74.5948 39.2031 74.4333 40.3958 74.225 41.625C72.2458 41.9583 70.3604 42.1823 68.5687 42.2969C66.7875 42.4115 65.1104 42.4688 63.5375 42.4688C61.9229 42.4688 60.2146 42.4115 58.4125 42.2969C56.6104 42.1823 54.7354 41.9583 52.7875 41.625V19.5312C54.0271 19.3125 55.225 19.151 56.3812 19.0469C57.5479 18.9323 58.6833 18.8438 59.7875 18.7812V22.3438ZM98.2937 18.3125C99.3354 18.3125 100.346 18.375 101.325 18.5C102.304 18.625 103.221 18.8073 104.075 19.0469C104.929 19.276 105.71 19.5573 106.419 19.8906C107.127 20.2135 107.731 20.5833 108.231 21C108.731 21.4167 109.122 21.875 109.403 22.375C109.684 22.8646 109.825 23.3854 109.825 23.9375V37.3438C109.825 37.8958 109.684 38.4219 109.403 38.9219C109.122 39.4115 108.731 39.8646 108.231 40.2812C107.731 40.6979 107.127 41.0729 106.419 41.4062C105.71 41.7292 104.929 42.0104 104.075 42.25C103.221 42.4792 102.304 42.6562 101.325 42.7812C100.346 42.9062 99.3354 42.9688 98.2937 42.9688C97.2521 42.9688 96.2417 42.9062 95.2625 42.7812C94.2937 42.6562 93.3823 42.4792 92.5281 42.25C91.6844 42.0104 90.9083 41.7292 90.2 41.4062C89.4917 41.0729 88.8823 40.6979 88.3719 40.2812C87.8719 39.8646 87.4812 39.4115 87.2 38.9219C86.9292 38.4219 86.7937 37.8958 86.7937 37.3438V23.9375C86.7937 23.3854 86.9292 22.8646 87.2 22.375C87.4812 21.875 87.8719 21.4167 88.3719 21C88.8823 20.5833 89.4917 20.2135 90.2 19.8906C90.9083 19.5573 91.6844 19.276 92.5281 19.0469C93.3823 18.8073 94.2937 18.625 95.2625 18.5C96.2417 18.375 97.2521 18.3125 98.2937 18.3125ZM105.731 25.125C105.731 24.6771 105.559 24.2552 105.216 23.8594C104.872 23.4531 104.377 23.099 103.731 22.7969C103.096 22.4844 102.32 22.2396 101.403 22.0625C100.486 21.875 99.45 21.7812 98.2937 21.7812C97.1792 21.7812 96.1687 21.8698 95.2625 22.0469C94.3562 22.2135 93.575 22.4479 92.9187 22.75C92.2729 23.0521 91.7729 23.4062 91.4187 23.8125C91.0646 24.2188 90.8875 24.6562 90.8875 25.125V36.1562C90.8875 36.6146 91.0646 37.0469 91.4187 37.4531C91.7729 37.8594 92.2729 38.2135 92.9187 38.5156C93.575 38.8177 94.3562 39.0573 95.2625 39.2344C96.1687 39.4115 97.1792 39.5 98.2937 39.5C99.45 39.5 100.486 39.4115 101.403 39.2344C102.32 39.0469 103.096 38.7969 103.731 38.4844C104.377 38.1719 104.872 37.8177 105.216 37.4219C105.559 37.0156 105.731 36.5938 105.731 36.1562V25.125ZM134.612 18.6875C136.185 18.6875 137.67 18.8281 139.066 19.1094C140.461 19.3906 141.68 19.7812 142.722 20.2812C143.774 20.7812 144.607 21.3802 145.222 22.0781C145.836 22.776 146.144 23.5417 146.144 24.375V26.9062H142.081V25.5625C142.081 25.1146 141.909 24.6875 141.566 24.2812C141.222 23.875 140.727 23.5156 140.081 23.2031C139.446 22.8906 138.665 22.6458 137.737 22.4688C136.821 22.2812 135.779 22.1875 134.612 22.1875C133.487 22.1875 132.467 22.276 131.55 22.4531C130.633 22.6302 129.847 22.8698 129.191 23.1719C128.534 23.474 128.029 23.8333 127.675 24.25C127.321 24.6562 127.144 25.0938 127.144 25.5625V35.6875C127.144 36.1458 127.321 36.5833 127.675 37C128.029 37.4062 128.534 37.7656 129.191 38.0781C129.847 38.3802 130.633 38.6198 131.55 38.7969C132.467 38.974 133.487 39.0625 134.612 39.0625C135.779 39.0625 136.821 38.974 137.737 38.7969C138.665 38.6094 139.446 38.3594 140.081 38.0469C140.727 37.7344 141.222 37.375 141.566 36.9688C141.909 36.5625 142.081 36.1354 142.081 35.6875V33.4375C141.112 33.4375 140.243 33.4635 139.472 33.5156C138.711 33.5677 138.06 33.6198 137.519 33.6719C136.883 33.7448 136.321 33.8229 135.831 33.9062L136.237 30.125C137.831 30 139.331 29.9375 140.737 29.9375C142.623 29.9375 144.425 30.0312 146.144 30.2188V36.875C146.144 37.7083 145.836 38.474 145.222 39.1719C144.607 39.8594 143.774 40.4531 142.722 40.9531C141.68 41.4531 140.461 41.8438 139.066 42.125C137.67 42.3958 136.185 42.5312 134.612 42.5312C133.04 42.5312 131.555 42.3958 130.159 42.125C128.764 41.8438 127.54 41.4531 126.487 40.9531C125.446 40.4531 124.618 39.8594 124.003 39.1719C123.389 38.474 123.081 37.7083 123.081 36.875V24.375C123.081 23.5417 123.389 22.776 124.003 22.0781C124.618 21.3802 125.446 20.7812 126.487 20.2812C127.54 19.7812 128.764 19.3906 130.159 19.1094C131.555 18.8281 133.04 18.6875 134.612 18.6875ZM171.181 18.3125C172.223 18.3125 173.233 18.375 174.213 18.5C175.192 18.625 176.108 18.8073 176.963 19.0469C177.817 19.276 178.598 19.5573 179.306 19.8906C180.015 20.2135 180.619 20.5833 181.119 21C181.619 21.4167 182.009 21.875 182.291 22.375C182.572 22.8646 182.713 23.3854 182.713 23.9375V37.3438C182.713 37.8958 182.572 38.4219 182.291 38.9219C182.009 39.4115 181.619 39.8646 181.119 40.2812C180.619 40.6979 180.015 41.0729 179.306 41.4062C178.598 41.7292 177.817 42.0104 176.963 42.25C176.108 42.4792 175.192 42.6562 174.213 42.7812C173.233 42.9062 172.223 42.9688 171.181 42.9688C170.14 42.9688 169.129 42.9062 168.15 42.7812C167.181 42.6562 166.27 42.4792 165.416 42.25C164.572 42.0104 163.796 41.7292 163.088 41.4062C162.379 41.0729 161.77 40.6979 161.259 40.2812C160.759 39.8646 160.369 39.4115 160.088 38.9219C159.817 38.4219 159.681 37.8958 159.681 37.3438V23.9375C159.681 23.3854 159.817 22.8646 160.088 22.375C160.369 21.875 160.759 21.4167 161.259 21C161.77 20.5833 162.379 20.2135 163.088 19.8906C163.796 19.5573 164.572 19.276 165.416 19.0469C166.27 18.8073 167.181 18.625 168.15 18.5C169.129 18.375 170.14 18.3125 171.181 18.3125ZM178.619 25.125C178.619 24.6771 178.447 24.2552 178.103 23.8594C177.759 23.4531 177.265 23.099 176.619 22.7969C175.983 22.4844 175.207 22.2396 174.291 22.0625C173.374 21.875 172.338 21.7812 171.181 21.7812C170.067 21.7812 169.056 21.8698 168.15 22.0469C167.244 22.2135 166.463 22.4479 165.806 22.75C165.16 23.0521 164.66 23.4062 164.306 23.8125C163.952 24.2188 163.775 24.6562 163.775 25.125V36.1562C163.775 36.6146 163.952 37.0469 164.306 37.4531C164.66 37.8594 165.16 38.2135 165.806 38.5156C166.463 38.8177 167.244 39.0573 168.15 39.2344C169.056 39.4115 170.067 39.5 171.181 39.5C172.338 39.5 173.374 39.4115 174.291 39.2344C175.207 39.0469 175.983 38.7969 176.619 38.4844C177.265 38.1719 177.759 37.8177 178.103 37.4219C178.447 37.0156 178.619 36.5938 178.619 36.1562V25.125Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="frame">
                            <span className="hideOnMobile">Home</span>
                            <span className="hideOnMobile">Page 1</span>
                            <span className="hideOnMobile">Page2</span>
                        </div>
                        <div className="sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-x" viewBox="0 0 16 16" onClick={hideSidebar}>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <span>Home</span>
                            <span>Page 1</span>
                            <span>Page2</span>
                        </div>
                        <div className="logo4" onClick={showSidebar}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>

                    {/* Hero Section*/}
                    <div className="hero" id="backgroundCarousel">
                        <div className="rectangle">
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className="logo2">
                            <svg width="549" height="145" viewBox="0 0 265 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="L2">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.3314 0.249512H32.851V18.9147C32.6959 18.9411 32.5416 18.9698 32.388 19.0006L25.7514 1.55539L20.6291 3.50405L27.2769 20.9785C27.1564 21.0507 27.0368 21.1245 26.9183 21.1998L14.5203 7.20028L10.4175 10.8337L22.8542 24.8769L22.7994 24.9471L6.3691 15.8925L3.72398 20.6923L20.2167 29.7813C20.1777 29.8991 20.14 30.0175 20.1036 30.1364L1.45746 27.4631L0.679688 32.888L17.5294 35.3038L0.730951 38.0522L1.61586 43.4607L20.3633 40.3934L20.3744 40.424L3.75673 49.6304L6.4126 54.4243L23.0996 45.1794C23.16 45.2525 23.221 45.3251 23.2826 45.3971L10.9388 59.9458L15.1177 63.4914L27.4236 48.9874L20.7003 66.78L25.8269 68.7171L32.6002 50.7923C32.6835 50.8079 32.7671 50.8228 32.851 50.8371V69.9999H38.3314V50.837C38.4267 50.8208 38.5217 50.8037 38.6165 50.7858L45.4302 68.6963L50.5524 66.7477L43.7495 48.8654C43.8261 48.8207 43.9022 48.7753 43.978 48.7294L56.6613 63.051L60.764 59.4175L48.1518 45.1761L64.8122 54.3575L67.4574 49.5577L50.8203 40.3892C50.856 40.2904 50.8908 40.1913 50.9247 40.0916L69.7241 42.7869L70.5019 37.362L53.654 34.9465L70.451 32.1983L69.5661 26.7898L50.9816 29.8305L50.9541 29.7476L67.4253 20.6223L64.7694 15.8284L48.3608 24.9191C48.2785 24.8136 48.1949 24.7092 48.11 24.6059L60.2436 10.3051L56.0646 6.75952L43.9683 21.0165C43.9366 20.9973 43.9049 20.9783 43.8731 20.9593L50.4819 3.46948L45.3553 1.53231L38.7574 18.9933C38.616 18.9652 38.474 18.9391 38.3314 18.9147V0.249512Z" fill="#6A45FF"/>
    <path d="M100.924 28.7632C100.233 28.8218 99.6003 28.8862 99.026 28.9565C98.4518 29.0151 97.901 29.0796 97.3737 29.1499V46.939C98.1471 47.0444 99.0026 47.1382 99.9401 47.2202C100.878 47.3022 101.897 47.3608 102.999 47.396C103.35 47.4194 103.696 47.4312 104.036 47.4312C104.376 47.4312 104.721 47.4312 105.073 47.4312C105.424 47.4312 105.776 47.4312 106.128 47.4312C106.479 47.4312 106.831 47.4194 107.182 47.396C108.495 47.3608 109.661 47.2964 110.68 47.2026C111.712 47.0972 112.643 46.9624 113.475 46.7983C113.686 45.6382 113.862 44.2319 114.003 42.5796H118.01C117.94 43.8335 117.84 45.1167 117.712 46.4292C117.583 47.73 117.401 49.0718 117.167 50.4546C114.94 50.8296 112.819 51.0815 110.803 51.2104C108.799 51.3394 106.913 51.4038 105.143 51.4038C103.327 51.4038 101.405 51.3394 99.3776 51.2104C97.3503 51.0815 95.2409 50.8296 93.0495 50.4546V25.5991C94.444 25.353 95.7917 25.1714 97.0925 25.0542C98.405 24.9253 99.6823 24.8257 100.924 24.7554V28.7632ZM150.724 24.228C151.896 24.228 153.033 24.2983 154.134 24.439C155.236 24.5796 156.267 24.7847 157.228 25.0542C158.189 25.312 159.068 25.6284 159.865 26.0034C160.662 26.3667 161.341 26.7827 161.904 27.2515C162.466 27.7202 162.906 28.2358 163.222 28.7983C163.538 29.3491 163.697 29.9351 163.697 30.5562V45.6382C163.697 46.2593 163.538 46.8511 163.222 47.4136C162.906 47.9644 162.466 48.4741 161.904 48.9429C161.341 49.4116 160.662 49.8335 159.865 50.2085C159.068 50.5718 158.189 50.8882 157.228 51.1577C156.267 51.4155 155.236 51.6147 154.134 51.7554C153.033 51.896 151.896 51.9663 150.724 51.9663C149.552 51.9663 148.415 51.896 147.314 51.7554C146.224 51.6147 145.199 51.4155 144.238 51.1577C143.288 50.8882 142.415 50.5718 141.619 50.2085C140.822 49.8335 140.136 49.4116 139.562 48.9429C138.999 48.4741 138.56 47.9644 138.244 47.4136C137.939 46.8511 137.787 46.2593 137.787 45.6382V30.5562C137.787 29.9351 137.939 29.3491 138.244 28.7983C138.56 28.2358 138.999 27.7202 139.562 27.2515C140.136 26.7827 140.822 26.3667 141.619 26.0034C142.415 25.6284 143.288 25.312 144.238 25.0542C145.199 24.7847 146.224 24.5796 147.314 24.439C148.415 24.2983 149.552 24.228 150.724 24.228ZM159.091 31.8921C159.091 31.3882 158.898 30.9136 158.511 30.4683C158.124 30.0112 157.568 29.6128 156.841 29.2729C156.126 28.9214 155.253 28.646 154.222 28.4468C153.191 28.2358 152.025 28.1304 150.724 28.1304C149.47 28.1304 148.333 28.23 147.314 28.4292C146.294 28.6167 145.415 28.8804 144.677 29.2202C143.951 29.5601 143.388 29.9585 142.99 30.4155C142.591 30.8726 142.392 31.3647 142.392 31.8921V44.3022C142.392 44.8179 142.591 45.3042 142.99 45.7612C143.388 46.2183 143.951 46.6167 144.677 46.9565C145.415 47.2964 146.294 47.5659 147.314 47.7651C148.333 47.9644 149.47 48.064 150.724 48.064C152.025 48.064 153.191 47.9644 154.222 47.7651C155.253 47.5542 156.126 47.2729 156.841 46.9214C157.568 46.5698 158.124 46.1714 158.511 45.7261C158.898 45.269 159.091 44.7944 159.091 44.3022V31.8921ZM198.063 24.6499C199.832 24.6499 201.502 24.8081 203.072 25.1245C204.643 25.4409 206.014 25.8804 207.186 26.4429C208.369 27.0054 209.307 27.6792 209.998 28.4644C210.69 29.2495 211.035 30.1108 211.035 31.0483V33.896H206.465V32.3843C206.465 31.8804 206.272 31.3999 205.885 30.9429C205.498 30.4858 204.942 30.0815 204.215 29.73C203.5 29.3784 202.621 29.103 201.578 28.9038C200.547 28.6929 199.375 28.5874 198.063 28.5874C196.797 28.5874 195.649 28.687 194.617 28.8862C193.586 29.0854 192.701 29.355 191.963 29.6948C191.225 30.0347 190.656 30.439 190.258 30.9077C189.859 31.3647 189.66 31.8569 189.66 32.3843V43.7749C189.66 44.2905 189.859 44.7827 190.258 45.2515C190.656 45.7085 191.225 46.1128 191.963 46.4644C192.701 46.8042 193.586 47.0737 194.617 47.2729C195.649 47.4722 196.797 47.5718 198.063 47.5718C199.375 47.5718 200.547 47.4722 201.578 47.2729C202.621 47.062 203.5 46.7808 204.215 46.4292C204.942 46.0776 205.498 45.6733 205.885 45.2163C206.272 44.7593 206.465 44.2788 206.465 43.7749V41.2437C205.375 41.2437 204.397 41.2729 203.529 41.3315C202.674 41.3901 201.942 41.4487 201.332 41.5073C200.617 41.5894 199.984 41.6772 199.434 41.771L199.891 37.5171C201.684 37.3765 203.371 37.3062 204.953 37.3062C207.074 37.3062 209.102 37.4116 211.035 37.6226V45.1108C211.035 46.0483 210.69 46.9097 209.998 47.6948C209.307 48.4683 208.369 49.1362 207.186 49.6987C206.014 50.2612 204.643 50.7007 203.072 51.0171C201.502 51.3218 199.832 51.4741 198.063 51.4741C196.293 51.4741 194.623 51.3218 193.053 51.0171C191.483 50.7007 190.106 50.2612 188.922 49.6987C187.75 49.1362 186.818 48.4683 186.127 47.6948C185.436 46.9097 185.09 46.0483 185.09 45.1108V31.0483C185.09 30.1108 185.436 29.2495 186.127 28.4644C186.818 27.6792 187.75 27.0054 188.922 26.4429C190.106 25.8804 191.483 25.4409 193.053 25.1245C194.623 24.8081 196.293 24.6499 198.063 24.6499ZM245.682 24.228C246.854 24.228 247.991 24.2983 249.093 24.439C250.194 24.5796 251.225 24.7847 252.186 25.0542C253.147 25.312 254.026 25.6284 254.823 26.0034C255.62 26.3667 256.3 26.7827 256.862 27.2515C257.425 27.7202 257.864 28.2358 258.18 28.7983C258.497 29.3491 258.655 29.9351 258.655 30.5562V45.6382C258.655 46.2593 258.497 46.8511 258.18 47.4136C257.864 47.9644 257.425 48.4741 256.862 48.9429C256.3 49.4116 255.62 49.8335 254.823 50.2085C254.026 50.5718 253.147 50.8882 252.186 51.1577C251.225 51.4155 250.194 51.6147 249.093 51.7554C247.991 51.896 246.854 51.9663 245.682 51.9663C244.511 51.9663 243.374 51.896 242.272 51.7554C241.182 51.6147 240.157 51.4155 239.196 51.1577C238.247 50.8882 237.374 50.5718 236.577 50.2085C235.78 49.8335 235.095 49.4116 234.52 48.9429C233.958 48.4741 233.518 47.9644 233.202 47.4136C232.897 46.8511 232.745 46.2593 232.745 45.6382V30.5562C232.745 29.9351 232.897 29.3491 233.202 28.7983C233.518 28.2358 233.958 27.7202 234.52 27.2515C235.095 26.7827 235.78 26.3667 236.577 26.0034C237.374 25.6284 238.247 25.312 239.196 25.0542C240.157 24.7847 241.182 24.5796 242.272 24.439C243.374 24.2983 244.511 24.228 245.682 24.228ZM254.05 31.8921C254.05 31.3882 253.856 30.9136 253.47 30.4683C253.083 30.0112 252.526 29.6128 251.8 29.2729C251.085 28.9214 250.212 28.646 249.18 28.4468C248.149 28.2358 246.983 28.1304 245.682 28.1304C244.429 28.1304 243.292 28.23 242.272 28.4292C241.253 28.6167 240.374 28.8804 239.636 29.2202C238.909 29.5601 238.347 29.9585 237.948 30.4155C237.55 30.8726 237.35 31.3647 237.35 31.8921V44.3022C237.35 44.8179 237.55 45.3042 237.948 45.7612C238.347 46.2183 238.909 46.6167 239.636 46.9565C240.374 47.2964 241.253 47.5659 242.272 47.7651C243.292 47.9644 244.429 48.064 245.682 48.064C246.983 48.064 248.149 47.9644 249.18 47.7651C250.212 47.5542 251.085 47.2729 251.8 46.9214C252.526 46.5698 253.083 46.1714 253.47 45.7261C253.856 45.269 254.05 44.7944 254.05 44.3022V31.8921Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="bodyL">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor<br/> ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className="frame25">
                            <svg width="66" height="98" viewBox="0 0 66 98" fill="none" xmlns="http://www.w3.org/2000/svg" className="L3">
                            <path d="M7.40313 16.488C7.40313 17.064 7.26446 17.5547 6.98713 17.96C6.70979 18.3547 6.29913 18.6533 5.75513 18.856C5.22179 19.0587 4.56579 19.16 3.78713 19.16C3.17913 19.16 2.65646 19.1173 2.21913 19.032C1.78179 18.9467 1.36579 18.8133 0.971125 18.632V16.92C1.39779 17.1227 1.87246 17.2933 2.39513 17.432C2.91779 17.5707 3.40313 17.64 3.85113 17.64C4.40579 17.64 4.80579 17.5547 5.05113 17.384C5.29646 17.2133 5.41913 16.984 5.41913 16.696C5.41913 16.5253 5.37113 16.3707 5.27513 16.232C5.17913 16.0933 4.99246 15.9493 4.71513 15.8C4.43779 15.64 4.01646 15.4427 3.45113 15.208C2.89646 14.984 2.43246 14.76 2.05913 14.536C1.69646 14.312 1.41913 14.0453 1.22713 13.736C1.04579 13.416 0.955125 13.016 0.955125 12.536C0.955125 11.7573 1.26446 11.1707 1.88313 10.776C2.50179 10.3707 3.31779 10.168 4.33113 10.168C4.86446 10.168 5.36579 10.2213 5.83513 10.328C6.31513 10.424 6.79513 10.584 7.27513 10.808L6.63513 12.296C6.36846 12.1787 6.10179 12.0773 5.83513 11.992C5.57913 11.896 5.31779 11.8213 5.05113 11.768C4.79513 11.7147 4.53379 11.688 4.26713 11.688C3.82979 11.688 3.49913 11.7573 3.27513 11.896C3.05113 12.024 2.93913 12.2053 2.93913 12.44C2.93913 12.6213 2.99246 12.7813 3.09913 12.92C3.21646 13.048 3.41379 13.1813 3.69113 13.32C3.97913 13.448 4.38446 13.6187 4.90712 13.832C5.42979 14.0347 5.87246 14.248 6.23513 14.472C6.60846 14.6853 6.89646 14.952 7.09913 15.272C7.30179 15.592 7.40313 15.9973 7.40313 16.488ZM17.6469 19.16C16.8255 19.16 16.1109 19.0053 15.5029 18.696C14.9055 18.376 14.4415 17.8907 14.1109 17.24C13.7909 16.5787 13.6309 15.736 13.6309 14.712C13.6309 13.6453 13.8069 12.7813 14.1589 12.12C14.5215 11.448 15.0175 10.9573 15.6469 10.648C16.2762 10.328 16.9962 10.168 17.8069 10.168C18.3509 10.168 18.8362 10.2213 19.2629 10.328C19.6895 10.4347 20.0522 10.5627 20.3509 10.712L19.7589 12.296C19.4282 12.168 19.0975 12.0613 18.7669 11.976C18.4362 11.88 18.1162 11.832 17.8069 11.832C17.3269 11.832 16.9269 11.9387 16.6069 12.152C16.2975 12.3653 16.0682 12.6853 15.9189 13.112C15.7695 13.528 15.6949 14.056 15.6949 14.696C15.6949 15.3147 15.7695 15.832 15.9189 16.248C16.0789 16.664 16.3135 16.9787 16.6229 17.192C16.9322 17.3947 17.3162 17.496 17.7749 17.496C18.2655 17.496 18.6975 17.4373 19.0709 17.32C19.4442 17.2027 19.7962 17.0427 20.1269 16.84V18.584C19.7962 18.7867 19.4389 18.9307 19.0549 19.016C18.6815 19.112 18.2122 19.16 17.6469 19.16ZM31.5025 10.168C31.6305 10.168 31.7798 10.1733 31.9505 10.184C32.1212 10.1947 32.2652 10.216 32.3825 10.248L32.2065 12.12C32.1105 12.0987 31.9825 12.0827 31.8225 12.072C31.6732 12.0507 31.5398 12.04 31.4225 12.04C31.1025 12.04 30.7932 12.0933 30.4945 12.2C30.2065 12.296 29.9452 12.4453 29.7105 12.648C29.4865 12.84 29.3052 13.0907 29.1665 13.4C29.0385 13.7093 28.9745 14.0773 28.9745 14.504V19H26.9585V10.328H28.5105L28.7985 11.832H28.8945C29.0652 11.5227 29.2785 11.2453 29.5345 11C29.7905 10.744 30.0838 10.5413 30.4145 10.392C30.7558 10.2427 31.1185 10.168 31.5025 10.168ZM46.2213 14.648C46.2213 15.3733 46.1253 16.0133 45.9333 16.568C45.7413 17.1227 45.4639 17.5973 45.1013 17.992C44.7493 18.376 44.3119 18.6693 43.7893 18.872C43.2773 19.064 42.7066 19.16 42.0773 19.16C41.4799 19.16 40.9306 19.064 40.4293 18.872C39.9279 18.6693 39.4906 18.376 39.1173 17.992C38.7546 17.5973 38.4719 17.1227 38.2693 16.568C38.0666 16.0133 37.9653 15.3733 37.9653 14.648C37.9653 13.688 38.1306 12.8773 38.4613 12.216C38.7919 11.544 39.2666 11.0373 39.8853 10.696C40.5146 10.344 41.2559 10.168 42.1093 10.168C42.9199 10.168 43.6293 10.344 44.2373 10.696C44.8559 11.0373 45.3413 11.544 45.6933 12.216C46.0453 12.8773 46.2213 13.688 46.2213 14.648ZM40.0293 14.648C40.0293 15.256 40.0986 15.7787 40.2373 16.216C40.3866 16.6427 40.6106 16.968 40.9093 17.192C41.2186 17.416 41.6133 17.528 42.0933 17.528C42.5839 17.528 42.9786 17.416 43.2773 17.192C43.5866 16.968 43.8106 16.6427 43.9493 16.216C44.0879 15.7787 44.1573 15.256 44.1573 14.648C44.1573 14.0293 44.0826 13.512 43.9333 13.096C43.7946 12.6693 43.5706 12.3493 43.2613 12.136C42.9626 11.912 42.5733 11.8 42.0933 11.8C41.3679 11.8 40.8399 12.0453 40.5093 12.536C40.1893 13.0267 40.0293 13.7307 40.0293 14.648ZM55.1214 19H53.1054V6.84H55.1214V19ZM64.5151 19H62.4991V6.84H64.5151V19Z" fill="white"/>
                            <path d="M33 34V98" stroke="white"/>
                            </svg>

                        </div>
                    </div> 

                    {/* BodyL Section */}
                    <div className="bodyG">
                        <div className="rectangle2">
                            <div className="frame16">
                                <p>LOREM</p>
                                <span>S u b t i t l e</span>
                            </div>
                        </div>

                        <div className="frame17">
                            <div className="rectangle3">
                                <span className="number">01</span>
                                <span className="title">L o r e m i p s u m d o l o r s i t</span>
                                <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                            <div className="rectangle4">
                                <span className="number">02</span>
                                <span className="title">L o r e m i p s u m d o l o r s i t</span>
                                <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                            <div className="rectangle5">
                                <span className="number">03</span>
                                <span className="title">L o r e m i p s u m d o l o r s i t</span>
                                <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        </div>
                        
                    </div>

                    {/* BodyE Section */}
                    <div className="bodyE">
                        <div className="rectangle6">
                            <div className="rectangle7">

                            </div>
                        </div>

                        <div className="frame23">
                            <div className="frame20">
                                    <span>Lorem ipsum</span>
                            </div>
                            <div className="frd">
                                <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan convallis
                                        sem, nec consequat ligula efficitur in. Nullam sed justo felis. Ut euismod leo sit
                                        amet ipsum molestie, at convallis eros sollicitudin. Donec non faucibus risus.
                                        Vestibulum fermentum accumsan metus sit amet posuere.
                                </span>
                            </div>
                            
                            <div className="frame19">
                                <span>Lorum ipsum</span>
                                <div className="arrow">
                                    <div className="vector">
                                        {/* <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M51.25 26.5C51.25 40.4452 39.9452 51.75 26 51.75C12.0548 51.75 0.75 40.4452 0.75 26.5C0.75 12.5548 12.0548 1.25 26 1.25C39.9452 1.25 51.25 12.5548 51.25 26.5Z" stroke="#6A45FF" stroke-width="1.5"/>
                                        </svg> */}
                                    </div>
                                    <div className="eclipse">
                                        <svg width="48" height="48" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="L3">
                                        <g clip-path="url(#clip0_1070_258)">
                                        <path d="M51.25 26.5C51.25 40.4452 39.9452 51.75 26 51.75C12.0548 51.75 0.75 40.4452 0.75 26.5C0.75 12.5548 12.0548 1.25 26 1.25C39.9452 1.25 51.25 12.5548 51.25 26.5Z" stroke="#6A45FF" stroke-width="1.5"/>
                                        <path d="M16 26.5L36 26.5M36 26.5L28.5 34.5M36 26.5L28.5 18.5" stroke="#6A45FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1070_258">
                                        <rect width="52" height="52" fill="white" transform="translate(52 0.5) rotate(90)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BodyF Section */}
                    <div className="bodyF">
                        <div className="group">
                            <div class="triangle"></div>
                            <div class="triangle"></div>
                            <div class="triangle"></div>
                            <div class="triangle"></div>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className="footer">
                        <div className="frame24">
                            <span>Home</span>
                            <span>Page1</span>
                            <span>Page2</span>
                        </div>

                        <div className="media">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#FFFFFF" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#FFFFFF" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#FFFFFF" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#FFFFFF" class="bi bi-tiktok" viewBox="0 0 16 16">
                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                            </svg>
                        </div>

                        <span>&copy; Logo, Inc.</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default Desktop;