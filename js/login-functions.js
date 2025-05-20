//Randomizes the capsule number
function generateCapsuleNumber() {
    const capsuleNum = Math.floor(Math.random() * 10) + 1;
    const capsule = document.getElementById('capsule-number');
    if (capsule) {
        capsule.innerText = capsuleNum.toString();
    }
}
window.onload = generateCapsuleNumber;