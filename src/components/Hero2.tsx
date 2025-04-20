import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hero2.css';

interface StateData {
  state: string;
  lgas: string[];
}

interface Representative {
  id: number;
  name: string;
  position: string;
  level: 'federal' | 'state' | 'local';
  state: string;
  lga: string | null;
  contact: {
    phone: string;
    email: string;
  };
}

interface Office {
  id: number;
  name: string;
  level: 'federal' | 'state' | 'local';
  state: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
}

interface NigeriaData {
  states: StateData[];
  representatives: Representative[];
  offices: Office[];
}

interface Executive {
  governor: string;
  deputyGovernor: string;
}

interface Legislature {
  speaker: string;
}

interface StateRepresentatives {
  executive: Executive;
  legislature: Legislature;
}

interface RepresentativesData {
  [state: string]: StateRepresentatives; 
}

interface ApiResponse {
  status: string;
  data: RepresentativesData;
}

interface Hero2Props {
  selectedState?: string;
  selectedLga?: string;
}

function Hero2({ selectedState, selectedLga }: Hero2Props) {
  const [data, setData] = useState<NigeriaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [representatives, setRepresentatives] = useState<RepresentativesData | null>(null);
  const [representativesLoading, setRepresentativesLoading] = useState<boolean>(true);
  const [representativesError, setRepresentativesError] = useState<Error | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/nigeria-data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData: NigeriaData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    const fetchRepresentatives = async () => {
      setRepresentativesLoading(true);
      setRepresentativesError(null);
      try {
        const response = await fetch('/representatives-data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch representatives data');
        }
        const representativesData: ApiResponse = await response.json();
        setRepresentatives(representativesData.data);
      } catch (err) {
        setRepresentativesError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setRepresentativesLoading(false);
      }
    };

    fetchData();
    fetchRepresentatives(); 
  }, []);

  const handleFindRepresentatives = () => {

    navigate('/representatives');
  };

  const handleReportIssues = () => {
    navigate('/report-issues');
  };

  return (
    <section className="hero2">
      {loading && <p>Loading Nigeria data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="hero2-content">
          <h1>Connect With Your Government Representatives</h1>
          <p>Find The Right Government Officials To Address Your Civic Issues And Concerns.</p>
          <div className="hero2-buttons">
            <button className="button-find" onClick={handleFindRepresentatives}>
              <img src="/location-pin icon.png" alt="Location Icon" className="icon" /> Find Representatives
            </button>
            <Link to="/government-offices" className="button-offices">
              <img src="/search icon.png" alt="Search Icon" className="icon" />
              Government Offices
            </Link>
            <button className="button-report" onClick={handleReportIssues}>
              <img src="/report icon.png" alt="Report Icon" className="icon" />
              Report Issues
            </button>
          </div>
          {/* Display representatives data */}
          {representativesLoading && <p>Loading Representatives Data...</p>}
          {representativesError && <p>Error: {representativesError.message}</p>}
          {representatives && (
            <div>
              <h2>Representatives</h2>
              {Object.entries(representatives).map(([state, stateData]) => (
                <div key={state}>
                  <h3>{state}</h3>
                  <h4>Executive</h4>
                  <p>Governor: {stateData.executive.governor}</p>
                  <p>Deputy Governor: {stateData.executive.deputyGovernor}</p>
                  <h4>Legislature</h4>
                  <p>Speaker: {stateData.legislature.speaker}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Hero2;