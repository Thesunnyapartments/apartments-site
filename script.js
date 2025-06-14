const apartments = {
  1: {
    photos: ["images/The_sunny/2.jpg","images/The_sunny/5.jpg","images/The_sunny/6.jpg"],
    info: "Διαμέρισμα 1: Κοντά στο κέντρο, πλήρως εξοπλισμένο, Wi-Fi, κουζίνα."
  },
  2: {
    photos: ["images/Deluxe/14.jpg","images/Deluxe/8.jpg","images/Deluxe/9.jpg"],
    info: "Διαμέρισμα 2: Πλήρως ανακαινισμένο, κοντά στην παραλία, με θέα."
  }
};
let lang = 'el';  // Αρχικά Ελληνικά

const translations = {
  el: {
    welcome: "Καλώς ήρθατε στα Διαμερίσματά μας!",
    contact: "Επικοινωνία: 6972499950 | email: georgiobin@yahoo.gr",
    contactUs: "Επικοινωνήστε μαζί μας",
    name: "Όνομα:",
    email: "Email:",
    message: "Μήνυμα:",
    send: "Αποστολή",
    location: "Τοποθεσία",
    photos: "Φωτογραφίες Διαμερίσματος",
    info: "Πληροφορίες Διαμερίσματος",
    prompt: "Παρακαλώ επέλεξε ένα διαμέρισμα.",
    sentSuccess: "Το μήνυμά σας εστάλη επιτυχώς!",
    noApartment: "Δεν βρέθηκε διαμέρισμα."
  },
  en: {
    welcome: "Welcome to our Apartments!",
    contact: "Contact: 6972499950 | email: georgiobin@yahoo.gr",
    contactUs: "Contact Us",
    name: "Name:",
    email: "Email:",
    message: "Message:",
    send: "Send",
    location: "Location",
    photos: "Apartment Photos",
    info: "Apartment Info",
    prompt: "Please select an apartment.",
    sentSuccess: "Your message was successfully sent!",
    noApartment: "Apartment not found."
  }
};

function setLanguage(selectedLang) {
  lang = selectedLang;
  updateTexts();
  clearDetails();
}

function updateTexts() {
  const t = translations[lang];
  document.querySelector("header h1").innerText = t.welcome;
  document.querySelector("header p").innerText = t.contact;
  document.querySelector("#contact h2").innerText = t.contactUs;
  document.querySelector('label[for="name"]').innerText = t.name;
  document.querySelector('label[for="email"]').innerText = t.email;
  document.querySelector('label[for="message"]').innerText = t.message;
  document.querySelector('#contact-form button').innerText = t.send;
  document.querySelector('#map h2').innerText = t.location;

  const navButtons = document.querySelectorAll("nav button");
  navButtons[0].textContent = "📸 " + t.photos + " 1";
  navButtons[1].textContent = "ℹ️ " + t.info + " 1";
  navButtons[2].textContent = "📸 " + t.photos + " 2";
  navButtons[3].textContent = "ℹ️ " + t.info + " 2";
  navButtons[4].textContent = "🛏️ Παροχές Διαμερισμάτων";
  navButtons[5].textContent = "Ελληνικά";
  navButtons[6].textContent = "English";
}

function clearDetails() {
  document.getElementById("apartment-details").innerHTML = `<p>${translations[lang].prompt}</p>`;
}

function showPhotos(id) {
  const apt = apartments[id];
  const container = document.getElementById("apartment-details");

  if (!apt) {
    container.innerHTML = `<p>${translations[lang].noApartment}</p>`;
    return;
  }

const photosHtml = apt.photos.map(
  src => `<a href="${src}" data-lightbox="apt${id}">
            <img src="${src}" alt="photo" style="max-width:300px; margin:10px; cursor:pointer;">
          </a>`
).join("");


  container.innerHTML = `
    <div>
      <h2>${translations[lang].photos} ${id}</h2>
      <div style="display: flex; flex-wrap: wrap; justify-content: center;">${photosHtml}</div>
    </div>
  `;
}


