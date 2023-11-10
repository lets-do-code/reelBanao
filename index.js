/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';



// Importing aws Amplify


import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import { AuthProvider } from './src/Context/AuthProvider';

const AppWithUserProvider = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
AppRegistry.registerComponent(appName, () => AppWithUserProvider);
