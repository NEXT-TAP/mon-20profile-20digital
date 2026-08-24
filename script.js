// ========================================
// ADD TO CONTACTS
// ========================================

const addContactBtn = document.getElementById("addContactBtn");

addContactBtn.addEventListener("click", () => {

  const contact = `
BEGIN:VCARD
VERSION:3.0
FN:Ayoub Mouaddine
TEL;TYPE=CELL:+212700202866
EMAIL:ayoubmouaddine817@gmail.com
END:VCARD
`;

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

  URL.revokeObjectURL(url);

});