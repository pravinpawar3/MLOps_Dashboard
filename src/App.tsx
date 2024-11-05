import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/SignIn';
import Chart from './pages/Chart';
import ML4HDashboard from './pages/ML4HDashboard';
import ModelPrediction from './pages/ModelPrediction';
import DataHub_tables from './pages/DataHub_tables';
import Model_tables from './pages/Model_tables';
import User_tables from './pages/User_tables';
import DefaultLayout from './layout/DefaultLayout';

/*
  Main App component:
  - Handles initial loading state
  - Resets scroll position on route change
*/
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="ML4H Dashboard" />
              <ML4HDashboard />
            </>
          }
        />
        <Route
          path="/mlops/prediction"
          element={
            <>
              <PageTitle title="ML4H Dashboard" />
              <ModelPrediction />
            </>
          }
        />

        <Route
          path="/mlops/dataHub"
          element={
            <>
              <PageTitle title="ML4H Dashboard" />
              <DataHub_tables />
            </>
          }
        />

        <Route
          path="/mlops/modelHub"
          element={
            <>
              <PageTitle title="ML4H Dashboard" />
              <Model_tables />
            </>
          }
        />

        <Route
          path="/mlops/userHub"
          element={
            <>
              <PageTitle title="ML4H Dashboard" />
              <User_tables />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="ML4H Dashboard" />
              <Chart />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="ML4H Dashboard" />
              <SignIn />
            </>
          }
        />

      </Routes>
    </DefaultLayout>
  );
}

export default App;
