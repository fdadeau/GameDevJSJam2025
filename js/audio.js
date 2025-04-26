
export const audio = {
    music: makeAudio("./sounds/PuzzlePeace.mp3", 0.2, true),
    move: makeAudio("./sounds/swing2.mp3",0.6),
    victory: makeAudio("./sounds/victory.mp3"),
    defeat: makeAudio("./sounds/defeat.mp3")
}

function makeAudio(file, volume, loop) {
    const r = new Audio();
    r.autoplay = false;
    r.src = file;
    if (volume) {
        r.volume = volume;
    }
    if (loop) {
        r.loop = true;
    }
    return r;
}

