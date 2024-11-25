This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

### Summary of the Screens:

1. **Header Section**:
   - Features a visually appealing slider with different prayer cards such as "Special prayer." 
   - Each card includes a title, date, and Hebrew text, along with a subtle background image representing the theme of prayer.

2. **Quick Access Icons**:
   - A row of circular icons for actions like **Download**, **Routine**, **Favorites**, and **Recents**.
   - Clean, minimalistic layout with labels under each icon, making navigation intuitive.

3. **Shiurim Section**:
   - Displays a title with a subtitle showing the user's learning progress (e.g., "+50 Learn today").
   - Cards for specific topics like "Jumash" and "Tania," showcasing progress percentage, estimated time, and options for **Audio** and **Video** learning resources.
   - Color-coded cards with progress bars for visual clarity.

4. **Quote Card**:
   - A stylized card with a motivational quote about faith and Torah study.
   - Features a prominent quotation icon and elegant typography for emphasis.

5. **Nigunim Section**:
   - Horizontal scrollable cards featuring music titles such as "Calm Jewish" and "Chabad Nigunim."
   - Each card contains an image, title, description, and session count, making it ideal for music lovers seeking relaxation.

6. **Live Group Discussion**:
   - Lists ongoing or recent group discussions with a "Live" badge for active sessions.
   - Displays brief descriptions, host names, and attendee avatars for engagement.
   - Badges indicating additional participants (e.g., "+3") for large groups.

7. **Kids Section**:
   - Interactive cards for children featuring stories like "Moises" and "Exodus."
   - Each card includes an image, title, subtitle, session count, and a "Read" button for navigation.

8. **Donation and Acknowledgment**:
   - **Donation Section**: Encourages users to donate or share Shiurim with visually engaging buttons for actions.
   - **Special Thanks Card**: Highlights a donor's contribution with a personalized acknowledgment and a "Read more" button for details.

9. **Bottom Navigation**:
   - Contains tabs like **Home**, **Classes**, **Giving**, and **Profile** with minimalistic icons.
   - Provides a consistent navigation experience across the app.

### **Overall Design Theme**:
The screens reflect a clean, organized, and user-friendly design with:
- **Consistent visual hierarchy** using typography, spacing, and card-based layouts.
- **Engaging visuals** like custom icons, illustrations, and relevant background imagery.
- **Interactive elements** such as progress bars, live badges, and action buttons for enhanced user experience.
