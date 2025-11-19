# 🌻 SkillSwap: A Local Skill Exchange Platform

### ✨ Project Overview
**SkillSwap** is a modern, interactive single-page application (SPA) designed to facilitate local skill exchange. It connects individuals offering or seeking skills—from coding and language lessons to music and fitness training. The platform features secure user authentication via Firebase and provides a seamless, responsive experience across all devices.



### 🔗 Live URL & Repository

| Resource | URL |
| :--- | :--- |
| **Live Website** | [https://skill-share-ritat-ph-12-a9.netlify.app/](https://skill-share-ritat-ph-12-a9.netlify.app/) |
| **GitHub Repository** | [https://github.com/rifat028/Skill-Share.git](https://github.com/rifat028/Skill-Share.git) |

### 🛠️ Core Technologies

The application is built primarily with the following technologies:

* **Frontend Framework:** **React**
* **Authentication:** **Firebase** (Google and Email/Password)
* **Styling:** **Tailwind CSS**
* **Routing:** **React Router**

### 🌟 Key Features

* **Secure Authentication:** Implemented secure **Firebase** Login and Signup with password validation (6+ characters, Uppercase, Lowercase) and Google Social Login.
* **Persistent Login:** Logged-in users remain authenticated even after page reloads.
* **Profile Management (Challenge):** Users can easily update their **Name** and **Photo URL** on the **My Profile** page using the `updateProfile()` method.
* **Skill Details Protection:** The **Skill Details Page** is a **Protected Route**, automatically redirecting users to login and then back to their desired skill page upon successful authentication.
* **Password Utilities (Challenge):** Features a functional **Forgot Password** system and a **Password Toggle Eye** button on login/signup forms for enhanced security and usability.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop views with a minimalist and modern aesthetic.

### 📦 Dependencies and NPM Packages

The project utilizes the following key packages:

| Package | Purpose |
| :--- | :--- |
| `aos` | Used for subtle **animations** on scroll. |
| `firebase` | For all user **authentication** services. |
| `react-hot-toast` | For displaying custom, non-default **success/error toast messages**. |
| `swiper` | For creating the interactive **Hero Slider**. |
| `react-icons` | Comprehensive library of vector icons. |
| `react-spinners` | Used to display **loading spinners**. |

### 💻 Local Installation Guide

Follow these steps to get a local copy of the project running on your machine.

#### Prerequisites

* Node.js (v18+)
* npm or yarn

#### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/rifat028/Skill-Share.git](https://github.com/rifat028/Skill-Share.git)
    cd Skill-Share
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Environment Variables:** Create a `.env` file in the root directory to store your Firebase configuration keys:
    ```
    VITE_API_KEY="YOUR_FIREBASE_API_KEY"
    VITE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_PROJECT_ID="YOUR_PROJECT_ID"
    # ... include all other necessary VITE_FIREBASE_ variables
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    # or yarn dev
    ```

The application will now be running locally, typically accessible at `http://localhost:5173`.
