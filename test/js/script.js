
// class Player {
// 	constructor(body) {

// 		this.audio = body.querySelector('#audio')
// 		this.playPauseButton = body.querySelector('#playPause')
// 		this.playPauseButton.addEventListener('click', () => this.togglePlay())


// 		this.playState = false
// 		// volume
// 		this.audio.volume = 0.5

// 		this.reduceButton = body.querySelector('#reduce')
// 		this.increaseButton = body.querySelector('#increase')

// 		// console.log(this.audio.ended)
// 		// console.log(this.audio.HTMLMediaElement.audioTracks)
// 		this.reduceButton.addEventListener('click', () => this.reduceVolume())
// 		this.increaseButton.addEventListener('click', () => this.increaseVolume())

// 		// range
// 		this.volumeRange = body.querySelector('#volumeRange')
// 		this.volumeRange.addEventListener('change', (e) => this.updateVolume(e))


// 		// this.soundToggleButton = body.querySelector('#soundToggle')
// 		// this.soundToggleButton.addEventListener('click', (e) => this.soundToggle(e))
// 	}

// 	// document.write('\u00A9')
// 	// soundToggle(e) {
// 	// 	const button = e.target

// 	// 	// if (this.audio.paused && this.playState) {

// 	// 	// }

// 	// 	// if (this.playState) {
// 	// 	// 	console.log('mute')
// 	// 	// 	this.pauseAndMute()
// 	// 	// 	button.innerHTML = '🔇'
// 	// 	// }
// 	// 	// else {
// 	// 	// 	console.log('play')
// 	// 	// 	this.playAudio()
// 	// 	// 	button.innerHTML = '🔊'
// 	// 	// }
// 	// }

// 	updateVolume(e) {
// 		const input = e.target
// 		this.audio.volume = input.value

// 		this.volumeState()

// 		if (input.value < 0.1) {
// 			this.pauseAndMute()
// 		}
// 		else {
// 			this.playAudio()
// 		}
// 	}
// 	pauseAndMute() {
// 		this.audio.volume = 0
// 		this.audio.muted
// 		this.audio.pause();
// 		console.log('muted/paused')
// 		this.playState = false

// 	}
// 	playAudio() {
// 		if (this.audio.paused && this.playState) {
// 			this.audio.play();
// 			this.playState = true

// 		}
// 	}
// 	reduceVolume() {
// 		if (this.audio.volume < 1) {
// 			const val = ((this.audio.volume * 10) + (0.1 * 10)) / 10
// 			// console.log(`(${this.audio.volume} * 10 - (0.1 * 10)) / 10 = ${val}`)
// 			this.audio.volume = val

// 			this.playAudio()
// 			// if (this.audio.paused && this.playState) {
// 			// 	this.audio.play();
// 			// }
// 			this.volumeState()
// 		}
// 	}
// 	increaseVolume() {
// 		if (this.audio.volume >= 0.2) {
// 			const val = ((this.audio.volume * 10) - (0.1 * 10)) / 10
// 			// console.log(`(${this.audio.volume} * 10 - (0.1 * 10)) / 10 = ${val}`)
// 			this.audio.volume = val
// 		}
// 		else {
// 			this.pauseAndMute()
// 			// this.audio.volume = 0
// 			// this.audio.muted
// 			// this.audio.pause();
// 			// console.log('muted/paused')
// 		}
// 		this.volumeState()
// 	}
// 	volumeState() {
// 		const percents = Math.round(this.audio.volume * 100)
// 		console.log(`${percents}%`)
// 	}
// 	togglePlay() {
// 		if (this.audio.paused) {
// 			this.audio.play();
// 			this.playState = true
// 		} else {
// 			this.audio.pause();
// 			this.playState = false
// 		}
// 	}
// }

// window.onload = () => {
// 	body = document.querySelector('.player')
// 	if (body) {
// 		const p1 = new Player(body)
// 	}
// }

class Player {
	constructor(body) {
		this.audio = body.querySelector('#audio');
		this.playPauseButton = body.querySelector('#playPause');
		this.playPauseButton.addEventListener('click', () => this.togglePlay());

		this.playState = false;
		this.audio.volume = 0.5;

		this.reduceButton = body.querySelector('#reduce');
		this.increaseButton = body.querySelector('#increase');

		this.reduceButton.addEventListener('click', () => this.reduceVolume());
		this.increaseButton.addEventListener('click', () => this.increaseVolume());

		this.volumeRange = body.querySelector('#volumeRange');
		this.volumeRange.addEventListener('input', (e) => this.updateVolume(e));

		this.volumeRange.value = this.audio.volume;

		// iOS требует инициализации после взаимодействия
		document.addEventListener('touchstart', () => {
			// Инициализируем аудио контекст для iOS
			if (this.audio.paused) {
				// Короткое воспроизведение и пауза для разблокировки аудио API
				this.audio.play().then(() => {
					if (!this.playState) {
						this.audio.pause();
					}
				}).catch(error => {
					console.log('Ошибка инициализации аудио:', error);
				});
			}
		}, { once: true });
	}

	updateVolume(e) {
		const input = e.target;
		this.audio.volume = parseFloat(input.value);
		this.volumeState();

		if (e.isTrusted) {
			if (this.audio.volume < 0.1) {
				this.pauseAndMute();
			} else if (this.playState) {
				this.playAudio();
			}

		}
	}

	pauseAndMute() {
		this.audio.volume = 0;
		this.volumeRange.value = 0;
		this.audio.pause();
		console.log('muted/paused');
		// this.playState = false;
	}

	playAudio() {
		if (this.audio.paused && this.playState) {
			this.audio.play().catch(error => {
				console.log('Ошибка воспроизведения:', error);
			});
			console.log('play')

		}
	}

	reduceVolume() {
		if (this.audio.volume > 0.1) {
			const val = Math.max(0, this.audio.volume - 0.1);
			this.audio.volume = parseFloat(val.toFixed(1));
			this.volumeRange.value = this.audio.volume;
		} else {
			this.pauseAndMute();
		}
		this.volumeState();
	}

	increaseVolume() {
		if (this.audio.volume < 1) {
			const val = Math.min(1, this.audio.volume + 0.1);
			this.audio.volume = parseFloat(val.toFixed(1));
			this.volumeRange.value = this.audio.volume;

			if (this.playState) {
				this.playAudio();
			}
		}
		this.volumeState();
	}

	volumeState() {
		const percents = Math.round(this.audio.volume * 100);
		console.log(`${percents}%`);
	}

	togglePlay() {
		if (this.audio.paused) {
			this.audio.play().then(() => {
				this.playState = true;
			}).catch(error => {
				console.log('Ошибка воспроизведения:', error);
			});
		} else {
			this.audio.pause();
			this.playState = false;
		}
	}
}

window.onload = () => {
	const body = document.querySelector('.player');
	if (body) {
		const p1 = new Player(body);
	}
}