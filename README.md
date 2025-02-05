# **Crowd Cube**

Crowd Cube is a user-friendly donation platform that enables users to create, manage, and contribute to fundraising campaigns. With an intuitive interface, secure authentication, and a robust set of features, Crowd Cube makes fundraising accessible for everyone. [view](https://crowd-1342c.firebaseapp.com)

## **Table of Contents**

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Development](#development)
- [License](#license)

## **Features**

- **Home Page:** Displays a banner, active campaigns, an about section, and team details.
- **All Campaigns Page:** Lists all available campaigns, allowing logged-in users to contribute.
- **Campaign Creation:** Verified users can create new fundraising campaigns.
- **Donation Tracking:** Users can view their contributions on the **My Donations** page.
- **Campaign Management:** Users can track their own campaigns via the **My Campaigns** page.
- **Secure Authentication:** Supports login via email/password and Google authentication using Firebase.
- **Interactive UI:** Built with React, TailwindCSS, and DaisyUI for a modern and smooth user experience.

## 🎨 Tech Stack

<h4 align="left">Frontend</h4>

<div align="left">
  <img src="https://skillicons.dev/icons?i=html" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=css" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=tailwind" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=js" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo"  />
  <img width="12" />
</div>

<h4 align="left">Backend</h4>

<div align="left">

  <img src="https://skillicons.dev/icons?i=nodejs" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />
  <img width="12" />
  
</div>
<h4 align="left">Database</h4>

<div align="left">

  <img src="https://skillicons.dev/icons?i=mongodb" height="40" alt="mongodb logo"  />
  
</div>
<h4 align="left">Authentication</h4>

<div align="left">
  <img src="https://skillicons.dev/icons?i=firebase" height="40" alt="firebase logo"  />
</div>

## **Installation**

To set up the project locally:

1. Clone the repository:

   ```sh
   git clone https://github.com/Najmul-Shaon/crowdcube-client.git
   cd crowdcube-client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## **Configuration**

Crowd Cube uses Firebase for authentication and storage. Create a `.env.local` file in the project root and add the following environment variables:

```
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

## **Usage**

- **View campaigns**: Browse all active campaigns and select one to donate.
- **Contribute**: Logged-in users can make donations.
- **Create campaigns**: Verified users can start their own fundraising campaigns.
- **Manage donations**: Users can track their contributions on the **My Donations** page.
- **Manage campaigns**: Campaign creators can monitor their fundraising progress on **My Campaigns**.

## **Dependencies**

### **Main Dependencies**

| Package                   | Version  |
| ------------------------- | -------- |
| `animate.css`             | ^4.1.1   |
| `aos`                     | ^2.3.4   |
| `firebase`                | ^11.2.0  |
| `localforage`             | ^1.10.0  |
| `match-sorter`            | ^8.0.0   |
| `react`                   | ^18.3.1  |
| `react-awesome-slider`    | ^4.1.0   |
| `react-dom`               | ^18.3.1  |
| `react-hot-toast`         | ^2.4.1   |
| `react-icons`             | ^5.4.0   |
| `react-router-dom`        | ^7.0.2   |
| `react-simple-typewriter` | ^5.0.1   |
| `react-tooltip`           | ^5.28.0  |
| `sort-by`                 | ^1.2.0   |
| `sweetalert2`             | ^11.14.5 |

### **Development Dependencies**

| Package                       | Version  |
| ----------------------------- | -------- |
| `@eslint/js`                  | ^9.15.0  |
| `@types/react`                | ^18.3.12 |
| `@types/react-dom`            | ^18.3.1  |
| `@vitejs/plugin-react`        | ^4.3.4   |
| `autoprefixer`                | ^10.4.20 |
| `daisyui`                     | ^4.12.14 |
| `eslint`                      | ^9.15.0  |
| `eslint-plugin-react`         | ^7.37.2  |
| `eslint-plugin-react-hooks`   | ^5.0.0   |
| `eslint-plugin-react-refresh` | ^0.4.14  |
| `globals`                     | ^15.12.0 |
| `postcss`                     | ^8.4.49  |
| `tailwindcss`                 | ^3.4.15  |
| `vite`                        | ^6.0.1   |

## **License**

This project is licensed under the [MIT License](LICENSE).
