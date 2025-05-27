function generateQRCode() {
  const qrInput = document.getElementById("qr-input").value.trim();
  const qrImage = document.getElementById("qr-code-image");

  if (qrInput === "") {
    alert("Please enter text or URl to generate QR code");
    return;
  }

  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    qrInput
  )}`;

  qrImage.src = apiUrl;
}
