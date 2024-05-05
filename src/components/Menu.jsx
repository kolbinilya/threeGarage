import React from 'react';

const Menu = ({car ,setCar, rotate, setRotate}) => {
	return (
			<nav className='bg-transparent text-black flex gap-4 p-4 justify-between items-center absolute top-0 left-0 right-0 z-10'>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 64 64" id="mb-stern_x5F_10">
						<linearGradient id="outer_1_" gradientUnits="userSpaceOnUse" x1="7.998" y1="54.102" x2="56.002" y2="13.898"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset="0" stopColor="#ffffff"/>
							<stop offset=".1" stopColor="#e7e8e6"/>
							<stop offset=".1" stopColor="#cdd0d0"/>
							<stop offset=".2" stopColor="#b5bbbd"/>
							<stop offset=".2" stopColor="#a5acaf"/>
							<stop offset=".3" stopColor="#9ba3a7"/>
							<stop offset=".3" stopColor="#98a0a4"/>
							<stop offset=".4" stopColor="#828a8f"/>
							<stop offset=".5" stopColor="#667075"/>
							<stop offset=".6" stopColor="#535c63"/>
							<stop offset=".7" stopColor="#475158"/>
							<stop offset=".8" stopColor="#475157"/>
						</linearGradient>
						<path id="outer_24_" className="st0"
									d="M63.3 32c0 17.3-14 31.3-31.3 31.3S.7 49.3.7 32 14.7.7 32 .7s31.3 14 31.3 31.3zM32 2.6C15.7 2.6 2.6 15.7 2.6 32S15.8 61.4 32 61.4c16.3 0 29.4-13.2 29.4-29.4C61.4 15.7 48.3 2.6 32 2.6z"/>
						<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="9.471" y1="52.941" x2="54.471" y2="15.141"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset="0" stopColor="#0b1f2a"/>
							<stop offset=".2" stopColor="#333f47"/>
							<stop offset=".5" stopColor="#777f84"/>
							<stop offset=".5" stopColor="#81898d"/>
							<stop offset=".7" stopColor="#b3b8b8"/>
							<stop offset=".8" stopColor="#d2d5d3"/>
							<stop offset=".8" stopColor="#dee0dd"/>
							<stop offset="1" stopColor="#fbfbfb"/>
						</linearGradient>
						<path className="st1"
									d="M32 2.6C15.7 2.6 2.6 15.7 2.6 32S15.8 61.4 32 61.4c16.3 0 29.4-13.2 29.4-29.4C61.4 15.7 48.3 2.6 32 2.6zm0 56.9C16.8 59.5 4.5 47.2 4.5 32S16.8 4.5 32 4.5 59.5 16.8 59.5 32 47.2 59.5 32 59.5z"/>
						<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="1648.736" y1="-160.944" x2="1670.636"
														y2="-221.143" gradientTransform="matrix(-1 0 0 1 1691.673 223.007)">
							<stop offset="0" stopColor="#e1e3e1"/>
							<stop offset=".1" stopColor="#c1c5c4"/>
							<stop offset=".3" stopColor="#9ba1a2"/>
							<stop offset=".5" stopColor="#7d8487"/>
							<stop offset=".7" stopColor="#687074" stopOpacity="0"/>
							<stop offset=".8" stopColor="#5b6469" stopOpacity="0"/>
							<stop offset="1" stopColor="#576065" stopOpacity="0"/>
						</linearGradient>
						<path className="st2"
									d="M32 63.3c17.3 0 31.3-14 31.3-31.3S49.3.7 32 .7.7 14.7.7 32s14 31.3 31.3 31.3zM32 0c17.6 0 32 14.4 32 32S49.6 64 32 64 0 49.6 0 32 14.4 0 32 0z"/>
						<path className="st3"
									d="M2.2 32.1C2.2 15.7 15.5 2.2 32 2.2s29.8 13.4 29.8 29.9c0 16.4-13.3 29.7-29.8 29.7S2.2 48.5 2.2 32.1zm9.3-20.6c-5.3 5.3-8.6 12.6-8.6 20.6 0 8 3.3 15.3 8.5 20.5 5.3 5.2 12.6 8.5 20.6 8.5 8 0 15.3-3.2 20.5-8.5 5.3-5.2 8.5-12.5 8.5-20.5s-3.3-15.3-8.5-20.6C47.3 6.2 40 2.9 32 2.9s-15.3 3.3-20.5 8.6z"/>
						<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="18.201" y1="57.899" x2="45.799" y2="10.101"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset="0" stopColor="#e1e3e1"/>
							<stop offset=".1" stopColor="#c1c5c4"/>
							<stop offset=".3" stopColor="#9ba1a2"/>
							<stop offset=".5" stopColor="#7d8487"/>
							<stop offset=".7" stopColor="#687074" stopOpacity="0"/>
							<stop offset=".8" stopColor="#5b6469" stopOpacity="0"/>
							<stop offset="1" stopColor="#576065" stopOpacity="0"/>
						</linearGradient>
						<path className="st4"
									d="M32 59.6c-7.4 0-14.3-2.9-19.5-8.1S4.4 39.4 4.4 32s2.9-14.3 8.1-19.5S24.6 4.4 32 4.4s14.3 2.9 19.5 8.1 8.1 12.1 8.1 19.5-2.9 14.3-8.1 19.5-12.1 8.1-19.5 8.1zm0-.8c7.1 0 13.9-2.8 18.9-7.8 5.1-5.1 7.8-11.8 7.8-18.9s-2.8-13.9-7.8-18.9C45.8 8.1 39.1 5.4 32 5.4s-13.9 2.8-18.9 7.8C8 18.1 5.2 24.9 5.2 32S8 45.9 13 50.9c5.1 5.1 11.9 7.9 19 7.9z"/>
						<path className="st3"
									d="M56.3 45c-.5-.4-19.8-15.7-19.8-15.7L32 3.6c-.3.1-.7.4-.9.8l-3.2 25L8 44.7s-.4.5-.6.8c-.1.2-.1.5-.1.8l24.6-10.1 24.6 10.1c.2-.5 0-1-.2-1.3z"/>
						<path className="st5" d="M32.2 32.8l-.2 4.6 22.6 9.1c.8.4 1.4.2 2-.2L32.5 32.7c-.1-.1-.3 0-.3.1z"/>
						<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="44.488" y1="26.607" x2="42.788" y2="23.807"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset="0" stopColor="#27343c"/>
							<stop offset="1" stopColor="#00111e" stopOpacity="0"/>
						</linearGradient>
						<path className="st6"
									d="M32.2 32.8s1.3 2.3 2.8 3.9c2.1 2.3 4.9 3.9 4.9 3.9l14.7 5.9c.8.4 1.4.2 2-.2L32.5 32.7c-.1-.1-.3 0-.3.1z"/>
						<path className="st7"
									d="M56.5 45.4c0-.1-.1-.2-.2-.4L35.7 29.9l-2.8 1.8s.2.1.3 0c.3-.1.9-.2 1.5 0 .5.2 21.8 13.8 21.8 13.7 0 .1 0 .1 0 0z"/>
						<path className="st8" d="M55.8 44.5L36.6 29.3l-.9.6 20.6 15.2c-.1-.2-.3-.4-.5-.6z"/>
						<path className="st5"
									d="M32.5 31.3l-.1.1s0 .2.2.1c.1-.1 3-1.6 4-2.2l-3.5-24c-.1-.9-.5-1.3-1.2-1.6l.4 27.8.2-.2z"/>
						<path className="st7"
									d="M30.8 5.3v1.3l-2.2 22.1c0 .3.1.6.4.8l1.3 1 .9-24.4.1-1.9c-.3.2-.4.6-.5 1.1zM29.6 30.9l-1.2-1L8.1 44.6s-.6.4-.7.8l.7-.4 21.3-13.4c.4-.2.5-.4.2-.7z"/>
						<path className="st5" d="M31.7 32.8c0-.1-.1-.2-.2-.1L7.3 46.4c.6.4 1.2.5 2 .2l22.6-9.1-.2-4.7z"/>
						<linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="39.58" y1="36.888" x2="36.78" y2="41.388"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset=".1" stopColor="#02131f"/>
							<stop offset=".9" stopColor="#02131f" stopOpacity="0"/>
						</linearGradient>
						<path className="st9"
									d="M32.4 31.4l.1-.1-.1.1s0 .1.1.1h.1c.1-.1 3-1.6 4-2.2l-.4-2.9-3.1-21.1c0-.4-.1-.7-.3-.9 0 0 1.5 20.2 1.5 22.4 0 2.9-1.9 4.6-1.9 4.6z"/>
						<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="31.982" y1="29.664" x2="27.782" y2="28.464"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset=".2" stopColor="#02131f"/>
							<stop offset=".9" stopColor="#02131f" stopOpacity="0"/>
						</linearGradient>
						<path className="st10" d="M31.7 32.8c0-.1-.1-.2-.2-.1L7.3 46.4c.6.4 1.2.5 2 .2l22.6-9.1-.2-4.7z"/>
						<linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="20.791" y1="24.096" x2="20.191" y2="25.596"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset="0" stopColor="#02131f"/>
							<stop offset=".1" stopColor="#02131f" stopOpacity="0"/>
						</linearGradient>
						<path className="st11"
									d="M9.3 46.5l22.6-9.1-.2-4.4c-.4 1.2-1.1 2.5-3 3.5-1.4.8-14.8 7.4-19.6 9.7-.3.2-.7.3-.9.4.4.2.7.1 1.1-.1z"/>
						<linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="35.602" y1="48.786" x2="32.202" y2="48.386"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset=".3" stopColor="#02131f"/>
							<stop offset=".3" stopColor="#02131f"/>
							<stop offset=".8" stopColor="#02131f" stopOpacity="0"/>
						</linearGradient>
						<path className="st12"
									d="M32.5 31.3l-.1.1s0 .2.2.1c.1-.1 3-1.6 4-2.2l-3.5-24c-.1-.9-.5-1.3-1.2-1.6l.4 27.8.2-.2z"/>
						<linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="35.708" y1="48.843" x2="33.407" y2="48.543"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset=".4" stopColor="#27343c"/>
							<stop offset="1" stopColor="#3b474e" stopOpacity="0"/>
						</linearGradient>
						<path className="st13"
									d="M32.5 31.3l-.1.1s0 .2.2.1c.1-.1 3-1.6 4-2.2l-3.5-24c-.1-.9-.5-1.3-1.2-1.6l.4 27.8.2-.2z"/>
						<linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="-.36" y1="33.169" x2="27.54" y2="17.069"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset="0" stopColor="#24303a" stopOpacity="0"/>
							<stop offset="0" stopColor="#25323b" stopOpacity="0"/>
							<stop offset=".1" stopColor="#27343c"/>
						</linearGradient>
						<path className="st14"
									d="M5.1 44.4C4.4 42.8.4 35 4.8 20H3.1c-.9 3-1.6 4.8-2 7.5 0 0-.2 1-.3 2.1S.7 31.3.7 32c0 6 1.5 9.5 1.5 9.5 1.6 5 4.4 9.5 8.2 12.9 3.3 2.9 8.4 5.1 12.6 5.9-.7-.1-12.7-5.2-17.9-15.9z"/>
						<linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="31.95" y1="28.6" x2="31.95" y2="33.4"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset=".3" stopColor="#a5abaf"/>
							<stop offset="1" stopColor="#a5abaf" stopOpacity="0"/>
						</linearGradient>
						<path className="st15" d="M32.4 32.6h-.9c.1 0 .2 0 .2.1l.2 4.6h.1l.2-4.6c0-.1.1-.2.2-.1z"/>
						<linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="47.65" y1="63.7" x2="47.65" y2="2.7"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset="0" stopColor="#dee0dd"/>
							<stop offset="0" stopColor="#c5c9c7"/>
							<stop offset="0" stopColor="#9ea4a5"/>
							<stop offset="0" stopColor="#82898c"/>
							<stop offset="0" stopColor="#71797d"/>
							<stop offset="0" stopColor="#6b7378"/>
							<stop offset=".2" stopColor="#333f47"/>
							<stop offset=".5" stopColor="#27343c"/>
							<stop offset=".8" stopColor="#333f47"/>
							<stop offset="1" stopColor="#434d54"/>
						</linearGradient>
						<path className="st16"
									d="M42 2.3c10.5 4 20.4 15 20.4 28.9C62.4 48 49 61.7 32 61.7v1.6c17 0 31.3-14 31.3-31.3 0-13.8-8.8-25.4-21.3-29.7z"/>
						<linearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="32" y1="65.3" x2="32.3" y2="65.3"
														gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset="0" stopColor="#dee0dd"/>
							<stop offset="0" stopColor="#c5c9c7"/>
							<stop offset="0" stopColor="#9ea4a5"/>
							<stop offset="0" stopColor="#82898c"/>
							<stop offset="0" stopColor="#71797d"/>
							<stop offset="0" stopColor="#6b7378"/>
							<stop offset=".2" stopColor="#333f47"/>
							<stop offset=".5" stopColor="#27343c"/>
							<stop offset=".8" stopColor="#333f47"/>
							<stop offset="1" stopColor="#434d54"/>
						</linearGradient>
						<path className="st17" d="M32.3.7H32h.3z"/>
						<linearGradient id="SVGID_14_" gradientUnits="userSpaceOnUse" x1="57.289" y1="57.907" x2="43.789"
														y2="38.107" gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop offset=".7" stopColor="#27343c"/>
							<stop offset=".7" stopColor="#2b373f"/>
							<stop offset=".7" stopColor="#36424a"/>
							<stop offset=".7" stopColor="#49545b"/>
							<stop offset=".8" stopColor="#646d73" stopOpacity="0"/>
							<stop offset=".8" stopColor="#868d92" stopOpacity="0"/>
							<stop offset=".8" stopColor="#b0b5b8" stopOpacity="0"/>
							<stop offset=".8" stopColor="#e1e3e4" stopOpacity="0"/>
							<stop offset=".8" stopColor="#ffffff" stopOpacity="0"/>
						</linearGradient>
						<path className="st18"
									d="M58.8 20.2C51.8 4.1 36 3.2 35.1 3.1H35c12.1 2.2 19.8 10.1 22.5 18.4v.1c1.2 3.2 1.8 6.6 1.9 10.3.1 3.5-.7 7.4-2.2 11-.1.5-.2 1.1-.3 1.1h1.6c4.8-9 2.7-18.1.3-23.8z"/>
						<path className="st19"
									d="M2.2 32.1C2.2 15.7 15.5 2.2 32 2.2s29.8 13.4 29.8 29.9c0 16.4-13.3 29.7-29.8 29.7S2.2 48.5 2.2 32.1zm9.3-20.6c-5.3 5.3-8.6 12.6-8.6 20.6 0 8 3.3 15.3 8.5 20.5 5.3 5.2 12.6 8.5 20.6 8.5 8 0 15.3-3.2 20.5-8.5 5.3-5.2 8.5-12.5 8.5-20.5s-3.3-15.3-8.5-20.6C47.3 6.2 40 2.9 32 2.9s-15.3 3.3-20.5 8.6z"/>
						<path className="st20"
									d="M7.9 44.8l20.4-14.7c1.1.6 2.9 1.4 3.1 1.4.2.1.2-.1.2-.1l-2.5-2.1c-.3-.2-.4-.5-.4-.8l2.4-24.1c-.1.1-.1.3-.2.4-.1.2-.1.3-.1.5l-3.5 24.1L8.1 44.5c-.1.1-.2.2-.2.3z"/>
					</svg>
				</div>
				<div className='flex gap-2 items-center'>
					<button className={`nav-btn ${car === 'g63' && 'active'}`} onClick={() => setCar('g63')}>g63</button>
					<button className={`nav-btn ${car === 'brabus' && 'active'}`} onClick={() => setCar('brabus')}>SL</button>
					<button className={`nav-btn ${car === 'sl' && 'active'}`} onClick={() => setCar('sl')}>Brabus</button>
					<button className='nav-btn' onClick={() => setRotate(!rotate)}>
						<svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" fill="none">
							<path fillRule="evenodd" clipRule="evenodd"
										d="M6.23706 2.0007C6.78897 2.02117 7.21978 2.48517 7.19931 3.03708L7.10148 5.67483C8.45455 4.62548 10.154 4.00001 12 4.00001C16.4183 4.00001 20 7.58174 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68631 15.3137 6.00001 12 6.00001C10.4206 6.00001 8.98317 6.60994 7.91098 7.60891L11.3161 8.00677C11.8646 8.07087 12.2573 8.56751 12.1932 9.11607C12.1291 9.66462 11.6325 10.0574 11.0839 9.99326L5.88395 9.38567C5.36588 9.32514 4.98136 8.87659 5.00069 8.35536L5.20069 2.96295C5.22116 2.41104 5.68516 1.98023 6.23706 2.0007Z"
										fill="#000000"/>
						</svg>
					</button>
				</div>
			</nav>
	);
};

export default Menu;