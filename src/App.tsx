import React from 'react';

import './App.css';
import ToolBarView from './toolbar/ToolbarView';
import { AppProvider } from './context/context';
import KuralDashboard from './dashboard/KuralDashboard';

function App() {
  return (
    <AppProvider>
      <div>
        <ToolBarView>


          <KuralDashboard />

        </ToolBarView>
      </div>
    </AppProvider>
  );
}

export default App;
