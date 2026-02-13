function openLetter() {
    const envelope = document.getElementById('envelopeWrapper');
    const letter = document.getElementById('letterContent');

    // Hide the envelope
    envelope.style.display = 'none';

    // Show the letter
    letter.style.display = 'block';

    // Optional: Add a little console sparkle
    console.log("A special letter was opened! ❤️");
}

function closeLetter() {
    const envelope = document.getElementById('envelopeWrapper');
    const letter = document.getElementById('letterContent');

    // Show the envelope back
    envelope.style.display = 'block';

    // Hide the letter
    letter.style.display = 'none';
}