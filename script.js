// ========================================
// ADD TO CONTACTS
// ========================================

// ========================================
// ADD TO CONTACTS
// ========================================

const addContactBtn = document.getElementById("addContactBtn");

addContactBtn.addEventListener("click", async () => {

    try {

        // تحميل صورة البروفايل
        const response = await fetch("image/profile.jpeg");
        const imageBlob = await response.blob();

        // تحويل الصورة إلى Base64
        const reader = new FileReader();

        reader.onloadend = () => {

            const base64Image = reader.result.split(",")[1];

            const contact = `BEGIN:VCARD
VERSION:3.0
FN:Ayoub Mouaddine
TEL;TYPE=CELL:+212700202866
URL:https://www.instagram.com/_nex_tap_/
EMAIL:ayoubmouaddine817@gmail.com
PHOTO;ENCODING=b;TYPE=JPEG:${base64Image}
END:VCARD`;

            const blob = new Blob(
                [contact],
                {
                    type: "text/vcard;charset=utf-8"
                }
            );

            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;
            link.download = "Ayoub-Mouaddine.vcf";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 1000);
        };

        reader.readAsDataURL(imageBlob);

    } catch (error) {

        console.error("Erreur:", error);

    }

});