function showInfo(id) {
  const apt = apartments[id];
  const container = document.getElementById("apartment-details");

  if (!apt) {
    container.innerHTML = `<p>${translations[lang].noApartment}</p>`;
    return;
  }

  container.innerHTML = `
    <div>
      <h2>${translations[lang].info} ${id}</h2>
      <p>${apt.info}</p>
    </div>
  `;
}

function showFacilities() {
  const details = document.getElementById("apartment-details");
  details.innerHTML = `
    <h2>Παροχές Διαμερισμάτων</h2>
    
    <h3>🚗 Χώρος στάθμευσης</h3>
    <ul>
      <li>Ιδιωτικός χώρος στάθμευσης δωρεάν, στον χώρο του καταλύματος, δεν απαιτείται κράτηση</li>
      <li>Χώρος στάθμευσης στο δρόμο</li>
    </ul>

    <h3>🌐 Ίντερνετ</h3>
    <ul>
      <li>Καλό δωρεάν WiFi 28 Mbps – κατάλληλο για streaming HD & βιντεοκλήσεις</li>
      <li>Έλεγχος ταχύτητας από τον οικοδεσπότη</li>
    </ul>

    <h3>🍳 Κουζίνα</h3>
    <ul>
      <li>Προϊόντα καθαρισμού, εστίες, φούρνος</li>
      <li>Κουζινικά σκεύη, ψυγείο, πλυντήριο ρούχων</li>
    </ul>

    <h3>🛏️ Υπνοδωμάτιο</h3>
    <ul>
      <li>Λευκά είδη, ντουλάπα</li>
    </ul>

    <h3>🛁 Μπάνιο</h3>
    <ul>
      <li>Χαρτί υγείας, πετσέτες, μπανιέρα ή ντους</li>
      <li>Τουαλέτα, στεγνωτήρας μαλλιών</li>
    </ul>

    <h3>🛋️ Σαλόνι</h3>
    <ul>
      <li>Τραπεζαρία, καθιστικό, καναπές</li>
    </ul>

    <h3>📺 Πολυμέσα & Τεχνολογία</h3>
    <ul>
      <li>Τηλεόραση επίπεδης οθόνης, τηλεόραση</li>
    </ul>

    <h3>🛠️ Παροχές δωματίου</h3>
    <ul>
      <li>Πρίζα κοντά στο κρεβάτι, καναπές-κρεβάτι, σίδερο ρούχων</li>
      <li>Απλώστρα ρούχων, πλακάκι/μάρμαρο στο πάτωμα</li>
    </ul>

    <h3>🌞 Εξωτερικοί χώροι</h3>
    <ul>
      <li>Ηλιόλουστη βεράντα, μπαλκόνι, κήπος</li>
    </ul>

    <h3>🌅 Θέα</h3>
    <ul>
      <li>Θέα στην πόλη, θέα στη θάλασσα, γενική θέα</li>
    </ul>

    <h3>🏢 Χαρακτηριστικά κτηρίου</h3>
    <ul>
      <li>Ιδιωτικό διαμέρισμα σε κτήριο</li>
    </ul>

    <h3>🛎️ Υπηρεσίες ρεσεψιόν</h3>
    <ul>
      <li>Γρήγορο check-in/check-out</li>
    </ul>

    <h3>♿ Διάφορα</h3>
    <ul>
      <li>Προσβάσιμο σε αναπηρικό αμαξίδιο</li>
      <li>Απαγορεύεται το κάπνισμα, κλιματισμός, θέρμανση</li>
      <li>Δωμάτια για ΑμεΑ, δωμάτια για μη καπνίζοντες</li>
    </ul>

    <h3>🔒 Ασφάλεια</h3>
    <ul>
      <li>Κάμερες ασφαλείας έξω από το κατάλυμα, πρόσβαση με κλειδί</li>
    </ul>

    <h3>🌍 Γλώσσες επικοινωνίας</h3>
    <ul>
      <li>Ελληνικά, Αγγλικά, Κροατικά, Σερβικά</li>
    </ul>
  `;
}


document.getElementById("contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-response").textContent = translations[lang].sentSuccess;
  this.reset();
});

updateTexts();