const apartments = {
  1: {
    photos: ["194365599.jpg"],
    info: "Διαμέρισμα 1: Κοντά στο κέντρο, πλήρως εξοπλισμένο, Wi-Fi, κουζίνα."
  },
  2: {
    photos: ["471714636.jpg"],
    info: "Διαμέρισμα 2: Πλήρως ανακαινισμένο, κοντά στην παραλία, με θέα."
  }
};
let lang = 'el';  // Αρχικά Ελληνικά

const texts = {
  el: {
    welcome: "Καλώς ήρθατε στα Διαμερίσματά μας!",
    contact: "Επικοινωνία",
    phoneEmail: "6972499950 | email: georgiobin@yahoo.gr",
    photos: "Φωτογραφίες Διαμερίσματος",
    info: "Πληροφορίες Διαμερίσματος",
    contactUs: "Επικοινωνήστε μαζί μας",
    name: "Όνομα",
    email: "Email",
    message: "Μήνυμα",
    send: "Αποστολή",
    sentSuccess: "Το μήνυμά σας στάλθηκε επιτυχώς! (Demo).",
    noApartment: "Δεν βρέθηκε το διαμέρισμα.",
    mapTitle: "Τοποθεσία",
    prompt: "Πατήστε ένα κουμπί για να δείτε φωτογραφίες ή πληροφορίες."
  },
  en: {
    welcome: "Welcome to Our Apartments!",
    contact: "Contact",
    phoneEmail: "6972499950 | email: georgiobin@yahoo.gr",
    photos: "Photos of Apartment",
    info: "Apartment Information",
    contactUs: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    sentSuccess: "Your message was sent successfully! (Demo).",
    noApartment: "Apartment not found.",
    mapTitle: "Location",
    prompt: "Press a button to see photos or information."
  }
};

function showPhotos(id) {
  const apt = apartments[id];
  const container = document.getElementById("apartment-details");

  if (!apt) {
    container.innerHTML = `<p>${texts[lang].noApartment}</p>`;
    return;
  }

  const photosHtml = apt.photos
    .map(src => `<img src="images/${src}" alt="${texts[lang].photos} ${id}" style="max-width:300px; margin: 10px;">`)
    .join("");

  container.innerHTML = `
    <div class="fade-in">
      <h2>${texts[lang].photos} ${id}</h2>
      <div>${photosHtml}</div>
    </div>
  `;
}

function showInfo(id) {
  const apt = apartments[id];
  const container = document.getElementById("apartment-details");

  if (!apt) {
    container.innerHTML = `<p>${texts[lang].noApartment}</p>`;
    return;
  }

  container.innerHTML = `
    <div class="fade-in">
      <h2>${texts[lang].info} ${id}</h2>
      <p>${apt.info}</p>
    </div>
  `;
}
<script>
  function showFacilities() {
    const details = document.getElementById("apartment-details");
    details.innerHTML = `
      <h2>Παροχές Διαμερισμάτων</h2>
      <ul>
        <li>Δωρεάν Wi-Fi</li>
        <li>Πλήρως εξοπλισμένη κουζίνα</li>
        <li>Κλιματισμός</li>
        <li>Ιδιωτικό πάρκινγκ</li>
        <li>Μπαλκόνι με θέα</li>
        <li>Άνετος χώρος καθιστικού</li>
        <li>Τηλεόραση επίπεδης οθόνης</li>
        <li>Καθημερινή καθαριότητα (κατόπιν συνεννόησης)</li>
        <li>Κοντινή απόσταση από το κέντρο & παραλίες</li>
      </ul>
    `;
  }
</script>

function setLanguage(selectedLang) {
  lang = selectedLang;
  updateTexts();
  clearDetails();
}

function updateTexts() {
  document.querySelector('header h1').textContent = texts[lang].welcome;
  document.querySelector('header p').textContent = `${texts[lang].contact}: ${texts[lang].phoneEmail}`;

  const navButtons = document.querySelectorAll('nav button');
  navButtons[0].textContent = texts[lang].photos + " 1";
  navButtons[1].textContent = texts[lang].info + " 1";
  navButtons[2].textContent = texts[lang].photos + " 2";
  navButtons[3].textContent = texts[lang].info + " 2";
  navButtons[4].textContent = "Ελληνικά";
  navButtons[5].textContent = "English";

  const detailsDiv = document.getElementById("apartment-details");
  detailsDiv.innerHTML = `<p>${texts[lang].prompt}</p>`;
}

function clearDetails() {
  document.getElementById("apartment-details").innerHTML = `<p>${texts[lang].prompt}</p>`;
}
updateTexts();
document.getElementById("contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-response").textContent = texts[lang].sentSuccess;
  this.reset();
});

