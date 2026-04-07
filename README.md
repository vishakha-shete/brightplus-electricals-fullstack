# ⚡ Bright Plus Electricals & Services

A modern full-stack website for an electrical services business, built using **React, Node.js, Express, and MongoDB**.
This project helps customers easily explore services and submit inquiries, while allowing the business to manage leads efficiently.

---

## 🚀 Live Features

* ⚡ Modern responsive UI (React + Tailwind CSS)
* 📱 Mobile-friendly design
* 📋 Service listing section
* 📨 Contact form with backend integration
* 🗄️ MongoDB database for storing inquiries
* 🔗 REST API using Express.js

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

## 📂 Project Structure

brightplus-website/
├── client/   # React Frontend
├── server/   # Node.js Backend

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/brightplus-electricals-website.git
cd brightplus-electricals-website
```

---

### 2️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

### 3️⃣ Setup Backend

```bash
cd server
npm install
node server.js
```

---

## 🔐 Environment Variables
Create a `.env` file inside the `server` folder:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```


---

## 📌 Future Improvements
* ✅ WhatsApp integration
* ✅ Email notifications (Nodemailer)
* ✅ Admin dashboard for managing inquiries
* ✅ Google Maps integration

---

## 👨‍💼 Business Info
**Bright Plus Electricals & Services**
👤 Owner: Mr. Rushikesh Shete
📞 Phone: 9146171888
📧 Email: [Chrishi.shete@outlook.com](mailto:Chrishi.shete@outlook.com)

---

## ⭐ Contribution
Feel free to fork this project and improve it!

---

## 📜 License
This project is open-source and available under the MIT License.

---

## 💡 Author
Developed by Vishakha Shete 🚀





const serviceGroups = [
  {
    category: "Core Infrastructure",
    items: [
      { 
        name: "Commercial & Industrial Wiring", 
        desc: "Heavy-duty power distribution for large-scale operations.", 
        icon: "⚡",
        image: "https://i.pinimg.com/736x/af/3a/bd/af3abdcde2f0de641a26a127d93991a7.jpg" // Replace with your image path
      },
      { 
        name: "Transformer Installation", 
        desc: "High-voltage solutions tailored for industrial requirements.", 
        icon: "🏗️",
        image: "https://i.pinimg.com/1200x/d3/d2/2a/d3d22a0bbf45ae94ae53229087c6d36d.jpg" 
      },
      { 
        name: "Panel Wiring", 
        desc: "Custom control panel assembly with industrial precision.", 
        icon: "📟",
        image: "https://images.unsplash.com/photo-1758101755915-462eddc23f57?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ]
  },
  {
    category: "Specialized Maintenance",
    items: [
      { 
        name: "OLTC Servicing", 
        desc: "Expert On-Load Tap Changer maintenance for grid stability.", 
        icon: "⚙️",
        image: "https://media.istockphoto.com/id/2246945901/photo/silica-gel-breather-contains-orange-silica-gel-of-115kv-power-transformer.jpg?s=1024x1024&w=is&k=20&c=8_I79vru9ICoNkTvpAfdp6Dnu0kWeFR9gZrOG50ZoK0="
      },
      { 
        name: "Circuit Breaker Installation", 
        desc: "Advanced protection systems to secure your hardware.", 
        icon: "🛡️",
        image: "https://plus.unsplash.com/premium_photo-1661911021547-b0188f22d548?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      { 
        name: "Earthing Work", 
        desc: "Foundational safety grounding for all electrical assets.", 
        icon: "🌍",
        image: "https://media.istockphoto.com/id/2199111472/photo/electrician-working-on-circuit-box-installation-during-home-renovation-project-in-a.jpg?s=1024x1024&w=is&k=20&c=0ivYENuSYOhCFbgzke3xY0wWnJBxScKUAgxYcIuG2hs="
      },
    ]
  },
  {
    category: "Standard Services",
    items: [
      { 
        name: "Residential Electrical Work", 
        desc: "Modern, safe, and efficient home power solutions.", 
        icon: "🏠",
        image: "https://media.istockphoto.com/id/894471508/photo/electrician-working-in-a-residential-electrical-system.jpg?s=612x612&w=0&k=20&c=0AaXIkN3-bNXjvUOMGZP7EMxWRNAXdi09baAv-urStY="
      },
      { 
        name: "UPS & Inverter Wiring", 
        desc: "Seamless backup integration for uninterrupted power.", 
        icon: "🔋",
        image: "https://media.istockphoto.com/id/1694499361/photo/supply-system-rectifier-acdc-inverter-battery.jpg?s=1024x1024&w=is&k=20&c=qICQ1Q91SXVvU57hkoZPW8Nb3aMa-eUlwhSamXTrp0M="
      },
      { 
        name: "Lighting Installation", 
        desc: "Smart and industrial-grade illumination setups.", 
        icon: "💡",
        image: "https://media.istockphoto.com/id/2181454772/photo/portrait-of-male-electrician-focused-on-wiring-a-temporary-light-bulb-fixture.jpg?s=612x612&w=0&k=20&c=5sCxGD5mUmn_2klu3rrUo_1-pf-C0fq4HCfTJfq7490="
      },
    ]
  }
];