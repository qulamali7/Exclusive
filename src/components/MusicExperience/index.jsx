import React from 'react'
import "./index.scss";
const MusicExperince = () => {
    return (
        <>
            <section id="music">
                <div className="music_container">
                    <div className="music_text">
                        <p className="music_text_title">Categories</p>
                        <h3>Enhance Your Music Experience</h3>
                        <div className="music_text_times">
                            <div className="music_text_times_time">
                                <div className="music_text_times_time_content">
                                    <p className="music_text_times_time_content_text">23</p>
                                    <span>Hours</span>
                                </div>
                            </div>
                            <div className="music_text_times_time">
                                <div className="music_text_times_time_content">
                                <p className="music_text_times_time_content_text">05</p>
                                <span>Days</span>
                                </div>
                            </div>
                            <div className="music_text_times_time">
                                <div className="music_text_times_time_content">
                                <p className="music_text_times_time_content_text">59</p>
                                <span>Minutes</span>
                                </div>
                            </div>
                            <div className="music_text_times_time">
                                <div className="music_text_times_time_content">
                                <p className="music_text_times_time_content_text">35</p>
                                <span>Seconds</span>
                                </div>
                            </div>
                        </div>
                        <button>Buy Now</button>
                    </div>
                    <div className="music_img">
                        <div className="blur"></div>
                        <div className="music_img_content">
                            <img src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1703462400&Signature=LwgvMKT11ng-1VTfkz~I7wcxlaUSEHB4Mh2uRnbDEJVGVUQA46NFf57SzM9ykOpkZlSy5IpgSFcTIMdcwCSFFktMScgab5H2Vb5htUycLp07plx59U6DQpM~fucs0qvl6wagJ9-vjCAcLPZg2VLU0R2fjUzEX0o8XopnFoLnTtkjTBOFGCoBK~1t8j-1ath-dyMFpBm-Ghr9N76paPhBobt8SrU3Knmxl47RLZZNqWNY3rlxzqyBZwW-j3Tem53PZ4lyS9cjZB4ySBlcsHHtjc1RoVY3OcI04jv09NfkJt1jHYiteHwWIUtC4h8N9dlVrYrvmKsBVjFBjwHNnsNSkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MusicExperince