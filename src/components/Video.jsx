import "../styles/video.css";
import pexels from "../media/Pexels Videos 2795733.mp4";
const Video = () => {
	return (
		<div className="video-container">
			{/* <iframe
				width="100%"
				height="100%"
				src="https://www.youtube.com/embed/y5vr_Vhoumc?autoplay=1&controls=0&fs=0&"
				title="YouTube video player"
				frameborder="0"
			></iframe> */}
			<video src={pexels} autoplay={true} controls="controls" type="video/mp4" loop={true}></video>
			<div className="motto">
				<h1>
					Release <span>unlimited music</span> everywhere.
				</h1>
				<h3>
					Get started with{" "}
					<a href="https://dittomusic.com/en/">a free 30-day trial</a>
				</h3>
				<button>Start free trial</button>
			</div>
		</div>
	);
};

export default Video;
